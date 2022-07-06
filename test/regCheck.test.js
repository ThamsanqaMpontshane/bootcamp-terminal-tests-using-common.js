import assert from 'assert';
import regCheck from '../regCheck.js';
describe("RegCheck", function() {


    //GAUTENG
    describe("GAUTENG", function() {
    it("should return true if registration number ends with GP", function() {
        assert.equal(regCheck("DC 55 YU GP", "GP"), true);
    });
    it("should return false if registration number does not end with GP", function() {
        assert.equal(regCheck("DC 55 YU EC", "GP"), false);
    });
});


    //LIMPOMPO
    describe("LIMPOMPO", function() {
    it("should return true if registration number ends with L", function() {
        assert.equal(regCheck("5566 L", "L"), true);
        });
    it("should return false if registration number does not end with L", function() {
        assert.equal(regCheck("5566 B", "L"), false);
    });
});


    //EASTERN CAPE
    describe("EASTERN CAPE", function() {
    it("should return true if registration number ends with EC", function() {
        assert.equal(regCheck("ERT 123 EC", "EC"), true);
    });
    it("should return false if registration number does not end with EC", function() {
        assert.equal(regCheck("ERT 123 GP", "EC"), false);
    });
});


    //MPUMALANGA
    describe("MPUMALANGA", function() {
    it("should return true if registration number ends with MP", function() {
        assert.equal(regCheck("FGT 123 MP", "MP"), true);
    });
    it("should return false if registration number does not end with MP", function() {
        assert.equal(regCheck("FGT 123 GP", "MP"), false);
    });
});
});