def create_list
	print "What is the list name? "
	name = gets.chomp

	hash = { name: name, items: Array.new }
	return hash
end

def add_list_item
	print "What item would you like to add?"
	item_name = gets.chomp
	print "How many?"
	quantity = gets.chomp.to_i

	hash = { name: item_name, quantity: quantity }
	return hash
end

def print_list(list)
	puts "List: #{list['name']}"
	print_seperator()
	list[:items].each do |item|
		puts "\tItem: " + item[:name] + "\t\tQuantity: " + item[:quantity].to_s
	end
	puts print_seperator()
end

def print_seperator(character="-")
	puts character * 80
end

list = create_list()
list[:items].push(add_list_item())
print_list(list)