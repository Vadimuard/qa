export const ALLOWED_TYPES = {
  BINARY: 'BINARY',
  LOG: 'LOG',
  BUFFER: 'BUFFER',
  DEFAULT: '',
};

export const NOT_FOUND_ERROR = (path) => {
  return `Error: "${path}" does not exist`;
};

export const NOT_SUPPORTED_EXT_ERROR = (ext) => {
  return `Error: ${ext} is not supported`;
};
