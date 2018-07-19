const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const funcs = require('../src/project-1');
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return the proper output given specific input', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(3), 30);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return the proper output given specific input', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(10)).to.equal(5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should be true if the strings length equal', () => {
      const areSameLength = funcs.areSameLength;
      const str1 = 'apples';
      const str2 = 'banana';
      assert.equal(areSameLength(str1, str2), true);
    });
    it('should be false if the strings length not equal', () => {
      const areSameLength = funcs.areSameLength;
      const str1 = 'apple';
      const str2 = 'banana';
      assert.equal(areSameLength(str1, str2), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should be true if the numbers equal', () => {
      const areEqual = funcs.areEqual;
      const x = 5;
      const y = 5;
      assert.equal(areEqual(x, y), true);
    });
    it('should be false if the numbers not equal', () => {
      const areEqual = funcs.areEqual;
      const x = 5;
      const y = 6;
      assert.equal(areEqual(x, y), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be true if the number less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.isTrue(lessThanNinety(89));
    });
    it('should be false if the numbers equal or larger than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.isFalse(lessThanNinety(90));
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be true if the number greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(51)).to.be.true;
    });
    it('should be false if the numbers equal or smaller than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(50)).to.be.false;
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return proper output given specific inputs', () => {
      const add = funcs.add;
      assert.equal(add(2, 3), 5);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return proper output given specific inputs', () => {
      const subtract = funcs.subtract;
      expect(subtract(2, 3)).to.equal(-1);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return proper output given specific inputs', () => {
      const divide = funcs.divide;
      expect(divide(6, 3)).to.equal(2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return proper output given specific inputs', () => {
      const multiply = funcs.multiply;
      expect(multiply(2, 3)).to.equal(6);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return proper output given specific inputs', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(3, 2), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should be true if it is even', () => {
      const isEven = funcs.isEven;
      expect(isEven(4)).equal(true);
    });
    it('should be false if it is odd', () => {
      const isEven = funcs.isEven;
      expect(isEven(5)).equal(false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should be true if it is odd', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(5), true);
    });
    it('should be false if it is even', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(4), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return squared value given specific input', () => {
      const square = funcs.square;
      assert.equal(square(2), 4);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return cubed value given specific input', () => {
      const cube = funcs.cube;
      expect(cube(2)).to.equal(8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return poweredUp value given specific input', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 3), 8);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return rounded value given specific input', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(1.4)).to.equal(1);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return roundUp value given specific input', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(1.2), 2);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return new string incremented length by 1', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      const str = 'abc';
      const newStr = addExclamationPoint(str);
      assert.equal(newStr.length, str.length + 1);
    });
    it('return new string last value should be !', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      const str = 'abc';
      const newStr = addExclamationPoint(str);
      assert.equal(newStr[newStr.length - 1], '!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('firstName should equal first argument', () => {
      const combineNames = funcs.combineNames;
      const result = combineNames('leela', 'lee').split(' ');
      expect(result[0]).to.equal('leela');
    });
    it('lastName should equal second argument', () => {
      const combineNames = funcs.combineNames;
      const result = combineNames('leela', 'lee').split(' ');
      expect(result[1]).to.equal('lee');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should greet the correct person', () => {
      const getGreeting = funcs.getGreeting;
      const result = getGreeting('leela').split(' ');
      assert.equal(result[1], 'leela!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return proper value given specific inputs', () => {
      const getRectangleArea = funcs.getRectangleArea;
      const result = getRectangleArea(3, 4);
      expect(result).to.equal(12);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return proper value given specific inputs', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const result = getTriangleArea(3, 4);
      expect(result).to.equal(6);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return proper value given specific inputs', () => {
      const getCircleArea = funcs.getCircleArea;
      const result = getCircleArea(4);
      assert.equal(result, Math.PI * 16);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return proper value given specific inputs', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const result = getRectangularPrismVolume(2, 3, 4);
      assert.equal(result, 24);
    });
  });
});
