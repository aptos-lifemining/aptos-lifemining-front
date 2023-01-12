const micromatch = require('micromatch');

module.exports = (allStagedFiles) => {
  const notConfigfiles = micromatch.not(allStagedFiles, ['**/*.config.*']);
  const eslintFiles = micromatch(notConfigfiles, ['**/*.{js,jsx,ts,tsx}']);
  const linters = [];

  const addQuotes = (a) => `"${a}"`;

  if (eslintFiles.length > 0) {
    linters.push(`eslint --max-warnings=0 --fix ${eslintFiles.join(' ')}`);
    linters.push(`prettier --write ${eslintFiles.map(addQuotes).join(' ')}`);
  }

  return linters;
};
