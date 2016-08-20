Higher-Order Functions:

1. Takes a function as an input (argument)

element.addEventListener("click", function() {
	console.log("element clicked!");
});

or

2. Returns a function as the output
var add = function(num){
	var num1 = num;

	return addToNum1 = function(num2){
		return num1 + num2;
	};
};