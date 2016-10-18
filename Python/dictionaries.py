my_string = ("Hi! My name is {name} and I live in {state}!")

my_dict = {
	'name': 'Robert',
	'state': 'Florida'
}

# my_string.format(**my_dict) is same as my_string.format(name="Robert", state="Florida")

print(my_string.format(name="Robert", state="Florida"))

print("or")

print(my_string.format(**my_dict))

# Exercise one:

# Create a function named string_factory that accepts a list of 
# dictionaries and a string. Return a new list built by using 
# .format() on the string, filled in by each of the dictionaries 
# in the list.


dicts = [
    {'name': 'Michelangelo',
     'food': 'PIZZA'},
    {'name': 'Garfield',
     'food': 'lasanga'},
    {'name': 'Walter',
     'food': 'pancakes'},
    {'name': 'Galactus',
     'food': 'worlds'}
]

string = "Hi, I'm {name} and I love to eat {food}!"

def string_factory(my_dict, my_string):
    new_list = []
    for element in my_dict:
        new_list.append(my_string.format(**element))
    
    return new_list

print(string_factory(dicts,string))