var parse = require('css-parse');

var CSSBird = function (stylesheet) {
    var obj = parse(stylesheet);

    var selectors = {};
    obj.stylesheet.rules.forEach(function (rule) {
        selectors[rule.selectors[0]] = {};
    });

    this.selectors = selectors;
};

CSSBird.cli = require('./cli');

module.exports = CSSBird;