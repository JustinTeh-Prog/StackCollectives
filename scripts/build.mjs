// Assemble the publishable site in dist/. Only the page and its assets are
// copied, so the docs, scripts and any local working files never get deployed.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const include = ['index.html', 'assets'];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist);
for (const entry of include) {
  cpSync(join(root, entry), join(dist, entry), { recursive: true });
}
console.log(`Built dist/ from: ${include.join(', ')}`);
