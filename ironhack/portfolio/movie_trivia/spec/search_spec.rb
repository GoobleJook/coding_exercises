require_relative("../lib/search.rb")

RSpec.describe Search do
	before(:each) do
		@search = Search.new.get_term(3.14)
	end

	it ("should store search terms in a string") do
		expect(@search).to eq( "3.14" )
	end
end

