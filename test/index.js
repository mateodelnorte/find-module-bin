const find = require('../');
const should = require('should');

describe('find-module-bin', function () {

  it('should find bin in approriate folder', function () {

    const path = find('babel');

    path.should.eql('/Users/mateodelnorte/development/find-module-bin/node_modules/.bin/babel');

  });

});