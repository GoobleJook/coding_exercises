class RemoveOldTables < ActiveRecord::Migration
  def up
  	Customer.all.each do |c|
  		Account.create(name: c.name, email: c.email, balance: c.balance)
  	end
  	Employee.all.each do |e|
  		Account.create(name: e.name, email: e.email, balance: e.balance)
  	end
  end
end
