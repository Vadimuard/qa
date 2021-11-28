export default function parsePath(path) {
  const dirParts = path.split('/');
  const directoryName = dirParts.at(-1);
  const directoryPath = dirParts.slice(1, -1).join('/');
  return {
    directoryName,
    directoryPath,
  };
}
