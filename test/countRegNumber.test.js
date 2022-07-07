// import assert from 'assert';
// import countRegNumber from '../countRegNumber.js';
var assert = require('assert');
var countRegNumber = require('../countRegNumber.js');

describe("CountRegNumber",function(){
    it("should return the number of registration numbers in the given string",function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3)
        assert.equal(countRegNumber('CA 182736'),1)
    });
});