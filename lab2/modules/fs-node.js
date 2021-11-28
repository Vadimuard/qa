export default class FSNode {
  #name = '';
  #parent = null;

  constructor(name) {
    this.#name = name;
  }

  get path() {

  }

  get name() {
    return this.#name;
  }

  set name(newName) {

  }

  get parent() {
    return this.#parent;
  }

  set parent(newParent) {

  }
}
