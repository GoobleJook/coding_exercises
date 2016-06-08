def say_hello (*name)
	name = name.join(" & ")
	puts "Hello, #{name}!"
end

say_hello("Rob")
say_hello("Shelly")
say_hello("Robert", "Shelly")
say_hello("James" + " Bond")



def add(a, b)
	puts a + b
end

add((5*5), (5 + 3)) # will print 33
add((3+4) * 10, 8 - 4 / 2) # will print 76



def taste(food)
	if food == "bacon"
		puts "Yummy!!! BACON!!!"
	elsif food == "spinach"
		puts "Urgh..."
	else
		puts "Can I have some bacon on the side?"
	end
end

taste("Green")
taste "bacon"
taste("spinach")

# return exits the function, and you can use multiple values in return statements

def add(a, b)
	calc1 = a + a
	calc2 = a + b
	calc3 = b + b
	return calc1, calc2, calc3
end

puts add(2,4)

def square(num)
	sqr_num = num * num
	if sqr_num > 100
		return "Number too big!!"
	end
	return sqr_num # Don't need to write return (last value is automagically returned, but it is best practice to)
end