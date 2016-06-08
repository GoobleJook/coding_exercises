# Arrays store multiple variables, including mixed-value variables

animals = [ "lions","tigers","bears" ]
puts animals
numbers = [ "One", 2, "Three" ]

# Arrays are zero indexed and are mutable
puts numbers[0]
puts numbers[1]

# Common array methods

my_array = []

# You can use shovel operator "<<" or push function to add items to an array
my_array << "A"
my_array.push "B"
my_array.push "C"

puts my_array

my_array.delete_at 2 # .delete_at removes item based on index array
puts my_array # should print the first 2 items only

# .sort items in an array from lowest to highest
puts [4,6,2,4,7,12,9,12].sort
puts ["g", "e", "n", "w", "a"].sort
# throws error because it can't (apparently) sort mixed types puts [4, 12, -1, 3, -200, "cat"].sort 
