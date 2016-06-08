var foo = "bar";  // this is 2 operations: a declaration statement (var foo registered into global scope) and an initilization statment (foo = "bar")

function bar() {
	var foo = "baz"; // declare foo in scope of bar
} // JIT (just in time) compliation -- compiles function bar but doesn't worry about content, until bar is called

function baz(foo) {  // declare baz into global scope, then there is a declared argument foo in scope of baz; last comiliation for scope
	foo = "bam";
	bam = "yay";
}

// analyzing the compiler part of JavaScript
// JavaScript passes through code once to compile it, then a 2nd time to execute 
// first pass looks for declaration, variable and function

// line 1:
// LHS (left hand side of assignment/target) = foo
	// - does this variable exist? (looking it up by asking scope manager, answer: yes, you declared him in global scope; no need for RHS lookup since it's already declared)?
// RHS (right hand side of assignment/source) = "bar"