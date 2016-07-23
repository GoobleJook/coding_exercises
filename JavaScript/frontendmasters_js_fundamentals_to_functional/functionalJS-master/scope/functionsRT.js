var ACTUAL;
ACTUAL = null;

var firstFn = function () {
	var localToFirstFn = 'first';
	var secondFn = function () {
		ACTUAL = localToFirstFn;
	}
	console.log(ACTUAL);
};

firstFn();


var fn = function () {
  var innerCounter = innerCounter || 10;
  innerCounter = innerCounter + 1;
  ACTUAL = innerCounter;
};

fn();
console.log(ACTUAL);
fn();
console.log(ACTUAL); // it is 11 both times because it is only initialized on each call, hence set to 10 on each call.