const fs = require('mz/fs');
const R = require('ramda');
const keywords = require('./keywords');
const occurrences = require('./occurrences');
const K = 100;

const getData = async(path) => {
  const text = await fs.readFile(path, 'utf-8');
  const stats = keywords.reduce((result, keyword) => (
    R.assoc(keyword, occurrences(text, keyword), result)
  ), {});
  const totalOccurrences = R.sum(Object.values(stats));

  return R.zipObj(
    Object.keys(stats),
    Object.values(stats).map(occurrences => K * occurrences  / totalOccurrences)
  );
};

module.exports = getData;
