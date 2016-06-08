/* 
QUESTIONS FOR JOSH:

1. Why do the code snippets in the doc start with ```js?
2. No semi-colon at end of conditionals (if)?
3. Are no atomic symbols useable in variable names (ie, + and not just -)?
4. Are .length and .push methods?
5. Are objects dictionaries?
6. Why to objects have a semi-colon but for loops don't?


*/

/*
STRINGS, NUMBERS, MATH, OUTPUT
*/
console.log("Hello, world!"); // my first string
console.log(""); // my first empty string
console.log(9999); // this is a number
console.log( 10 + 5); // basic math operators; addition
console.log( 10 - 5); // and subtractio
console.log( 10 % 3); // modulus and division and mult
console.log("Iron" + "hack"); // strings can be concatenated
console.log("Iron" + 123); // strings and numbers can be too
console.log("Iron" * 3); // but math can't be stringed

/*
VARIABLES
*/
var city; // declaring a variable
city = "Madrid";
console.log(city);
city = "Barcelona";
console.log(city); // new value

/*
EXERCISE: Now try not using quotes or leaving out one of the parentheses. What happens?

Answer: It will think the arguments are variables not a string, and it will throw an error

console.log(This is a test); // will throw an error
*/

/*
Allowed in variable names
*/
var country13 = "America";
console.log(country13); // you can use numbers in var names
var country_three = "USA"; // you can use _ in names 
console.log(country_three);
var country$four = "'Murca"; // and $
console.log(country$four); 
var country$five = "Murca";
console.log(country$four + " is greater than " + country$five); 
console.log(country$four > country$five);
var country$six = "america";
var country$seven = "America";
console.log("america is greater than America");
console.log (country$six > country$seven);


/*
Not allowed in variable names:
 
Variables starting with numbers or containing &, ^, -, #
numbers at the beginningbut not &, ^, -, #
*/


/*
CONDITIONALS AND COMPARISONS
*/

// comparison operators: ===, !==, <, >, <=, >=
// combining comparisons: && is and, and || is or

// conditional if:

number = 10;
if (number === 10){
    console.log("number is equal to 10!");
    console.log(number);
} 
var country, number; // declaring multiple variables at once

country = "Australia";
if (country === "Australia" || country === "New Zealand" ) {
    console.log(country + " is either Australia or New Zealand");
}

country = "New Zealand";
if (country === "Australia" || country === "New Zealand" ) {
    console.log(country + " is either Australia or New Zealand");
}

number = 15;

if (number > 10 && number < 20) {
    console.log(number + " is between 10 and 20.");
}

number = 21;

if (number > 10 && number < 20) {
    console.log(number + " is between 10 and 20.");
} else {
    console.log(number + " is not between 10 and 20.");
    }
    
if (number > 10 && number < 20) {
    console.log(number + " is between 10 and 20.");
} else if (number <= 10) {
    console.log(number + " is less than 10.");
} else {
    console.log(number + " is greater than 20.");
    }

// Boolean logic    
var number = 101;
if (number !== 101 && number < 25 || number > 100){
    console.log(number + " isn't 101 AND less than 25, OR it is greater than 100.");
}

// repetative tasks/iterations
var i; 

for (i = 1; i <= 42; i += 1){
    console.log(i); // for loops follow (start; condition; iteration logic, followed by the task in brackets)
}

var i;
var h = "la";
var j;

for (i = 1; i <= 10; i += 1) {
   console.log(h);
   h += "la"; // Do I need to worry about the last =>?
} 

// functions

function claimForCountry (country, thing) {
    var claim;
    claim = "In the name of " + country + " I claim this " + thing + "!";
    return claim;
}

var message;
message = claimForCountry("Spain", "land");
console.log(message);
var message = claimForCountry("Italy", "pizza");
console.log(message);

function hi() {
    return "Hi!";
}

console.log( hi() );

/*
Question:
How many parameters can console.log accept?
Depends on the memory available, right?
*/

console.log("Hi", "Hello", 12, 23, 34, 56, "Jeesus");
/*
Challenge:
2. Write a function that receives a number and prints a countdown of that number all the way to 0 and then `Blast off!`. For example, `blastOff(3)` would print this:
*/

function countdown(num) {
    for (num; num >= 0; num--){
        console.log(num);
    }
    console.log("Blast off!");
}
countdown(3);

/*
Arrays
*/

var countries;
countries = [ "Russia", "Finalnd", "Morocco", "Brazil" ];

console.log(countries);
console.log("The first country is " + countries[0] + "!");
console.log("The second country is " + countries[1] + "!");
console.log("The third country is " + countries[2] + "!");
console.log("The fourth country is " + countries[3] + "!");

countries.push("Japan");
var i;
for (i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

var country;
country = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
};

console.log( country["name"] ); // prefers dot notation
console.log( country.continent );

for (var key in country) {
    console.log("This country's " + key + " is " + country[key] + ".");
}

/*
1. What happens when you try to access a value that doesn't exist in arrays and an objects? Try it!

You get an 'undefined' error

2. Write a function that receives an array of names and returns them in a string with `, ` between them. The final two must be separated by ` and `.

3. Write a function that receives an object and returns an array of its values.
*/

console.log(countries[6]);

var names = [];
names.push("Robert", "Shelly", "Harry");
var i;
var name_string = "";

