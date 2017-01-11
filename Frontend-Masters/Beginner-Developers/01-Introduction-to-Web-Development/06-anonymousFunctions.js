var subtract = function(a, b) {
  return a - b;
}

var add = function(a, b) {
  return a + b;
}

var math = function(a, b, operate) {
  return operate(a,b);
}

console.log(subtract(1,3)); 
console.log(add(1,3)); 
console.log(math(1,23,add)); // passing a function as a variable
console.log(math(100,2,function(a,b) {
  return a * b;
})); // passing an anonymous function inside a function