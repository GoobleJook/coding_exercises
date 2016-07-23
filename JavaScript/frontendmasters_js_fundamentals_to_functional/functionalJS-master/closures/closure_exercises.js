// 1. Write a function, `nonsense` that takes an input `string`. This function contains 
// another function, `blab` which alerts `string` and is immediately called inside 
// the function `nonsense`. `blab` should look like this inside of the `nonsense` function:

var nonsense = function(string) {
	var blab = function(){
		alert(string);
	};
	return blab;
};

stringAlert = nonsense('stringAlert');
console.log(stringAlert());