function name_print(names){
    for (i = 0; i < names.length -1 ; i ++){
        name_string = name_string + names[i] + ", ";
    }
    name_string = name_string + "and " + names[names.length - 1] + ".";
    console.log(name_string);
}
name_print(names);

obj = {
    Name: "Robert Hernandez",
    Age: 41,
    Weight: 155 + " pounds"
};

function obj_to_array (obj) {
    var objarr = [];
    for (var key in obj){
        objarr.push(obj[key]);
    }
    console.log(objarr);
}

obj_to_array(obj);

/*

Write a function that receives a number and loops from 1 to the number and on each run through adds the current and previous numbers and prints out the result. On the first run through (current number = 1) use the value of 0 for the previous number. For example on this call:

*/

var i;
function addSequence(num){
    for (i = 0; i <= num; i++){
        console.log(i + i+1);
    }
}
addSequence(15);


/*
Write a function that receives a number that is the minimum length and an array of strings. Loop through the array of strings and print only those that are equal to or above the minimum length. Once you have your printMinimum() function this code should work for you:

*/

var i;

var strs = ["I like pie.", "Hello.", "Shorts.", "This is a long one.", "Kinda medium.", "A.", "Shorty."];

function printMinimum(num, arr){
    for(i = 0; i < arr.length; i++){
        if (arr[i].length >= num) {
            console.log(arr[i]);
        }
    }
}
printMinimum(2,strs);

/*
To retrieve a letter from a string you can use the charAt() function like so:

var str = "Zanzibar";

// Character at index 3 (the 4th character)
var fourth = str.charAt(3);
console.log(fourth);
// => "z"
As you can see, character positions in strings start at 0, just like in arrays. If we ask for the character at position 3, we are really referring to the 4th character, z.

Write a function that decodes a secret message hidden in an array of words. Each word contains one letter of the message. Go through the words in order and retrieve one character from each of them. For the 1st word, grab the 1st character, for the 2nd word, the 2nd character and so on. When you get to the 6th word, start from the 1st character again. Take each of those characters and add them to a new string to form the message. Finally, return the message. Once you have your decode() function this code should work for you:
*/

var words, message;

words = [
    "dead",         // 1st -> d
    "bygone",       // 2nd -> y
    "landing",      // 3rd -> n
    "cheaply",      // 4th -> a
    "assumed",      // 5th -> m
    "incorrectly",  // 1st -> i
    "attention",    // 2nd -> t
    "agent"         // 3rd -> e
];

function decode(arr){
    secret = "";
    for (i = 0; i < arr.length; i++){
        if (i < 5){
            secret += arr[i][i];
        } else if (i >= 5){
            secret += arr[i][i-5];
        }
    }
    return secret;
}
message = decode(words);
console.log(message);

/*
D. Array looper

Write a function that receives an array and a string. Print all the values inside the array by looping through it. Depending on the value of the string you will loop through the array in one of four different ways. For example take this array:

var foods = [ "pizza", "cookies", "ice cream", "steak", "burgers", "bread" ];
Loop through the array normally if the string is equal to forwards:

looper(foods, "forwards");
// => pizza
//    cookies
//    ice cream
//    steak
//    burgers
//    bread
Loop through the array backwards if the string is equal to backwards:

looper(foods, "backwards");
// => bread
//    burgers
//    steak
//    ice cream
//    cookies
//    pizza
Ignore values with odd indexes if the string is equal to evens (the number 0 is considered even):

looper(foods, "evens");
// => pizza
//    ice cream
//    burgers
Ignore values with even indexes if the string is equal to odds:

looper(foods, "odds");
// => cookies
//    steak
//    bread
*/

var foods = [ "pizza", "cookies", "ice cream", "steak", "burgers", "bread" ];

function looper (arr, strg ){
    if (strg === "forwards"){
        for (i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
        console.log("That was forwards");
        } else if (strg === "backwards") {
            for (i = arr.length -1; i >= 0; i--){
                console.log(arr[i]);
            }
        console.log("That was backwards");
        } else if (strg === "evens") {
            for (i = 0; i < arr.length; i += 2){
                console.log(arr[i]);
            }
        console.log("That was evens");    
            
        } else if(strg === "odds") {
            for (i = 1; i < arr.length; i += 2){
                console.log(arr[i]);
            }
        console.log("That was odds");
        }
        else{
            console.log("That was not a valid string");
        }
    }

looper(foods, "forwards");
looper(foods, "backwards");
looper(foods, "evens");
looper(foods, "odds");
looper(foods, "GoobleJook");



/*

E. Add foods to an array

Write a function that receives an array of foods and checks if it contains the values "pizza" and "bacon". If either of those values is missing, add it to the array.

*/

var i;
var pizza = 0;
var bacon = 0;
var foods1 = [ "cookies", "steak" ];
var foods2 = [ "pizza", "salad" ];
var foods3 = [ "pizza", "salad" , "bacon", "chili" ];
function addFoods(foods) {
    for (i = 0; i < foods.length; i++){
        if (foods[i] == "pizza") {
            pizza = 1;
        } else if (foods[i] == "bacon"){
            bacon = 1;
        } 
    }
    if (pizza != 1){
        foods.push("pizza");
    }
    if (bacon != 1){
        foods.push("bacon");
    }
    console.log(foods);
}

addFoods(foods1);
addFoods(foods2);
addFoods(foods3);