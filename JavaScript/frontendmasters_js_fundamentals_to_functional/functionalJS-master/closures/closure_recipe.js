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