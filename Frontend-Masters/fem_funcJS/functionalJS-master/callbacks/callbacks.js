// Higher-Order Functions:

// 1. Takes a function as an input (argument)

element.addEventListener("click", function() {
	console.log("element clicked!");
}); // function is the callback

or

2. Returns a function as the output
var add = function(num){
	var num1 = num;

	return addToNum1 = function(num2){
		return num1 + num2;
	};
};


// and if-else abstracted as a function
											//condition, callbackTrue, callbackFalse
var ifElse = function(condition, isTrue, isFalse) {
	if(condition){
		return isTrue();
	} else {
		return isFalse();
	}
};

ifElse(true, 
	function(){ console.log(true);},
	function(){ console.log(false);}
);

// same as

var ifElse = function(condition, isTrue, isFalse) {
	if(condition){
		isTrue();
	} else {
		isFalse();
	}
};

var logTrue = function(){ console.log(true); };
var logFalse = function(){ console.log(false); };
				//condition, callbackTrue, callbackFalse
ifElse(true,logTrue,logFalse)

// Passing Arguments

var increment = function(n){ return n + 1; };

var square = function(n){ return n * n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);

// pass an argument to either isTrue or isFalse

var ifElse = function(condition, isTrue, isFalse, arg) {
	if(condition){
		isTrue(arg);
	} else {
		isFalse(arg);
	}
};

var sayTrue = function(arg){ console.log("True! " + arg + " times"); };
var sayFalse = function(arg){ console.log("False! " + arg + " times"); };
ifElse(true, sayTrue, sayFalse, 3 )