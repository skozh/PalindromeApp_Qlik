var expect = require("chai").expect;
var tools = require ("../api/controllers/palindrome.js");

describe("palindrome()", function(){
	it("Should print true if the word is a palindrome. Otherwise false");
	var results = tools.palindrome("Civic");
	expect(results).to.be.true;
});

