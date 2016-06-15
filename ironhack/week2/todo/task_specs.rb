require ("./task.rb")

RSpec.describe "Should have unique task ID" do
	let(:task) { Task.new("task1") }

	it "should return 1 for unique ID" do
		expect(task.id).to eq(1)
	end
end

	

# Only test against notes in todo_list.rb

# Test against Todo_list methods NOT classes

