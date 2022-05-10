const describe = require('mocha').describe;
const assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('check lookupChar',()=>{
    it('is incorectIndex',()=>{
        assert.isTrue(lookupChar('stringg',-3)=='Incorrect index');
    })
    it('is working',()=>{
        assert.isTrue(lookupChar('string',3)=='i');
    })
    it('is undefined',()=>{
        assert.isUndefined(lookupChar(1));
    })
 })
