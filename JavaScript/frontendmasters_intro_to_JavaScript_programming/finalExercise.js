// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) 
// until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase 
// amount is below your mental spending threshold.

// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

// Finally, check the amount against your bank account balance to see if you can afford it or not.

// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," 
// as well as a variable for your "bank account balance.""

// You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.

// Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. 
// You may prompt the user for their bank account balance, for example. Have fun and be creative!

const tax_rate = 0.075;
const phone_price = 200.00;
const accessory_price = 75.00;
const spending_threshold = 1400.00;
const bank_account_balance = 1200.00;

var money_spent = 0;
var price_with_tax = 0;
while (money_spent < spending_threshold) {
	money_spent += phone_price + accessory_price
}

function calculate_tax(price) {
	price_with_tax = price * (1 + tax_rate)
}

function give_total(price) {
	console.log("You spent $" +price.toFixed(2));
	if (price > bank_account_balance) {
		console.log("You went over your bank account balance by $" + (price- bank_account_balance).toFixed(2));
	} else {
	console.log("You stayed within your bank limit by $" +(bank_account_balance-price).toFixed(2));
	}
};

calculate_tax(money_spent);
give_total(price_with_tax);