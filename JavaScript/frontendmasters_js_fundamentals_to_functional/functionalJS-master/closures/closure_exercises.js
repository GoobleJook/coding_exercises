// 1. Write a function, `nonsense` that takes an input `string`. This function contains 
// another function, `blab` which alerts `string` and is immediately called inside 
// the function `nonsense`. `blab` should look like this inside of the `nonsense` function:

// 2. In your function, `nonsense`, change the immediate call to a setTimeout so that the
//  call to `blab` comes after 2 seconds. The `blab` function itself should stay the same as before.

var nonsense = function(string) {
	var blab = function(string){
		alert(string);
	};
	return blab(string);
};

stringAlert = nonsense('stringAlert');
console.log(stringAlert());

