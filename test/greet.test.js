// import assert from "assert";
// import greet from "../greet.js";

var assert = require("assert");
var greet = require("../greet.js");

describe("Greet", function() {
    it("should return 'Hello, John'", function() {
        assert.equal(greet('John'), 'Hello, John');
    });
    it("should return 'Hello, Jane'", function() {
        assert.equal(greet('Jane'), 'Hello, Jane');
    }
    );
}
);