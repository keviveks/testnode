const chai = require('chai');

const expect = chai.expect;

chai.should();

describe('Number Tests', () => {
  function isEven(number) {
    return number % 2 === 0;
  }

  describe('isEven function test', () => {
    it('should return true when pass even number', () => {
      isEven(4).should.be.true;
    });

    it('should return false when passed odd number', () => {
      expect(isEven(5)).to.be.false;
    });
  });


  function add(num1, num2) {
    return num1 + num2;
  }

  describe('test without setup/teardown', () => {
    var num;

    beforeEach(() => {
      num = 5;
    });

    it('should add 5 to return 10', () => {
      num = add(num, 5);
      num.should.equal(10);
    });

    it('should add 7 to return 12', () => {
      add(num, 7).should.equal(12);
    });
  });
});
