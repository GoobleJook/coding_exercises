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

# E.g. word_count("I am that I am") gets back a dictionary like:
# {'i': 2, 'am': 2, 'that': 1}
# Lowercase the string to make it easier.
# Using .split() on the sentence will give you a list of words.
# In a for loop of that list, you'll have a word that you can
# check for inclusion in the dict (with "if word in dict"-style syntax).
# Or add it to the dict with something like word_dict[word] = 1.
def word_count(my_string):
    my_dict = {}
    my_list = my_string.lower().split()
    for word in my_list:
      if word not in my_dict:
        my_dict[word] = 1
      else:
        my_dict[word] += 1 
    print(my_dict)

word_count('I am that I am')        
