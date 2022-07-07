// import assert from 'assert';
// import countAllFromTown from '../countAllFromTown.js';
var assert = require('assert');
var countAllFromTown = require('../countAllFromTown.js');

describe("Count all from town", function(){

    it("should return the number of registration numbers from Stellies", function(){
      var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
       assert.equal(fromStellies, 3)
    });
    it("should return the number of registration numbers from Kuilsriver", function(){
        var fromKuilsriver = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CY');
         assert.equal(fromKuilsriver, 1)
        });
        
  });

