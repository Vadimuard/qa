import Directory from './directory.js';
import { BinaryFile, LogFile, BufferFile } from './file-types.js';
import { ALLOWED_TYPES, NOT_FOUND_ERROR } from '../constants.js';
import parsePath from '../helpers/parsePath.js';

export default class FileSystem {
  #self = new Directory('root');

  mkdir(path) {
    const { directoryName, directoryPath } = parsePath(path);
    let currentDir = this.#self.getChild('/' + directoryPath);
    currentDir.insertChild(new Directory('/' + directoryName));
  }

  ls(path = '/') {
    const dir = this.#self.getChild(path);
    const children = dir.listChildren();
    const sortedChildren = [...children.entries()].sort();
    const sortedDirectories = sortedChildren.map((ch) => ch[1]);
    console.dir(`Contents of "${path}":`);
    for (const dir of sortedDirectories) {
      console.log(dir.name);
    }
  }

  mv(oldPath, newPath) {
    const { directoryName: oldDirName, directoryPath: oldDirPath } =
      parsePath(oldPath);
    const oldParentDir = this.#self.getChild('/' + oldDirPath);
    const oldDir = oldParentDir.deleteChild('/' + oldDirName);
    const { directoryName: newDirName, directoryPath: newDirPath } =
      parsePath(newPath);
    oldDir.name = newDirName;
    const currentDir = this.#self.getChild('/' + newDirPath);
    currentDir.insertChild(oldDir);
  }

  rm(path) {
    const { directoryName, directoryPath } = parsePath(path);
    const dir = this.#self.getChild(directoryPath);
    dir.deleteChild(directoryName);
  }

  cat(filePath) {}

  touch(path, contents = '') {}

  appendToFile(filePath, line) {}

  consumeLastElement(filePath) {}
}
