// Pre-deploy checks for the static site: every local src/href in index.html
// must resolve to a file, and every image needs an alt attribute.
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const errors = [];

for (const [, attr, value] of html.matchAll(/\s(src|href)="([^"]*)"/g)) {
  if (/^(https?:|mailto:|tel:|#|data:)/.test(value) || value === '') continue;
  const path = decodeURI(value.split(/[?#]/)[0]);
  if (!existsSync(join(root, path))) errors.push(`${attr}="${value}" does not exist`);
}

for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
  if (!/\salt="/.test(tag)) errors.push(`image without alt: ${tag}`);
}

if (errors.length) {
  console.error(`check failed:\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log('check passed: all local references resolve, all images have alt text');
