import { ALLOWED_TYPES } from '../constants.js';

export default function getFileExtension(fileName) {
  const ext = fileName.split('.').at(-1);
  return ext === 'bin'
    ? ALLOWED_TYPES.BINARY
    : ext === 'log'
    ? ALLOWED_TYPES.LOG
    : ext === 'buf'
    ? ALLOWED_TYPES.BUFFER
    : ALLOWED_TYPES.DEFAULT;
}
