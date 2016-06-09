// This function capitalizes the first letter of every word in a sentence. I added the console.logs so I could view the test returns from Node.

// This is my solution, using a for loop

function titleCase(str) {
  var titleArray = str.toLowerCase().split(" ");
    for (var i = 0; i < titleArray.length; i++) {
      titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].substring(1);
    }
  return titleArray.join(" ");
}
  

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE'S ANOTHer"));
console.log(titleCase("And AnotHer"));