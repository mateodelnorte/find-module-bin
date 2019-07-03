const fs = require('fs');
const path = require('path');
const debug = require('debug')('find-module-bin');
const globalPaths = require('global-paths');

module.exports = function findModuleBin(binFileName, cwd) {
  const searchPaths = globalPaths(cwd);
  for (let i = 0; i < searchPaths.length; i++) {
    const binPath = path.join(searchPaths[i], '.bin', binFileName);
    debug(`looking for ${binFileName} at ${binPath}`);
    if (fs.existsSync(binPath)) {
      debug(`found ${binFileName} at ${binPath}`);
      return binPath;
    }
  }
  throw new Error(`could not find ${binFileName}`);
};
