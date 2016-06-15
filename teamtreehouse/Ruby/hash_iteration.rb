business = { name: "Treehouse", location: "Portland, OR" }
business.each do |key, value|
	puts "The hash key is #{key} and the value is #{value}"
end

# .each for hash is same as .each_pair

business.each_key do |key|
	puts "The hash key is #{key}"
end

business.each_value do |value|
	puts "The hash value is #{value}"
end