import assert from 'assert';
import allPaarl from '../countAllPaarl.js';

describe('allPaarl', function(){

    var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
    var regNumbersForPaarl = allPaarl(regNumbers);

    it('should return the number of paarl registration numbers in the string', function(){
        
        assert.equal(2,regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
        // assert.equal(regNumbersForPaarl[0],'CJ 678 543');
    });

    it('should return paarl registration numbers in the string', function(){
        assert.equal(regNumbersForPaarl[0],'CJ 678 543');
        assert.equal(regNumbersForPaarl[1],'CJ 67890');
        });

});