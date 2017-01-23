const fs = require('mz/fs');
const path = require('path');
const glob = require('glob-promise');

module.exports = {
  getFilesData: async (dataSetDir) => {
    const elements = await fs.readdir(dataSetDir);

    return elements.reduce(async(resultPromise, langDir) => {
      const directoryPath = path.join(dataSetDir, langDir);
      if (!(await fs.stat(directoryPath)).isDirectory()) {
        return resultPromise;
      }

      const files = await glob(`**/*.${langDir}`, {
        cwd: path.join(dataSetDir, langDir),
        nodir: true
      });

      const result = await resultPromise;

      return result.concat(files.map(file =>
        path.join(dataSetDir, langDir, file)
      ));
    }, []);
  },
};
