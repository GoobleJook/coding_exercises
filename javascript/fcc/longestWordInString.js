function findLongestWord(str) {
  var longestWordArray = str.split(" ");
  var longestWordLength = 0;
  for (var i = 0; i < longestWordArray.length; i++) {
    if (longestWordArray[i].length > longestWordLength) {
      longestWordLength = longestWordArray[i].length;
    }
  }
  return longestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
