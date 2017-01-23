const fs = require('mz/fs');
const brain = require('brain.js');
const dataGather = require('./src/dataGather');
const net = new brain.NeuralNetwork();

const filePath = process.argv[2];
if (!filePath) {
  process.stderr.write('Please provide path to file.')
}

(async () => {
  const netData = await fs.readFile('netData.json', 'utf-8');
  const input = await dataGather(filePath);

  net.fromJSON(JSON.parse(netData));
  const result = net.run(input);

  process.stdout.write(JSON.stringify(result));
})();
process.stdout.write(`Processing...\n`);
