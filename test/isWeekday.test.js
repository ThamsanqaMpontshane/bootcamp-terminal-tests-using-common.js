import assert from 'assert';
import isWeekday from '../isWeekday.js';
describe ("isWeekday", function() {
    it("should return true if the day starts with either of these letters M, T, W ,F", function() {
        assert.equal(isWeekday("Monday"),true);
        assert.equal(isWeekday("Tuesday"),true);
        assert.equal(isWeekday("Wednesday"),true);
        assert.equal(isWeekday("Thursday"),true);
        assert.equal(isWeekday("Friday"),true);
        assert.equal(isWeekday("Saturday"),false);
        assert.equal(isWeekday("Sunday"),false);
    });
});
