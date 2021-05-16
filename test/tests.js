const assert = require('assert');

function test() {
    return true;
}

describe("integration test", function () {
    it("тест должен выдать true", function () {
        assert.equal(test(), true);
    });
});
