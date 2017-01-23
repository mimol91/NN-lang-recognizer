const fs = require('mz/fs');
const path = require('path');
const dataCollectorFactory = require('./src/dataCollectorFactory');
const fileGather = require('./src/fileGather');
const dataSetDir = path.join(__dirname, 'dataset');
const dataCollector = dataCollectorFactory.create(dataSetDir);

(async () => {
  const files = await fileGather.getFilesData(dataSetDir);
  const data = await Promise.all(files.map(dataCollector.getData));
  await fs.writeFile('filesData.json', JSON.stringify(data));

  process.stdout.write(`Generated filesData\n`);
})();

process.stdout.write(`Generating...\n`);
