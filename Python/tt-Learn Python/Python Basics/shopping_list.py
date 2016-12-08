# For this first pass, here's what I want to be able to do.
# Run the script, to start using it.
# Put new things into the list one thing at a time.
# Enter the word done, in all caps, to quit the program.
# And once I quit, I want the app to show me everything that's on my list.

shopping_list = []

while True:
  user_input = input("Enter an item to add to your shopping list. Enter 'DONE', or an empty line, to exit and print this list: ")
  if user_input.upper() == 'DONE':
    break
  elif user_input == '':
    break
  shopping_list.append(user_input)
item_num = 0
print('Your shopping list currently contains:')
for item in shopping_list:
  item_num += 1
  print('{}: {}'.format(item_num, item))