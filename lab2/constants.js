export const ALLOWED_TYPES = {
  BINARY: 'BINARY',
  LOG: 'LOG',
  BUFFER: 'BUFFER',
  DEFAULT: '',
};

export const NOT_FOUND_ERROR = (path) => {
  return `Error: "${path}" does not exist`;
};
