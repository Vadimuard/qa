import FSNode from './fs-node.js';
import { ALLOWED_TYPES } from '../constants.js';
import getFileExtension from '../helpers/getFileExtension.js';

export default class File extends FSNode {
  #content = '';
  #ext = '';

  constructor(fileName) {
    super(fileName);
    this.#ext = getFileExtension(fileName);
  }

  get fileType() {
    this.#ext;
  }

  get content() {
    return this.#content;
  }

  set content(newContent) {
    this.#content = newContent;
  }
}
