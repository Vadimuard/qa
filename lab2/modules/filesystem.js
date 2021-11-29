import Directory from './directory.js';
import { BinaryFile, LogFile, BufferFile } from './file-types.js';
import { ALLOWED_TYPES, NOT_FOUND_ERROR } from '../constants.js';
import parsePath from '../helpers/parsePath.js';

export default class FileSystem {
  #self = new Directory('root');

  mkdir(path) {
    const { directoryName, directoryPath } = parsePath(path);
    let currentDir = this.#self.getChild(directoryPath);
    currentDir.insertChild(new Directory(directoryName));
  }

  ls(path = '/') {
    const dir = this.#self.getChild(path);
    const children = dir.listChildren();
    const sortedChildren = [...children.entries()].sort();
    const sortedDirectories = sortedChildren.map((ch) => ch[1]);
    console.log(`Contents of "${path}":`);
    for (const dir of sortedDirectories) {
      console.dir(dir.name);
    }
  }

  mv(oldPath, newPath) {
    const oldDir = this.rm(oldPath);
    const { directoryName: newDirName, directoryPath: newDirPath } =
      parsePath(newPath);
    oldDir.name = newDirName;
    const currentDir = this.#self.getChild(newDirPath);
    currentDir.insertChild(oldDir);
  }

  rm(path) {
    const { directoryName, directoryPath } = parsePath(path);
    const dir = this.#self.getChild(directoryPath);
    return dir.deleteChild(directoryName);
  }

  cat(filePath) {}

  touch(path, contents = '') {}

  appendToFile(filePath, line) {}

  consumeLastElement(filePath) {}
}
