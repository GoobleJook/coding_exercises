// This function checks to see if the input is a palindrome (without punctuation, special characters, or spaces)

function palindrome(str) {
  var strippedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  if (strippedStr.split("").reverse().join("") === strippedStr){
    return true;
  } return false;
}



palindrome("Eye_oo*eye");
