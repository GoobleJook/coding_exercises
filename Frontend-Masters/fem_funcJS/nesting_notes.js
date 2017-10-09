var box = {};

box['innerBox'] = {};
box['innerBox'].full = true;
box['innerBox']['height'] = 10;

var innerBox2 = 'innerBox'; // added this line to make line 10 true

console.log(box);
box[innerBox2].full = false; // make this line work without changing it

console.log(box);

// but she wants it done by creating a new object, so...

var box = {};

box['innerBox'] = {};
box['innerBox'].full = true;
box['innerBox']['height'] = 10;

box.otherBox = {};
var innerBox2 = 'otherBox'; // added this line to make line 10 true

console.log(box);
box[innerBox2].full = false; // make this line work without changing it

console.log(box);
