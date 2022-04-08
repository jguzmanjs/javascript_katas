const chai = require("chai");
const likes = require("../likes");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('example tests', function() {
    it('should return correct text', function() {
        assert.strictEqual(likes([]), 'no one likes this');
        assert.strictEqual(likes(['Matt']), 'Matt likes this');
        assert.strictEqual(likes(['Joseph', 'Alex']), 'Joseph and Alex like this');
        assert.strictEqual(likes(['Peter', 'John', 'Mark']), 'Peter, John and Mark like this');
        assert.strictEqual(likes(['Alex', 'Joseph', 'Mark', 'Peter']), 'Alex, Joseph and 2 others like this');
    });
});
