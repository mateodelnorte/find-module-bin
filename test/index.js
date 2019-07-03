const find = require('..');
const path = require('path');
const should = require('should');

describe('find-module-bin', () => {
  it('should find bin in approriate folder', () => {
    const filepath = find('babel');
    filepath.should.eql(path.join(__dirname, '..', 'node_modules', '.bin', 'babel'));
  });
});
