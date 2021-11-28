import FileSystem from './modules/filesystem';

const fs = new FileSystem();

fs.mkdir('/bin');
fs.mkdir('/log');
fs.mkdir('/buf');
fs.mkdir('/bin/sub-bin');

fs.touch('/bin/first.bin', 'binary 1');
fs.touch('/bin/second.bin', 'binary 2');
fs.touch('/log/app.log');
fs.touch('/buf/first.buf', '--------------');

fs.appendToFile('/log/app.log', 'app created successfully');
fs.appendToFile('/buf/first.buf', 'second line of the buffer');
fs.consumeLastElement('/buf/first.buf');
