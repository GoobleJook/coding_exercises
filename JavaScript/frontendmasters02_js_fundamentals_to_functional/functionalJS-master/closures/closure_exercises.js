// 1. Write a function, `nonsense` that takes an input `string`. This function contains 
// another function, `blab` which alerts `string` and is immediately called inside 
// the function `nonsense`. `blab` should look like this inside of the `nonsense` function:

var nonsense = function(string) {
	var blab = function() {
		alert(string);
	};
	blab();
};

nonsense("immediate hello!");

// 2. In your function, `nonsense`, change the immediate call to a setTimeout so that the
//  call to `blab` comes after 2 seconds. The `blab` function itself should stay the same as before.

var nonsense = function(string) {
	var blab = function() {
		alert(string);
	};
	setTimeout(blab, 2000);
};

nonsense("delayed hihihi!");

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

var blabLater = nonsense("hihihihi blabLater!")
var blabAgainLater = nonsense("oh hihihi blabAgainLater!")

blabLater();
blabAgainLater();

// 4. Write a function with a closure. The first function should only take one argument, 
// someone's first name, and the inner function should take one more argument, 
// someone's last name. The inner function should console.log both the first name and the last name.

var lastNameTrier = function(firstName) {
	var innerFunction = function(lastName) {
		console.log(firstName + ' ' + lastName);
	};
	return innerFunction;
};

var officer_creator = lastNameTrier("Officer");
officer_creator("Hernandez");
officer_creator("Jones");

// 4. Create a `storyWriter` function that returns an object with two methods. 
// One method, `addWords` adds a word to your story and returns the story while 
// the other one, `erase`, resets the story back to an empty string.

var storyWriter = function() {
	var story = "";
	return {
		value: function() { return story.trim() },
		addWords: function(words) { story += " " + words },
		erase: function() { story = "" }
	};
}; // my way

// var storyWriter = function() {
// 	var story = '';
// 	return {
// 		addWords: function(str) {
// 			story += str + ' ';
// 			return story.trim();
// 		},
// 		erase: function() {
// 			story = '';
// 		}
// 	}
// } // their way


var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
console.log(farmLoveStory.value());
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
console.log(storyOfMyLife.value());
storyOfMyLife.erase(); // ''
console.log(storyOfMyLife.value());
console.log("There should be a blank line above this one.")


// 5. Using the module pattern, design a toaster. Use your creativity here and think about what 
// you want your users to be able to access on the outside of your toaster vs what you don't want 
// them to be able to touch.

		
// call the function with the type of bread, any toppings, and how many minutes you want to toast it for

var Toaster = function(){
	var toasted = "";

	function cook_bread(time, toppings, bread) {
		if (time > 3000) {
			toasted = "well done";
		} else if (time > 2000) {
			toasted = "medium brown";
		} else {
			toasted = "barely toasted";
		} console.log("Your " + bread + " toast with " + toppings + " is " + toasted + "!")
	};

	return {
		cook: function(time, toppings, bread){ cook_bread(time, toppings, bread); }
	};
};

// 6. [EXTRA CREDIT] Use the module pattern to design a character in a Super Mario game. 
// Think about what actions you can control in the game and other aspects you can't control directly 
// (example:  you can only affect your health indirectly by eating a mushroom). If you are not familiar 
// with Super Mario, choose another simple game for this example.


// [EXTRA CREDIT] Why doesn't the code below work? This is a function that should return an array of functions that
//  console.log() each person's name as a string when invoked. Fiddle with this function and inspect how it works
//  , then try to fix it using a closure. Be prepared to explain to a partner how it worked before, 
//  and how it works now with a closure. 

// var checkAttendanceFunc = function(nameArr){
// 	var resultArr = [];
// 	for(var i = 0; i < nameArr.length; i++){
// 		resultArr.push(function(){ console.log('Is', nameArr[i], 'present?', i)})
// 	};
// 	return resultArr;
// };
