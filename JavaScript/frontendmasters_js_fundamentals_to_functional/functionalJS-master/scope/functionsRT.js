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