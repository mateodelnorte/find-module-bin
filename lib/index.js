'use strict';

var fs = require('fs');
var path = require('path');
var debug = require('debug')('find-module-bin');
var globalPaths = require('global-paths');

module.exports = function findModuleBin(binFileName, cwd) {
  var searchPaths = globalPaths(cwd);
  for (var i = 0; i < searchPaths.length; i++) {
    var binPath = path.join(searchPaths[i], '.bin', binFileName);
    debug('looking for ' + binFileName + ' at ' + binPath);
    if (fs.existsSync(binPath)) {
      debug('found ' + binFileName + ' at ' + binPath);
      return binPath;
    }
  }
  throw new Error('could not find ' + binFileName);
};
