// Lexical scope example

// function foo(a) { // global scope
//   var b = a * 2;  // scope of foo, under global scope

//   function bar(c) { // scope of bar, under foo, under global
//     console.log(a, b, c);
//   }

//   bar(b * 3);
// }

// foo(2); // 2, 4, 12

// // Cheating lexical scope examples -- Don't do, slows performance!
// function foo(str, a) {
//   eval(str); // cheating!!!
//   console.log(a, b);
// }

// var b = 2;

// foo("var b = 3;", 1) // 1, 3


// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// obj.a = 2;
// obj.b = 3;
// obj.c = 4; // "tedious"

// // "easier" shorthand -- NOW DEPRICATED
// with (obj) {
//   a = 3;
//   b = 4;
//   c = 5;
// }

// // can "leak" to global
// function foo(obj) {
//   with (obj) {
//     a = 2;
//   }
// }

// var o1 = {
//   a: 3
// };

// var o2 = {
//   b: 3
// };

// foo(o1);
// console.log(o1.a); // 2

// foo(o2);
// console.log(o2.a); // undefined
// console.log(a); // 2 -- oops, leaked global! Since not strict, a was created in the global scope since it couldn't be found in lexical scope

// example of a function that should be "hidden"

function doSomething(a) {
  b = a + doSomethingElse(a * 2);

  console.log(b * 3);
}

function doSomethingElse(a) {
  return a - 1;
}

var b;

doSomething(2); // 15

// A more "proper" design that uses "hiding"

function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b;

  b = a + doSomethingElse(b * 3);
}

doSomething(2); // 15

// Example of "hiding" variables in order to avoid collisions where a variable is accidentally overwritten

// function foo() {
//   function bar(a) {
//     i = 3; // this will change the i defined in the for loop... [fix it by declaring the scope of the variable i with 'var i = ']
//     console.log(a + i);
//   }

//   for (var i = 0; i < 10; i++) {
//     bar(i * 2); // ..which causes an infinite loop
//   }
// }

// foo();

// Anonymous vs named/anonymous functions

// anonymous
// setTimeout(function(){
//   console.log("I waited 1 second!");
// }, 1000);

// // named
// setTimeout(function timeoutHandler(){
//   console.log("I watied 1 second, and I used a name!")
// }, 1000);
