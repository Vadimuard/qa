import FSNode from './fs-node';
import { ALLOWED_TYPES } from './filesystem';

export default class File extends FSNode {
  #content = '';
  #ext = '';

  constructor(fileName) {
    super(fileName);
    this.#ext = fileName.split('.')[1];
  }

  get fileType() {
    return this.#ext === 'bin'
      ? ALLOWED_TYPES.BINARY
      : this.#ext === 'log'
      ? ALLOWED_TYPES.LOG
      : this.#ext === 'buf'
      ? ALLOWED_TYPES.BUFFER
      : ALLOWED_TYPES.DEFAULT;
  }

  get content() {
    return this.#content;
  }

  set content(newContent) {}
}
