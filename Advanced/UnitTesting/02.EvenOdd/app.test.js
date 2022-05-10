const describe = require('mocha').describe;
const assert = require('chai').assert;
import { isOddOrEven } from './app';


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