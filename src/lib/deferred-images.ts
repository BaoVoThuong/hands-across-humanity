/**
 * Release deferred photographs only when they approach the viewport.
 *
 * The previous strategy waited for the priority image and then released every
 * below-the-fold photo together. On the Events page that meant 18 transforms
 * and requests competed at once, so the reader could scroll into a gallery of
 * empty boxes while Sharp was still generating the images in development.
 */
type NetworkInformationLike = {
  effectiveType?: string;
  saveData?: boolean;
};

let started = false;
let observer: IntersectionObserver | undefined;

function setState(picture: HTMLPictureElement, state: 'held' | 'loading' | 'loaded' | 'error') {
  picture.dataset.deferredState = state;
  picture.setAttribute('aria-busy', state === 'held' || state === 'loading' ? 'true' : 'false');
}

function useFallback(picture: HTMLPictureElement, img: HTMLImageElement) {
  if (picture.dataset.deferredFallbackTried === 'true') {
    setState(picture, 'error');
    return;
  }

  const src = picture.dataset.fallbackSrc;
  if (!src) {
    setState(picture, 'error');
    return;
  }

  picture.dataset.deferredFallbackTried = 'true';
  picture.querySelectorAll('source').forEach((source) => source.removeAttribute('srcset'));

  const settle = () => setState(picture, img.naturalWidth > 0 ? 'loaded' : 'error');
  img.addEventListener('load', settle, { once: true });
  img.addEventListener('error', settle, { once: true });
  img.srcset = picture.dataset.fallbackSrcset ?? '';
  img.src = src;

  if (img.complete) settle();
}

function swap(picture: HTMLPictureElement) {
  const state = picture.dataset.deferredState;
  if (state === 'loading' || state === 'loaded' || state === 'error') return;
  setState(picture, 'loading');

  picture.querySelectorAll<HTMLSourceElement>('source[data-srcset]').forEach((source) => {
    source.srcset = source.dataset.srcset ?? '';
    source.removeAttribute('data-srcset');
  });

  // The <img> goes last: changing it is what makes the browser re-run source
  // selection, so the <source> candidates have to be in place first.
  const img = picture.querySelector('img');
  if (!img) {
    setState(picture, 'error');
    return;
  }

  const settle = () => setState(picture, img.naturalWidth > 0 ? 'loaded' : 'error');
  img.addEventListener('load', settle, { once: true });
  img.addEventListener('error', () => useFallback(picture, img), { once: true });

  if (img.dataset.srcset) {
    img.srcset = img.dataset.srcset;
    img.removeAttribute('data-srcset');
  }
  if (img.dataset.src) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  }

  if (img.complete) settle();
}

/** Release one deferred picture. Used for manual carousel slides. */
export async function activatePicture(picture: Element | null | undefined): Promise<void> {
  if (!(picture instanceof HTMLPictureElement)) return;
  swap(picture);
}

/**
 * For carousels: release the picture inside a slide and wait until its image
 * can be shown, so a slide never fades in empty. Capped, because a carousel
 * that stalls on one slow photo is worse than one that shows it a moment late.
 */
export async function whenSlideReady(slide: Element | null | undefined, maxWait = 1200): Promise<void> {
  if (!slide) return;
  const ready = (async () => {
    await activatePicture(slide.querySelector('picture[data-deferred]'));
    const img = slide.querySelector('img');
    if (!img || (img.complete && img.naturalWidth > 0)) return;
    await new Promise<void>((resolve) => {
      img.addEventListener('load', () => resolve(), { once: true });
      img.addEventListener('error', () => resolve(), { once: true });
    });
  })();
  await Promise.race([ready, new Promise<void>((resolve) => setTimeout(resolve, maxWait))]);
}

export function startDeferredImages(): void {
  if (started) return;
  started = true;

  const pictures = Array.from(document.querySelectorAll<HTMLPictureElement>('picture[data-deferred="auto"]'));
  if (!pictures.length) return;

  if (!('IntersectionObserver' in window)) {
    // Older browsers still get the content, but in small batches rather than
    // starting an entire gallery at once.
    const queue = [...pictures];
    const releaseBatch = () => {
      queue.splice(0, 2).forEach(swap);
      if (queue.length) window.setTimeout(releaseBatch, 250);
    };
    releaseBatch();
    return;
  }

  const connection = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
  const constrained = connection?.saveData || connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g';
  const rootMargin = constrained ? '180px 0px' : '720px 0px';

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const picture = entry.target;
      observer?.unobserve(picture);
      swap(picture as HTMLPictureElement);
    });
  }, { rootMargin, threshold: 0.01 });

  pictures.forEach((picture) => observer?.observe(picture));
}

/**
 * Stop this page's downloads the moment someone clicks through to another page.
 *
 * Measured on Slow 4G: clicking from What We Do to Events 300ms after its main
 * image appeared, six photographs still downloading on What We Do held the
 * connection until the new document committed — the browser only cancels them
 * then. Events' HTML queued behind them, so its main image appeared at 3.9s
 * instead of 1.3s. Cancelling at the click frees the connection before the
 * navigation request goes out. The click's own navigation starts after this
 * handler returns, so it is not affected.
 */
export function stopLoadingOnNavigate(): void {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element | null)?.closest?.('a[href]');
    if (!(link instanceof HTMLAnchorElement)) return;
    if ((link.target && link.target !== '_self') || link.hasAttribute('download')) return;
    const url = new URL(link.href, location.href);
    // Same-page anchors keep loading: the reader is staying on this page.
    if (url.origin !== location.origin || url.pathname === location.pathname) return;
    window.stop();
  });
}
