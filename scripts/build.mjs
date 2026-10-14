// Assemble the publishable site in dist/. Only the files the page needs are
// copied, so working material in uploads/ and the docs never get deployed.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const include = ['index.html', '_ds', 'assets'];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist);
for (const entry of include) {
  cpSync(join(root, entry), join(dist, entry), { recursive: true });
}
console.log(`Built dist/ from: ${include.join(', ')}`);
