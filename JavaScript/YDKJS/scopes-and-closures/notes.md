function foo(a) {
  var b = a;
  return a + b;
}

var c = foo( 2 );

1. Identify all the LHS look-ups (there are 3!).
  - var b = a; // the var b = side
  - var c = foo(2);
  - foo(a) // assigning 2 to var a

2. Identify all the RHS look-ups (there are 4!).
  - function foo() // a === 2
  - a + 
  - var b = a; // the a side
  - + b

JavaScript uses lexical scope

Lexical scoping happens at the lexing phase of compilation (when source code is tokenized and parsed) and thus it is the "truest" scope (author-time in nature), as the scoping occurs based on programmatic order when the code is compiled. There are ways to cheat lexical scoping by modifying it after the lexer has passed by, but these are frowned upon.

If a variable is defined in an inner scope and an outer scope, the engine of the compiler will found the variable in the inner scope first and won't see the variable in the outer scope(s), as it has already been fulfilled.

Global variables are automaticially added to the scope of the enviroment in which they are created and can be referenced indirectly as a property reference of the global object (window.a)

Lexical scope is only defined by where the function was declared. It only applies to first-class identifiers. Object property-access rules take over deeper ones.

function foo(a) { // global scope
  var b = a * 2;  // scope of foo, under global scope

  function bar(c) { // scope of bar, under foo, under global
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2); // 2, 4, 12

Cheating lexical scope -- DON'T DO, poor performance results!

eval() takes a string and inserts it as if it were code authored at that point in the program. This changes lexical scope and slows performance. Using strict mode creates a new scope for eval() calls which does not modify the enclosing scope.

setTimeout() and setInterval() also can take strings and use it in a similiar manner as eval(). DON'T USE IT LIKE THIS!

new Function(..) function construction also takes string of code as last argument, which creates a dynamically generated function. This is safer than eval but should still be avoided.

with is often explained as shorthand for making multiple property references without repeating the object reference itself. 

with "essentially creates a whole new lexical scope (again, at runtime) by treating an object reference as a "scope" and that object's properties as scoped identifiers."

You can hide scope to prevent access outside of function scope to functions that only should apply within that scope.

Example of bad code that doesn't hide a function relevant only to another function:

see script.js

See chapter 5 for more information on how using the module pattern is safer than simply loading libraries and trusting that they did defensive programming. Libraries can result in global collisions. 

Function expression vs. function declaration (named/standard)
Function expression foo is only found in the scope (function foo(){..}) .., not in the outer scope. No risk of polluting the enclosing scope with the named foo().

Anonymous functions have several downsides, including debugging slowdown in the stack trace. Try to name your anonymous functions, mmmkay?



