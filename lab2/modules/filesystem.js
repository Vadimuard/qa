import Directory from "./directory";
import {BinaryFile, LogFile, BufferFile} from "./file-types";

export const ALLOWED_TYPES = {
  BINARY: 'BINARY',
  LOG: 'LOG',
  BUFFER: 'BUFFER',
  DEFAULT: ''
}

export default class FileSystem {
  #self = new Directory('root')

  mkdir(dirPath) {

  }

  mv(oldPath, newPath) {

  }

  rm(path) {

  }

  touch(path, contents='') {

  }

  appendToFile(filePath, line) {

  }

  consumeLastElement(filePath) {

  }
}
