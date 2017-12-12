// Converting a function declaration into a function expression prevents pollution of enclosing sscope with name

var a = 2;

function foo() {
  var a = 3;
  console.log(a); //3
}
foo();

console.log(a); //2  

// the problem with this function declaration is that foo now exists in the enclosing scope

var a = 2;
(function foo(){
  var a = 3;
  console.log(a); //3
})();

console.log(a); //2

// in this function expression foo only exists in its own scope and the function executes
