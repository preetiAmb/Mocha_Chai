var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test', function(){
    it('should deal with objects', function(){
        var obj = {name: 'John', gender:'male'};
        var objB = {name: 'John', gender: 'male'};

        obj.should.have.property(objB);

    });
    it('should allow testing nulls', function(){
        var iAmNull = null;
        should.not.exist(isAmNull);
    })
});