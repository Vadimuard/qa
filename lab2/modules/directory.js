import FSNode from "./fs-node";

export default class Directory extends FSNode {
  #children = new Map();

  constructor(directoryName) {
    super(directoryName);
  }

  listChildren() {

  }

  hasChild(childName) {
    return this.#children.has(childName);
  }

  getChild(childName) {

  }

  insertChild(newChild) {

  }

  deleteChild(childName) {

  }
}
