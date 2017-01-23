const brain = require('brain.js');
const net = new brain.NeuralNetwork();
const fs = require('mz/fs');
const path = require('path');

const options = {
  errorThresh: 0.0001,
  iterations: 50,
  log: true,
  logPeriod: 2,
  learningRate: 0.3,
};

(async () => {
  const fileData = await fs.readFile(path.join(__dirname, 'filesData.json'));
  const data = JSON.parse(fileData);

  process.stdout.write(`Learning...\n`);
  net.train(data, options);

  await fs.writeFile('netData.json', JSON.stringify(net.toJSON()));
  process.stdout.write(`Generated netData\n`);
})();
