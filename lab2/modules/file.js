import FSNode from "./fs-node";
import {ALLOWED_TYPES} from "./filesystem";

export default class File extends FSNode {
  #content = '';
  #ext = '';

  get fileType() {
    return this.#ext === 'bin' ? ALLOWED_TYPES.BINARY
      : this.#ext === 'log' ? ALLOWED_TYPES.LOG
        : this.#ext === 'buf' ? ALLOWED_TYPES.BUFFER
          : ALLOWED_TYPES.DEFAULT;
  }
}
