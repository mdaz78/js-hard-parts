// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

function createFunction() {
  return function() {
    console.log('Hello, world!');
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var function1 = createFunction();
function1();

function createFunctionPrinter(input) {
  return function() {
    console.log(input);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();

function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter(); // 1
willCounter(); // 4

function addByX(x) {
  let sum = 0;
  return function(y) {
    sum = x + y;
    return sum;
  };
}

// var addByTwo = addByX(2);

var addByTwo = addByX(2);
console.log(addByTwo(1)); //should return 3
console.log(addByTwo(2)); //should return 4
console.log(addByTwo(3)); //should return 5

var addByThree = addByX(3);
console.log(addByThree(1)); //should return 4
console.log(addByThree(2)); //should return 5

var addByFour = addByX(4);
console.log(addByFour(4)); //should return 8
console.log(addByFour(10)); //should return 14

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let output = 0;
  let no_of_executions = 0;
  return function(x) {
    if (no_of_executions >= 1) {
      return output;
    } else {
      no_of_executions += 1;
      output = func(x);
      return output;
    }
  };
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4)); //should log 6
console.log(onceFunc(10)); //should log 6
console.log(onceFunc(9001)); //should log 6

function after(count, func) {
  let no_of_executions = 0;
  return function() {
    no_of_executions += 1;
    if (no_of_executions >= count) {
      return func();
    }
  };
}

var called = function() {
  console.log('hello');
};
var afterCalled = after(3, called);

console.log(afterCalled()); // -> nothing is printed
console.log(afterCalled()); // -> nothing is printed
console.log(afterCalled()); // -> 'hello' is printed

function delay(func, wait) {
  setTimeout(func, wait);
}

delay(function printHi() {
  console.log('Hello World');
}, 2000);
