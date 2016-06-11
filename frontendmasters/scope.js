var foo = "bar";  // this is 2 operations: a declaration statement (var foo registered into global scope) and an initilization statment (foo = "bar")

function bar()  {
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

// Day 3: Function Declarations, Functions Expressions, and Block Scope

// lesson 3, example 1:

var foo = function bar () { // This is not a declaration, but an expression. Declaration begin with the word function.
	var foo = "baz";

	function baz(foo) {
		foo = bar;
		foo;
	}
	baz();
};

foo();
bar(); //error, does not exist outside of itself.

// Three negative things about anonymous function expressions:
// 1. We have no way inside of the function to refer to ourself
// 2. Anonymous fucntions don't play well in debugging (without a name, can't be used in debug stack traces).
// 3. It self-documents code.

Lesson 3, example 2:

var foo;

try {
	foo.length;
}
catch (err) { // As of ES3 catch clause is block-scoped.
	console.log(err); // TypeError
}

console.log(err); // ReferenceError

// Day 3, lessson 2: Lexical scope

// Bash scripting, opt-in Perl use dyanmical scoping
// Lexical scope means compile-time scope, scoping decisions are made in stone when you compile
// Lexical scope starts at "first floor of building"
// if not found there, it moves up a "floor" (out a level) -- Global scope is top level

function foo () {
	var bar = "bar";

	function baz() {
		console.log(bar); //lexical! author-time decision, can't change
	}
	baz(); 
}
foo();

// Day 3, lesson 3: Cheating lexical scope: eval

var bar = "bar";

function foo(str) {
	eval(str); //cheating, evaluates a string/treats like it's code
	console.log(bar); //42
}

foo("var bar = 42;");

// cheating makes your JS run slow, don't use eval, don't use setTimeout() with string syntax;
// can be used with function reference
// with is another way to cheat, again don't cheat

var obj = {
	a: 2,
	b: 3,
	c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
	a = b + c; // meant to be a property from obj
	c = b - a;
	d = 3 // ? Doesn't create a d instance in obj, but it has created something in global
	// with is treated as a lexical scope, this invalidates many of JavaScript's optimizations, and it SLOWS it down
} 

obj.d;  // unverified
d; // 3 --- OOPS!

day 4