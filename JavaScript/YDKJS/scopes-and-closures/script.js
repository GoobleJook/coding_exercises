// anonymous functions have downsides relating to debugging and readability of code

setTimeout (function(){
  console.log("I waited 1 second!")
}, 1000);

// inline functions solve this problem while somewhat maintaining the speed and ease of anonymous functions

setTimeout (function timeoutHandler(){
  console.log("I waited 2 seconds!")
}, 2000);


// ImmediatelyInvokedFunctionExpression pattern (IIFE)
// Usually uses anonymous functions but is somewhat safer using inline functions

var a = 2;

(function IIFE(){
  var a = 3;
  console.log(a); //3
})(); // is same as }()); -- this is just a stylistic difference


// in this function we pass in the window object but name it global as a stylistic way to remember scope

var a = "I'm in global scope!";

(function IIFE(global){
  var a = "I'm in IIFE's function scope!";
  console.log(a); // function
  console.log(global.a); //global
})(window);

console.log(a); //global
