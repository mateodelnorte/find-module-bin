const fs = require('fs');
const path = require('path');
const debug = require('debug')('loop:find-module-bin');

const nodeModulePaths = require('global-paths')();

module.exports = function findBinFile(binFileName) {
  const nmp = nodeModulePaths.pop();
  if (!nmp) {
    throw new Error(`could not find ${binFileName}`);
  }
  try {
    const p = path.join(nmp, '.bin', binFileName);
    debug(`looking for ${binFileName} at ${p}`);

    nmp = fs.statSync(p);
    debug(`found ${binFileName} at ${p}`);

    return p;
  } catch (e) {
    return findBinFile(binFileName);
  }
};
