import assert from 'assert';
import transportFee from '../transportFee.js';

describe("TransportFee", function() {
       
     it("The Transport Fee For Morning Shift" ,function(){
        assert.equal(transportFee('morning'), 'R20');
     });

     it("The Transport Fee For AfterNoon Shift", function(){
        assert.equal(transportFee('afternoon'), 'R10');
     });

     it("The Transport Fee For NightShift", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
     });

});