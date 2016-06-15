contact_list = []
answer = ""

def ask (question, kind="string")
	print question + " "
	answer = gets.chomp
	answer = answer.to_i if kind == "number"
	return answer
end

def add_contact 
	contact = {name: "", phone_numbers: []}
	contact[:name] = ask("What is the person's name?")
	answer = ""
	while answer != "n"
		answer = ask("Do you want to add a phone number? (y/n)")
		if answer == "y"
			phone = ask("Please enter the phone number:")
			contact[:phone_numbers].push(phone)
		end
	end
	return contact
end


while answer != "n"
	contact_list.push(add_contact())
	answer = ask('Add another? (y/n)')
end

puts "-----"

contact_list.each do |contact|
	puts "Contact name:"
	puts "#{contact[:name]}"
	if contact[:phone_numbers].length > 0
		puts "Contact numbers:"
		contact[:phone_numbers].each do |number|
			puts "#{number}"
		end
	end
	puts "--------"
end
