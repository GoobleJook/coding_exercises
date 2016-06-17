class AddBalanceToEmployees < ActiveRecord::Migration
  def change
  	add_column :employees, :balance, :float
  	change_column :customers, :balance, :float
  	add_column :accounts, :balance, :float
  end
end
