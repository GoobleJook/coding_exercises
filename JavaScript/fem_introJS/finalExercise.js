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

const TAX_RATE = 0.075;
const PHONE_PRICE = 200.00;
const ACCESSORY_PRICE = 75.00;
const SPENDING_THRESHOLD = 1400.00;
var bank_account_balance;
var money_spent = 0;
var price_with_tax = 0;

bank_account_balance = prompt("What is your current bank_account_balance? ");

while (money_spent < bank_account_balance) {
	money_spent += PHONE_PRICE + ACCESSORY_PRICE
}

function calculate_tax(price) {
	price += price * (1 + TAX_RATE)
}

function give_total(price) {
	console.log("You spent $" +price.toFixed(2));
	if (price > bank_account_balance) {
		console.log("You went over your bank account balance by $" + (price - bank_account_balance).toFixed(2));
	} else {
	console.log("You stayed within your bank limit by $" +(bank_account_balance-price).toFixed(2));
	}
};

calculate_tax(money_spent);
give_total(price_with_tax);