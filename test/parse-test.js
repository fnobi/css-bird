var fs = require('fs');

var CSSBird = require('../');

require('should');

describe('parser', function () {
    var stylesheet = fs.readFileSync(__dirname + '/fixtures/sample-01.css');
    var cssBird = new CSSBird(stylesheet);
    var selectors = cssBird.selectors;

    it('get selector list', function () {
        selectors.should.have.property('body');
        selectors.should.have.property('#wrap');
        selectors.should.have.property('.box');
        selectors.should.have.property('#wrap .contArticle');
    });

    it('get listed selector', function () {
        selectors.should.have.property('.prev');
        selectors.should.have.property('.next');
    });
});