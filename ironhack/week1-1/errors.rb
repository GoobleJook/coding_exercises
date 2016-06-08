# Command + / # comments multiple lines in Sublime

=begin
class Animal
	def initialize(name, age)
		@name = name
		@age = age
	end
end

dog = Animal.new("Shadow",7)
puts dog.name
=end

# How to solve error?
# Search on generic terms, ie, ruby NoMethodError (refine your search)

# Option 1 to fix

class Animal
	def initialize(name, age)
		@name = name
		@age = age
	end

	def name
		return @name
	end

	def name=(new_name)
		@name = new_name
	end  # lets you change the name using attribute accessor

	# or attr_accessor(:name, :age) 


end

dog = Animal.new("Shadow",7)
puts dog.name

# option # 2 to fix (attribute reader)
class Animal
	attr_reader :name
	def initialize(name, age)
		@name = name
		@age = age
	end
end

dog = Animal.new("Shadow",7)
puts dog.name

