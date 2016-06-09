// This returns true if the letters of the 2nd array are found in the first array, false if they are not.

function mutation(arr) {
  for(var i = 0; i < arr[1].length; i++){
    if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1){
      return false;
    }
  } return true;
}

mutation(["hello", "Hello"]);