import Directory from './directory.js';
import { BinaryFile, LogFile, BufferFile } from './file-types.js';
import {
  ALLOWED_TYPES,
  NOT_FOUND_ERROR,
  NOT_SUPPORTED_EXT_ERROR,
} from '../constants.js';
import parsePath from '../helpers/parsePath.js';
import getFileExtension from '../helpers/getFileExtension.js';

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
    const sortedDirectories = sortedChildren.map((ch) => ch[1].name);
    console.log(`Contents of "${path}":`);
    for (const dir of sortedDirectories) {
      console.dir(dir);
    }
    return sortedDirectories.join('\n');
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

  cat(filePath) {
    const { directoryPath, directoryName: fileName } = parsePath(filePath);
    const currentDir = this.#self.getChild(directoryPath);
    const file = currentDir.getChild(fileName);
    console.log(`Contents of ${filePath}:`);
    console.dir(file.content);
    return file.content;
  }

  touch(path, contents = '') {
    const { directoryPath, directoryName: fileName } = parsePath(path);
    const currentDir = this.#self.getChild(directoryPath);
    const ext = getFileExtension(fileName);
    let newFile = {};

    switch (ext) {
      case ALLOWED_TYPES.BINARY:
        newFile = new BinaryFile(fileName);
        newFile.content = contents;
        break;
      case ALLOWED_TYPES.LOG:
        newFile = new LogFile(fileName, contents);
        newFile.content = contents;
        break;
      case ALLOWED_TYPES.BUFFER:
        newFile = new BufferFile(fileName);
        break;
      default:
        throw new Error(NOT_SUPPORTED_EXT_ERROR(ext));
    }
    currentDir.insertChild(newFile);
  }

  appendToFile(filePath, line) {
    const { directoryPath, directoryName: fileName } = parsePath(filePath);
    const ext = getFileExtension(fileName);
    const currentDir = this.#self.getChild(directoryPath);
    const file = currentDir.getChild(fileName);

    switch (ext) {
      case ALLOWED_TYPES.LOG:
      case ALLOWED_TYPES.BUFFER:
        const isFileEmpty = file.content === '';
        if (isFileEmpty) {
          file.content = line;
        } else {
          const lines = file.content.split('\n');
          lines.push(line);
          file.content = lines.join('\n');
        }
        break;
      default:
        throw new Error(NOT_SUPPORTED_EXT_ERROR(ext));
    }
    return line;
  }

  consumeLastElement(filePath) {
    const { directoryPath, directoryName: fileName } = parsePath(filePath);
    const ext = getFileExtension(fileName);
    const currentDir = this.#self.getChild(directoryPath);
    const file = currentDir.getChild(fileName);

    switch (ext) {
      case ALLOWED_TYPES.BUFFER:
        const isFileEmpty = file.content === '';
        if (isFileEmpty) {
          console.log(`Buffer ${filePath} is empty`);
          return `Buffer "${filePath}" is empty`;
        } else {
          const lines = file.content.split('\n');
          const line = lines.pop();
          file.content = lines.join('\n');
          console.log(`One line was consumed from buffer ${filePath}:`);
          console.dir(line);
          return line;
        }
        break;
      default:
        throw new Error(NOT_SUPPORTED_EXT_ERROR(ext));
    }
  }
}
