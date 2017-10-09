var nonsense = function(string) {
  var blab = function(){
    alert(string);
  };
  return blab;
};

var blabLater = nonsense('string');
var blabAgainLater = nonsense('M.I.A.');

var lastNameTrier = function(firstName) {
  var lastNameGetter = function(lastName) {
    console.log(firstName + ' ' + lastName);
  };
  return lastNameGetter;
};

;
