const find = require('../');
const path = require('path');
const should = require('should');

describe('find-module-bin', function () {

  it('should find bin in approriate folder', function () {

    const filepath = find('babel');

    filepath.should.eql(path.join(__dirname, '..', 'node_modules', '.bin', 'babel'));

  });

});
