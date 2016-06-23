class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
    	t.string :type
    	t.string :name, :email
      t.timestamps null: false
    end
  end
end
