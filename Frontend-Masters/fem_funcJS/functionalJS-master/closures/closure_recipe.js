//create your parent function (the checkscope function)
function checkscope() {
//define some variables in the parent's local scope (can be accessed by the child)
	var innerVar = "local scope";
//define a function inside the parent function (a child function)
	function innerFunc() {
		return innerVar;
//return that function from inside the parent function
	}
	return innerFunc;
}

// run parent function and save to a variable. This variable holds whatever the function returns (including its scope).

var test = checkscope();

// optional: Verify that the variable holds the inner function

test;

// call test and run the inner function (would return local scope in this case)
console.log(test());