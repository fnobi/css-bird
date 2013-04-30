var CSSBird = require('./');

var cli = function (callback) {
    callback = callback || function () {};

    console.log('[do nothing.]');

    callback();
};

module.exports = cli;