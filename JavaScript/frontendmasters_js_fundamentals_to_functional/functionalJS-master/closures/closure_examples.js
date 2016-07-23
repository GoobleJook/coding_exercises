var closureAlert = function () {
	var x = "Help! I'm a variable stuck in a closure!";
	var alerter = function () {
		alert(x);
	};
	alerter();
};

closureAlert();