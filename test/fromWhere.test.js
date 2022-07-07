// import assert from 'assert';
// import fromWhere from '../fromWhere.js';
var assert = require('assert');
var fromWhere = require('../fromWhere.js');
describe("FromWhere", function() {

    describe("Bellville", function() {
        it("should return Bellville if the registration number start with CY", function() {
            assert.equal(fromWhere('CY'), 'Bellville');
        });
    });

    describe("Paarl", function() {
        it("should return Paarl if the registration number start with CJ", function() {
            assert.equal(fromWhere('CJ'), 'Paarl');
        });
    });

    describe("Cape Town", function() {
        it("should return Cape Town if the registration number start with CA", function() {
            assert.equal(fromWhere('CA'), 'Cape Town');
        });
    });

    describe("Some other place", function() {
        it("should return Some other place if the registration number start with CY|CJ|CA", function() {
            assert.equal(fromWhere('CC'), 'Some other place!');
        });
    });
    
});