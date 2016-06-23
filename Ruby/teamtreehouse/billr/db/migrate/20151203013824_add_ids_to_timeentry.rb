class AddIdsToTimeentry < ActiveRecord::Migration
  def change
  	add_column :time_entries, :customer_id, :integer
  	add_column :time_entries, :employee_id, :integer
  end
end
