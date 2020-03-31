import { readFileSync } from 'fs';
import path from 'path';

export const toBase64 = (imagePath) => {
  const resolvedPath = resolvePath(imagePath);
  const bitmap = readFileSync(resolvedPath);
  return new Buffer.from(bitmap).toString('base64');
};

const resolvePath = (p) => {
  return path.join(process.cwd(), p);
};
