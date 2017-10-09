// Algorithm Challenge Description:
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// function repeatStringNumTimes(str, num) {
//   return str;
// }
// repeatStringNumTimes("abc", 3);

// Provided test cases:
// repeatStringNumTimes("*" 3) should return "***"
// repeatStringNumTimes("abc", 3) should return "abcabcabc"
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc"
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********"
// repeatStringNumTimes("abc" -2) should return ""

// My solution:

function repeatStringNumTimes(str, num) {
  var counter = 0;
  var multipliedString = "";
  if(num < 1) {
    return "";
  }
  while(counter < num) {
    multipliedString += str;
    counter += 1;
  }
  return multipliedString;
}

console.log(repeatStringNumTimes("*", 3)); 
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc" -2));

// Their solutions:
function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3); // using while and a decrementing counter

finish rest here...
https://medium.freecodecamp.com/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d#.gzb8998gq
