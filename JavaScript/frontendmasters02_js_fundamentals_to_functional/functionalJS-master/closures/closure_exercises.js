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
blabLater;
var blabAgainLater = nonsense('Another stringAlert!');
blabAgainLater;


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
console.log(storyOfMyLife.value());
console.log("There should be a blank line above this one.")

// 5. Using the module pattern, design a toaster. Use your creativity here and think about what 
// you want your users to be able to access on the outside of your toaster vs what you don't want 
// them to be able to touch.
		
// call the function with the type of bread, any toppings, and how many minutes you want to toast it for

var toaster = function(bread, toppings, time){
    var millisecond_convert = 0.00001666666; // 1 minute / 60 seconds / 1000 milliseconds
    var toast = function() {
      alert("Your " + bread + " toast with " + toppings + " is ready!")		
    };
    return setTimeout(toast, time);
};

var wheat_toast = toaster("wheat", "butter", 1000)
wheat_toast;


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
