require 'pry'

class BankAccount
	attr_reader :name

	def initialize (name)
		@name = name
		@transactions = []
		add_transaction("Beginning balance", 0.00)
	end

	def add_transaction(description, amount)
		@transactions.push(description: description, amount: amount)
	end

	def credit(description, amount)
		add_transaction(description, amount)
	end

	def debit(description, amount)
		add_transaction(description, -amount)
	end

	def balance
		balance = 0
		@transactions.each do |transaction|
			balance += transaction[:amount]
		end
		return balance
	end

	def to_s
		"Name: #{name}, Balance: #{sprintf("%0.2f",balance)}"
	end

	def print_register
		puts "#{name}'s bank account"
		puts "-" * 40

		puts "Description".ljust(30) + "Amount".rjust(10)
		@transactions.each do |transaction|
			puts"#{transaction[:description].ljust(30)}\t#{sprintf("%0.2f", transaction[:amount].to_s.rjust(10))}"
		end

		puts "-" * 40
		
		puts "Balance:".ljust(30) + "#{sprintf("%0.2f", balance)}".rjust(10)
	end
end

bank_account = BankAccount.new("Robert")
bank_account.credit("Paycheck",1240.00)
bank_account.debit("Groceries", 240.00)
puts bank_account
bank_account.print_register