require ("./string_calc_true.rb")

RSpec.describe "String calculator" do
	it "returns 0 for empty string" do
		calc = String_calc.new

		expect( calc.add_num("")).to eq(0)
	end
end

RSpec.describe "String calculator" do
	it "returns num for single string" do
		calc = String_calc.new

		expect(calc.add_num("6")).to eq(6)
	end
end

RSpec.describe "String calculator" do
	it "returns sum for double or greater string" do
		calc = String_calc.new

		expect(calc.add_num("7\n8\n9")).to eq(24)
	end
end

RSpec.describe "String calculator" do
	it "returns correct with ," do
		calc = String_calc.new

		expect(calc.add_num("7","15")).to eq(22)
	end
end
		 