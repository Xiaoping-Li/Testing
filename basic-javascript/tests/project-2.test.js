const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const funcs = require('../src/project-2');
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
	describe('`getBiggest`', () => {
	  it('should be a function', () => {
        const getBiggest = funcs.getBiggest;
        assert.typeOf(getBiggest, 'function');
      });
      it('should return a number', () => {
      	const getBiggest = funcs.getBiggest;
      	const result = getBiggest(3, 6);
      	expect(result).to.be.a('number');
      });
      it('should return the first argument if it is bigger than the second one', () => {
      	const getBiggest = funcs.getBiggest;
      	const result = getBiggest(6, 3);
      	assert.equal(result, 6);
      });
      it('should return the second argument if it is equal to or bigger than the first one', () => {
      	const getBiggest = funcs.getBiggest;
      	const result = getBiggest(3, 6);
      	assert.equal(result, 6);
      });
	});

	describe('`greeting`', () => {
	  it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
      });
      it('should return a string', () => {
      	const greeting = funcs.greeting;
      	const result = greeting('German');
      	assert.isString(result);
      });
      it('should return hello in German', () => {
      	const greeting = funcs.greeting;
      	const result = greeting('German');
      	assert.equal(result, 'Guten Tag!');
      });
      it('should return hello in Spanish', () => {
      	const greeting = funcs.greeting;
      	const result = greeting('Spanish');
      	assert.equal(result, 'Hola!');
      });
      it('should return default hello', () => {
      	const greeting = funcs.greeting;
      	const result = greeting('Chinese');
      	assert.equal(result, 'Hello!');
      });
	});

	describe('`isTenOrFive`', () => {
	  it('should be a function', () => {
        const isTenOrFive = funcs.isTenOrFive;
        assert.typeOf(isTenOrFive, 'function');
      });
      it('should return a boolean', () => {
        const isTenOrFive = funcs.isTenOrFive;
        const result = isTenOrFive(3);
        assert.typeOf(result, 'boolean');
      });
      it('should return true if input is 5', () => {
      	const isTenOrFive = funcs.isTenOrFive;
        const result = isTenOrFive(5);
        assert.equal(result, true);
      });
      it('should return true if input is 10', () => {
      	const isTenOrFive = funcs.isTenOrFive;
        const result = isTenOrFive(10);
        assert.equal(result, true);
      });
      it('should return false if input is not 5 or 10', () => {
      	const isTenOrFive = funcs.isTenOrFive;
        const result = isTenOrFive(2);
        assert.equal(result, false);
      });
	});

	describe('`isInRange`', () => {
	  it('should be a function', () => {
        const isInRange = funcs.isInRange;
        assert.typeOf(isInRange, 'function');
      });
      it('should return a boolean', () => {
        const isInRange = funcs.isInRange;
        const result = isInRange(3);
        assert.typeOf(result, 'boolean');
      });
      it('should return false if input less than or equal to 20', () => {
      	const isInRange = funcs.isInRange;
        const result = isInRange(3);
        assert.equal(result, false);
      });
      it('should return false if input biggerthan or equal to 50', () => {
      	const isInRange = funcs.isInRange;
        const result = isInRange(55);
        assert.equal(result, false);
      });
      it('should return true if input between 20 to 50, not include 20 and 50', () => {
      	const isInRange = funcs.isInRange;
        const result = isInRange(45);
        assert.equal(result, true);
      });
	});

	describe('`isInteger`', () => {
	  it('should be a function', () => {
        const isInteger = funcs.isInteger;
        assert.typeOf(isInteger, 'function');
      });
      it('should return a boolean', () => {
        const isInteger = funcs.isInteger;
        const result = isInteger(3);
        assert.typeOf(result, 'boolean');
      });
      it('should return true if input is integer', () => {
      	const isInteger = funcs.isInteger;
        const result = isInteger(3);
        assert.equal(result, true);
      });
      it('should return false if input is not integer', () => {
      	const isInteger = funcs.isInteger;
        const result = isInteger(3.2);
        assert.equal(result, false);
      });
	});

	describe('`fizzBuzz`', () => {
	  it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
      });
	});

	describe('`isPrime`', () => {
	  it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
      });
	});

	describe('`returnFirst`', () => {
	  it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
      });
	});

	describe('`returnLast`', () => {
	  it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
      });
	});

	describe('`getArrayLength`', () => {
	  it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
      });
	});

	describe('`incrementByOne`', () => {
	  it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
      });
	});

	describe('`addItemToArray`', () => {
	  it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
      });
	});

	describe('`addItemToFront`', () => {
	  it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
      });
	});

	describe('`wordsToSentence`', () => {
	  it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
      });
	});

	describe('`contains`', () => {
	  it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
      });
	});

	describe('`addNumbers`', () => {
	  it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
      });
	});

	describe('`averageTestScore`', () => {
	  it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
      });
	});

	describe('`largestNumber`', () => {
	  it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
      });
	});
});


  