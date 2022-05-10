const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
export {isOddOrEven};

describe('check isOddOrEven',()=>{
    it('is odd',()=>{
        assert.isTrue(isOddOrEven('stringg')=='odd');
    })
    it('is even',()=>{
        assert.isTrue(isOddOrEven('string')=='even');
    })
    it('is undefined',()=>{
        assert.isUndefined(isOddOrEven(1));
    })
 })

 