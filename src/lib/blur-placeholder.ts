/**
 * A tiny blurred preview of a photograph, inlined as a data URL.
 *
 * Photos used to open as flat grey boxes until the real file arrived, about a
 * second on a normal connection. Painting this preview behind each photo shows
 * its colours and shapes at once, and the sharp image fades in over it.
 *
 * Each preview is a 20px-wide WebP (a few hundred bytes), made once per photo
 * at build time from the source file Astro records on the imported image.
 */
import sharp from 'sharp';

const cache = new Map<string, Promise<string | undefined>>();

export function blurPlaceholder(image: ImageMetadata): Promise<string | undefined> {
  // Astro attaches the source path to imported images during the build and in
  // dev, as a non-enumerable property.
  const fsPath = (image as ImageMetadata & { fsPath?: string }).fsPath;
  if (!fsPath) return Promise.resolve(undefined);

  let preview = cache.get(fsPath);
  if (!preview) {
    preview = sharp(fsPath)
      .resize({ width: 20 })
      .blur(0.6)
      .webp({ quality: 45 })
      .toBuffer()
      .then((buffer) => `data:image/webp;base64,${buffer.toString('base64')}`)
      .catch(() => undefined);
    cache.set(fsPath, preview);
  }
  return preview;
}

/** Inline style that paints the preview behind a photo's box. */
export async function blurBackground(image: ImageMetadata): Promise<string | undefined> {
  const url = await blurPlaceholder(image);
  return url ? `background-image:url(${url});background-size:cover;background-position:center` : undefined;
}
