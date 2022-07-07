// import assert from 'assert';
// import totalPhoneBill from '../totalPhoneBill.js';
var assert = require('assert');
var totalPhoneBill = require('../totalPhoneBill.js');
describe("TotalPhoneBill", function() {

    it("should return the total of R7.45", function() {
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45'); 
    });

    it("should return the total of R3.40", function() {
        assert.equal(totalPhoneBill('call, sms'),'R3.40'); 
    });
    it("should return the total of R1.30", function() {
        assert.equal(totalPhoneBill('sms, sms'),'R1.30'); 
    });
    it("should return the total of R2.75", function() {
        assert.equal(totalPhoneBill('call'),'R2.75'); 
    });
    it("should return the total of R0.65", function() {
        assert.equal(totalPhoneBill('sms'),'R0.65'); 
    });
    it("should return the total of R0.00", function() {
        assert.equal(totalPhoneBill(''),'R0.00'); 
    });
});