import { toBase64 } from './src/utils';

const arg = process.argv[2];
console.log(arg);
console.log(toBase64(arg));
