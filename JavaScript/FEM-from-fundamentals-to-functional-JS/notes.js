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

CLOSURE

var closureAlert = function() {
  var x = "Help! I'm stuck inside a closure!";

  var alerter = function() {
    alert(x);
  }

  setTimeout(alerter, 1000); // will run alerter 1 second after it is called

  console.log("Will still run right after");
};

var closureAlerter = function() {
  var x = 0;
  var alerter = function() {
    alert(++x) // increments then returns vs. x++ returning then incrementing
    };
    return alerter; // you want it to be the function, which can be run on call, rather than the return of the function, which can't be called -- so don't use ();
};

var funcStorer = closureAlerter(); // this is a closure
var funcStorer2 = closureAlerter(); 
funcstorer(); // alerts 1
funcstorer(); // alerts 2 -- it keeps the scope of the function it references
funcstorer2(); // alerts 1 -- it creates a new scope

Closures can create privacy

Examples of closure use:
var add = function(num){
  var num1 = num;

  var addToNum1 = function(num2) {
    return num 1 + num2;
  };

  return addToNum1;
};

var add5 = add(5);
add5(2); // 7

function counter() {
  var n = 0;
  return {
    count: function() { return ++n; },
    reset: function() { n = 0; }
  };
};

var myCounter = counter();
myCounter.count(); // 1
myCounter.count(); // 2
myCounter.reset(); // undefined
myCounter.count(); // 1

CLOSURE RECIPE:
1. Create your parent function
2. Define some variables in the parent's local scope
3. Define a function inside the parent function. We call this a child.
4. Return that function without calling it from inside the parent function.

CLOSURE EXECUTION:
1. Run parent function and save to a variable. This variable will hold whatever the function returns.
2. Optional: Check what that variable holds in its value (it should be the inner function).
3. Run the inner function.

Gotcha!

var sayAlice = function() {
  
  var makeLog = function() {
    console.log(alice);
  }

  var alice = "Why hello there, alice!";

  return makeLog;
}


var aliceGreeting = sayAlice();
aliceGreeting(); //"Why hello there, Alice!";

***

var makeStopwatch = function() {
  console.log('initialized');
  var elapsed = 0;
  console.log(elapsed);

  var stopwatch = function() {
    console.log('stopwatch');
    return elapsed;
  };

  var increase = function() { elapsed++; };
  setInterval(increase, 1000);

  return stopwatch;
};

var x = makeStopwatch();

Write a function, nonsense, that takes an input string.. This function contains
another function, blab, which alerts string and is immediately called inside
the function nonsense. Bnab should look like this inside of the nonsense function:

var blab = function() {
  alert(string);
}

var nonsense = function(string){
  var blab = function() {
    alert(string);
  };
  blab();
};

nonsense('blah blah blah')

MODULE PATTERN (for class-like structures and APIs)

var Module = function() {
  var privateProperty = 'foo';

  function privateMethod(args) {
    // do something
  };

  return {
    publicProperty: "",
    publicMethod: function(args) {
      // do something
    },
    privilegeMethod: function(args) {
      privateMethod(args);
    }
  };
};

var Car = function() {
  
  var gasolineLevel = 10;

  function useGas(amt) {
    if(gasolineLevel - amt < 0) {
      console.log("out of gas :[");
    } else {
      gasolineLevel -= amt;
    }
  };

  return {
    radioStation: "104.5",

    changeStation: function(station) {
      this.radioStation = station;
    },
    go: function(speed) { useGas(speed); }
  };
};

var Mustang = Car();
Mustang.go(20); // out of gas :[

HIGHER-ORDER FUNCTIONS
They 1. take a function as an argument or 

element.addEventListener("click", function() {
  
  console.log("element clicked!");
});

2. return a function as an output.

var add = function(num){
  var num1 = num;

  return addToNum1 = function(num2){
    return num1 + num2;
  };
};

if/else statement abstracted into a function

var ifElse = function(condition, isTrue, isFalse){
  
  if(condition){
    isTrue;
  } else {
    isFalse;
  }
};

ifElse(true,
  function() { console.log(true); },
  function() { console.log(false); }
); // returns undefined because it's not returning a called function.


var ifElse = function(condition, isTrue, isFalse){
  if(condition){
    return isTrue();
  } else {
    return isFalse();
  }
};

ifElse(true, 
  function() { console.log(true); },
  function() { console.log(false); }
);

Or...

var ifElse = function(condition, isTrue, isFalse){
  if(condition){
    isTrue();
  } else {
    isFalse();
  }
};

var logTrue = function(){ console.log(true); };
var logFalse = function(){ console.log(false); };

ifElse(true, logTrue, logFalse);

PASSING ARGUMENTS

var increment = function(n){ return n + 1; };

var square = function(n){ return n * n; };

var doMathSoIDontHaveTo = function(n, func){
  return func(n);
};

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);

PASS A FUNCTION TO THIS IN EITHER ISTRUE OR ISFALSE

var ifElse = function(condition, isTrue, isFalse){
  if(condition){
    isTrue();
  } else {
    isFalse();
  }
};

Add an arg!!!
var ifElse = function(condition, isTrue, isFalse, arg){
  if(condition){
    isTrue(arg);
  } else {
    isFalse(arg);
  }
};

ifElse(true, function(x){console.log(x)}, function(x){console.log(x)}, 'asdf');
// asdf

*/
