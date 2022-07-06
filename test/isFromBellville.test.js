import assert from 'assert';
import isFromBellville from '../isFromBellville.js';
describe("IsFromBellville", function(){
    it("should return true if registration number starts with CY and is from Bellville", function(){
        assert.equal(isFromBellville("CY 123"),true );
    });
    it("should return false if registration number is not from Bellville", function(){
        assert.equal(isFromBellville("CJ 123"),false );
    });
});