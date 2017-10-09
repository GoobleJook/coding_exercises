class AddTimeToTimeEntries < ActiveRecord::Migration
  def change
  	add_column :time_entries, :time, :integer
  end
end