var exec   = require('child_process').exec,
    should = require('should');

describe('cli', function () {
    var binPath = __dirname + '/../bin/css-bird';
    var cssPath = __dirname + '/fixtures/sample-01.css';

    it('exec', function (done) {
        exec(binPath + ' ' + cssPath, function (err) {
            should.not.exist(err);
            done();
        });
    });
});