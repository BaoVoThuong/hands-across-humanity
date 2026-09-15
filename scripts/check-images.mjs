// Guards the image-loading order that made switching pages slow.
//
// Both regressions were measured on Slow 4G. A page that fetches more than one
// image eagerly: the About Us carousel once requested all five slides at once,
// 1.1 MB, and even its first slide took 7.4s to appear. And a below-the-fold
// image shipped with a live srcset: Chrome widens its lazy-load distance on slow
// connections, so those downloads started beside the hero anyway. Mission's hero
// took 3.7s with them and 1.2s without. Below-the-fold images go through
// DeferredPicture, which ships data-srcset instead.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name === 'index.html') pages.push(path);
  }
})('dist');

const problems = [];
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  // DeferredPicture deliberately emits a fully functional <noscript> copy.
  // The live document must keep that fallback intact, but it is not part of
  // the JavaScript loading strategy this check is validating.
  const clientHtml = html.replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
  const images = (clientHtml.match(/<img\b[^>]*>/g) ?? []).filter((tag) => !/brand__logo-img/.test(tag));
  const eager = images.filter((tag) => /\bloading="eager"/.test(tag));
  const priority = images.filter((tag) => /\bfetchpriority="high"/.test(tag));
  const liveLazy = images.filter((tag) => /\bloading="lazy"/.test(tag) && /\ssrcset="/.test(tag));
  if (eager.length > 1) problems.push(`${page}: ${eager.length} eager images — only the priority image may load with the page`);
  if (priority.length > 1) problems.push(`${page}: ${priority.length} images marked fetchpriority="high" — at most one`);
  if (liveLazy.length) problems.push(`${page}: ${liveLazy.length} lazy image(s) with a live srcset — render them with DeferredPicture`);
}

if (problems.length) {
  console.error(`check:images failed\n${problems.map((p) => `  ${p}`).join('\n')}`);
  process.exit(1);
}
console.log(`check:images ok — ${pages.length} pages`);
