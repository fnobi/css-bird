var parse = require('css-parse');

var CSSBird = function (stylesheet) {
    var obj = parse(stylesheet);

    var selectors = {};
    obj.stylesheet.rules.forEach(function (rule) {
        rule.selectors.forEach(function (selector) {
            selectors[selector] = {};
        });
    });

    this.selectors = selectors;
};

CSSBird.cli = require('./cli');

module.exports = CSSBird;