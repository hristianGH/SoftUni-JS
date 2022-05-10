const describe = require('mocha').describe;
const assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
describe('check mathEnforcer',()=>{
    describe('add five',function(){
        it('should return a currect result',()=>{
            assert.isTrue(mathEnforcer.addFive(5)==10);
        })
        it('should be undefined',()=>{
            assert.isUndefined(mathEnforcer.addFive('5'));
        })
    })
   
    describe('sub ten',function(){
        it('should return a currect result',()=>{
            assert.isTrue(mathEnforcer.subtractTen(10)==0);
        })
        it('should be undefined',()=>{
            assert.isUndefined(mathEnforcer.subtractTen('5'));
        })
    })
    describe('sum',function(){
        it('should return a currect result',()=>{
            assert.isTrue(mathEnforcer.sum(5,5)==10);
        })
        it('should be undefined',()=>{
            assert.isUndefined(mathEnforcer.sum('5','5'));
        })
    })
 })