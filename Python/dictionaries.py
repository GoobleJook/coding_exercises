my_string = ("Hi! My name is {name} and I live in {state}!")

my_dict = {
	'name': 'Robert',
	'state': 'Florida'
}

# my_string.format(**my_dict) is same as my_string.format(name="Robert", state="Florida")

print(my_string.format(name="Robert", state="Florida"))

print("or")

print(my_string.format(**my_dict))