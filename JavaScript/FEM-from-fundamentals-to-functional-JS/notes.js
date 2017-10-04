/*

OBJECTS
_______

Dot notation only can handle strings;
by default JS treats the .dot part as a string.
Bracket notation can handle: "strings", "weird characters",
variables, numbers, and expressions 


- Functions that are a property of an object are called methods.
e.g. 
var box = {};

box["material"] = "cardboard";

box["size"] = {
  "height": 2,
  "width": 80
};

box.area = function() {
  return box.size.height * box.size.width;
};


Dynamic object creating vs object literal:
Dynamic object creation first, then how it would be done in literal.
var box = {};
box['size'] = 9;
box['~/ p."4'] = "meow";

same as...

var box = {
  size : 9,
  '~/ p."4' : "meow";
};

ITERATION
for(var key in box) {
  console.log(key); // will print property names not values
}

for(var key in box) {
  console.log(key + " : " + box[key]); // will return key : value; use braket notation in this loop because it is a variable and need bracket notation for variable
}

Objects have no return order on properties

ARRAYS

Arrays are objects and follow the same rules as above. They are commonly used for 
ordered lists, though, as they have an ordered index (or, for some reason, an object property index)

FUNCTIONS
Bianca recommends defining functions as variables in JS due to hoisting.

var nameImprover = function (name, adj) {
  return 'Col ' + name + ' Mc' + adj + ' pants';
};

$('body').hide();

myArr.forEach(function(val){ console.log(val); });

$('button').on('click', function() {
  console.log('Don\'t press my buttons!');
});

Functions code inside the block isn't run intil it is called with ().
Parameters give arguments to functions. They are different things.

Can use arguments keyword to specify unknown amount of arguments; eg 
var add = function(a, b) {
  console.log(arguments); // logs [3, 10, 5]
  return a + b;
};
add(3, 10, 5);
Can use arguments.length in conditional blocks, for example.
Arguments is not an array and doesn't have array methods, but it is an array-like object and can be accessed in similar fashions.

CONSTRUCTORS
function AnimalMaker(name) {
  return {
    speak: function() {
      console.log("My name is ", name); 
    },
    name: name,
    owner: 'Robert'
  };
};



// Loop through these and create an animal object for each
var animalNames = ['Sheep', 'Liger', 'Big Bird'];
var farm = [];

for(var i = 0; i < animalNames.length; i++) {
  var animal = AnimalMaker(animalNames[i]);
  farm.push(animal);
  // or can use...
  // farm.push(AnimalMaker(animalNames[i]));
}

for (var i = 0; i < farm.length; i++) {
  farm[i].speak()
}
console.log(farm);

NESTING OBJECTS

var box = {};

box.innerbox = {};

box.innerbox.full = true;

box['innerbox']['height'] = 10;

box[innerbox2].full = false;
// make the above line work without changing it...
var innerbox2 = 'otherBox'  // innerbox2 is a new object
box.otherBox = {}
box[innerbox2].full = false;

SCOPE
Scope describes where a variable is accessible, inside the function or in the global.
var x = 'global';
function demonstration() {
  y = 'global';
  var z = 'local';
  window.y = 'also global due to some JS magic in the browser window!'
}

var g = 'global';

function blender(fruit) {
  var b = fruit;
  var y = 'yogurt';

  function bs() {
    alert (b + ' and ' + y + ' makes ' + b + ' swirl')
  } 
  bs();
}

blender('blueberry'); // parent can reach into child, but child can't reach into parent -- "Don't reach into the blender!"

pro-tip: store private variables inside functions.

var g = 'global';

function go() {
  var l = 'local';
  var g = 'in here!'
  alert(g + ' inside go'); // in! here inside go
}

go();
alert(g + ' outside go'); // global outside go

// the most local variable has precedence

var inBlock = false;

for(var i = 0; i < 5; i++){
  var inBlock = true;
};

if(inBlock){
  console.log('is there block scope? ' + !inblock) // false 
  // scope only exists in functions
}
*/
