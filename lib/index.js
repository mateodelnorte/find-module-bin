'use strict';

var debug = require('debug')('loop:find-module-bin');
var fs = require('fs');
var path = require('path');

var nodeModulePaths = require('global-paths')();

module.exports = function findBinFile(binFileName) {

  var nmp = nodeModulePaths.pop();

  if (!nmp) throw new Error('could not find ' + binFileName);

  try {

    var p = path.join(nmp, '.bin', binFileName);

    debug('looking for ' + binFileName + ' at ' + p);

    nmp = fs.statSync(p);

    debug('found ' + binFileName + ' at ' + p);

    return p;
  } catch (e) {

    return findBinFile(binFileName);
  }
};