# This is enumerating through an iterable, but we don't need to do this...
print("Using for loop")
my_alphabet_list = list('abcedfghijklmnopqrstuvwxyz')
count = 0
for letter in my_alphabet_list:
  count += 1
  print('{}: {}'.format(count,letter))

print("Using enumerate()")
# ...we can use .enumerate() instead
for index, letter in enumerate(my_alphabet_list):
  print('{}: {}'.format(index + 1,letter))

# can also be used with only one variable
print("Using step.")
for step in enumerate(my_alphabet_list):
  print('{}: {}'.format(step[0],step[1]))

# Wheras a ** takes aparts dictionaries, a * takes apart tuples or lists
print("Using the * trick")

for step in enumerate(my_alphabet_list):
  print('{}: {}'.format(*step))
