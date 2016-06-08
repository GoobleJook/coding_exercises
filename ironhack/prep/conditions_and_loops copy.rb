puts "What's your favorite food?"
food = gets.chomp
if food == "bacon"
	puts "Bacon is good food!"
elsif food == "beer"
	puts "Beer is not food!"
else
	puts "#{food} is good too!"
end

numbers = [1,2,3]
for element in numbers
	puts "->#{element}"
end

string = ""

while string.length < 10
	string += 'a'
end

puts "The final string is #{string}!"

numbers_2 = [ "One",2,"Three" ]
numbers_2.each do |item|
	puts "--> #{item}"
end

my_hash = {}
my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"
my_hash["CAT"] = "Catalunya"

my_hash.each do |key,value|
	puts "#{key} stands for #{value}"
end
