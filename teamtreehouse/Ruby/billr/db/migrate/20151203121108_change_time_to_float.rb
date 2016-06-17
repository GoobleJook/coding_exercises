class ChangeTimeToFloat < ActiveRecord::Migration
  def change
    change_table :time_entries do |t|
      t.change :time, :float
    end
  end
end
  