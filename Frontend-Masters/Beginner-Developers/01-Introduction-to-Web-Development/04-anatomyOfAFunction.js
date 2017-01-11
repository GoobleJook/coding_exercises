var fruits = ["watermelon", "banana", "orange", "apple"];
var cars = ["Chevy", "Ford", "Tesla"];
var iceCream = ["vanilla", "chocolate"];

var printList = function(list) {
  for (var i=0; i<list.length; i++) {
    console.log(list[i]);
  };
};

printList(fruits);
printList(cars);
printList(iceCream);