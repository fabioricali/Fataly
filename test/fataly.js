/**
 * Created by fabioricali on 23/06/2017.
 */
var assert = require('assert');
var fataly = require('../index');

describe('fataly', function () {
    it('should be return an error', function (done) {
        try {
            fataly('This is my error');
            done('fail');
        } catch (e) {
            console.log(e);
            done()
        }
    });
    it('window, should be return an error', function (done) {
        try {
            var window = {};
            fataly('This is my error');
            done('fail');
        } catch (e) {
            console.log(e);
            done()
        }
    });
    it('define, should be return an error', function (done) {
        try {
            function define() {}
            define.amd = {};
            fataly('This is my error');
            done('fail');
        } catch (e) {
            console.log(e);
            done()
        }
    });
    it('undefined message, should be return anyway an error', function (done) {
        try {
            fataly();
            done('fail');
        } catch (e) {
            console.log(e);
            done()
        }
    });
});