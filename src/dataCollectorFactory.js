const glob = require('glob');
const dataCollector = require('./dataGather');

module.exports = {
  create: (path) => {
    const languages = glob.sync('*', { cwd: path });
    const generateOutput = (path) =>
      languages.reduce((result, language) => {
        result[language] = language === path.split('.').pop();

        return result;
      }, {});

    return ({
      getData: async (path) => {
        const input = await dataCollector(path);
        const output = generateOutput(path);

        return {
          input,
          output,
        };
      },
    });
  },
};
