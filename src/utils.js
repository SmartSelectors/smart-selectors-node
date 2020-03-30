import { readFileSync } from 'fs';

export const toBase64 = (imagePath) => {
  const resolvedPath = resolvePath(imagePath);
  const bitmap = readFileSync(resolvedPath);
  return new Buffer.from(bitmap).toString('base64');
};

const resolvePath = (path) => {
  return path.join(process.cwd(), path);
};
