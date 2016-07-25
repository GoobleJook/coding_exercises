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
	return setTimeout(blab, 1000);
};

var blabLater = nonsense('stringAlert!');
console.log(blabLater);
var blabAgainLater = nonsense('Another stringAlert!');
console.log(blabAgainLater);


// 4. Write a function with a closure. The first function should only take one argument, 
// someone's first name, and the inner function should take one more argument, 
// someone's last name. The inner function should console.log both the first name and the last name.

var lastNameTrier = function(firstName) {
	var innerFunction = function(lastName) {
		console.log(firstName + ' ' + lastName);
	};
	return innerFunction;
};

var name_creator = lastNameTrier("Officer");
name_creator("Hernandez");
name_creator("Jones");

// 4. Create a `storyWriter` function that returns an object with two methods. 
// One method, `addWords` adds a word to your story and returns the story while 
// the other one, `erase`, resets the story back to an empty string.

var storyWriter = function() {
	var story = "";
	return {
		value: function() { return story },
		addWords: function(words) { story += " " + words },
		erase: function() { story = "" }
	};
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
console.log(farmLoveStory.value());
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
console.log(storyOfMyLife.value());
storyOfMyLife.erase(); // ''