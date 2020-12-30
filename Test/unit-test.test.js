const assert = require('chai').assert;
function devo(){
    return 2;
}
describe('Suite testing', () => {
    it('should return 2', () => {
        let fu = devo();
        assert.equal(fu, 2);
    });
});