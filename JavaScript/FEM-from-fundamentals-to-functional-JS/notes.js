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

*/
