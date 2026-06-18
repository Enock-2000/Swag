import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const source = path.join(root, 'src', 'swag.html');
const output = path.join(dist, 'index.html');
const publicDir = path.join(root, 'public');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(source, output);
await cp(publicDir, dist, { recursive: true });

console.log('Built dist/index.html from src/swag.html');
