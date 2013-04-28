var fs = require('fs');

var CSSBird = require('../');

require('should');

describe('get selector list', function () {
    var stylesheet = fs.readFileSync(__dirname + '/css/sample-01.css');
    var cssBird = new CSSBird(stylesheet);

    var selectors = cssBird.selectors;
    selectors.should.have.property('body');
    selectors.should.have.property('#wrap');
    selectors.should.have.property('.box');
});