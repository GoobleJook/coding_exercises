var fruits = ["watermelon", "banana", "orange", "apple"];
var cars = ["Chevy", "Ford", "Tesla"];
var iceCream = ["vanilla", "chocolate"];
var empty = [];

var printList = function(list) {
  if (list.length < 3) {
    return "Not enough elements";
  }
  return list
};

// console.log(printList(fruits));
// console.log(printList(cars));
// console.log(printList(iceCream)); 

var concatLists = function(list1, list2) {
  return list1.concat(list2)
} 

console.log(printList(concatLists(fruits,cars)));
console.log(printList(concatLists(iceCream,empty)));