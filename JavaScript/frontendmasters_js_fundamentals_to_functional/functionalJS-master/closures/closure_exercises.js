// 1. Write a function, `nonsense` that takes an input `string`. This function contains 
// another function, `blab` which alerts `string` and is immediately called inside 
// the function `nonsense`. `blab` should look like this inside of the `nonsense` function:

// 2. In your function, `nonsense`, change the immediate call to a setTimeout so that the
//  call to `blab` comes after 2 seconds. The `blab` function itself should stay the same as before.

// 3. Now, instead of calling `blab` inside of `nonsense`, return `blab` (without invoking it). 
// Call `nonsense` with some string and store the returned value (the `blab` function) in a 
// variable called `blabLater`. Call `nonsense` again with a different string and store the returned 
// value in a variable called `blabAgainLater`.


var nonsense = function(string) {
	var blab = function() {
		alert(string);
	};
	return blab;
};

var blabLater = nonsense('stringAlert!');
console.log(blabLater());
var blabAgainLater = nonsense('Another stringAlert!');
console.log(blabAgainLater());