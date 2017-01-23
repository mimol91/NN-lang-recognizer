const glob = require('glob');
const path = require('path');
const R = require('ramda');

const keywords = glob.sync(path.join(__dirname, 'langs') + '/*.js').reduce((result, file) => (
  result.concat(require(path.resolve(file)))
), []);

const getPossibleKeywords = R.pipe(
  R.values,
  R.flatten,
  R.uniq
);

module.exports = getPossibleKeywords(keywords);
