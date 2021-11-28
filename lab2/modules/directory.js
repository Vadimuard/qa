import FSNode from './fs-node.js';
import { NOT_FOUND_ERROR } from '../constants.js';

export default class Directory extends FSNode {
  #children = new Map();
  constructor(directoryName) {
    if (directoryName === 'root') directoryName = '/';
    super(directoryName);
  }

  listChildren() {
    return this.#children;
  }

  hasChild(childName) {
    return this.#children.has(childName);
  }

  getChild(childName) {
    if (childName === '/') return this;
    let child = this.#children.get(childName);
    if (!child) {
      const [first, second, ...rest] = childName.split('/');
      if (!rest || (rest && rest.length === 0))
        throw new Error(NOT_FOUND_ERROR(childName));
      const targetChildName = '/' + rest.join('/');
      const nextChild = this.getChild('/' + second);
      child = nextChild.getChild(targetChildName);
    }
    if (!child) throw new Error(NOT_FOUND_ERROR(childName));
    return child;
  }

  insertChild(newChild) {
    if (this.hasChild(newChild.name)) return true;
    let parent = this.parent;

    while (parent !== null) {
      if (parent === newChild) {
        throw new Error('Directory cannot contain one of its ancestors');
      }
      parent = parent.parent;
    }

    this.#children.set(newChild.name, newChild);
    newChild.parent = this;

    return this.hasChild(newChild.name);
  }

  deleteChild(childName) {
    if (this.hasChild(childName)) throw new Error(NOT_FOUND_ERROR(childName));
    const child = this.#children.get(childName);
    if (this.#children.delete(childName)) throw new Error('Unknown error');
    return child;
  }
}
