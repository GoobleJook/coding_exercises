class Name  
	attr_accessor :title, :first_name, :middle_name, :last_name

	def initialize(title, first_name, middle_name, last_name)
		@title = title
		@first_name = first_name
		@middle_name = middle_name
		@last_name = last_name
	end

	def full_name
		@first_name + " " + @middle_name + " "  + @last_name 
	end

	def full_name_with_title
		@title + " " + full_name()
	end

	def to_s #overrides default of mem address printed as string when calling object directly
		full_name_with_title
	end
end





rob = Name.new("Dr-ish.", "Robert", "Brian", "Hernandez")
shelly = Name.new("Social-mistress", "Shelly", "Ann", "Baer")
puts rob.title + " " + rob.full_name
puts shelly.full_name_with_title

puts shelly
puts shelly.inspect