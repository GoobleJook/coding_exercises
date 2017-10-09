# Iteration 1:
# For this first pass, here's what I want to be able to do.
# Run the script, to start using it.
# Put new things into the list one thing at a time.
# Enter the word done, in all caps, to quit the program.
# And once I quit, I want the app to show me everything that's on my list.

# Iteration 2:
# "SHOW" prints all items currently on the list
# "HELP" shows a list of commands

shopping_list = []

def help():
  print("""Enter 'HELP' to display this message again.
Enter 'SHOW' to display what is currently on your list.
Enter 'DONE', or an empty line, to exit and print this list.
Enter an item to add to your shopping list.""")

def show():
  item_num = 0
  print('Your shopping list currently contains:')
  for item in shopping_list:
    item_num += 1
    print('{}: {}'.format(item_num, item))

def add_item():
  shopping_list.append(user_input)
  print("Added {}. You now have {} items on your shopping list.".format(user_input,len(shopping_list)))
  
help()

while True:
  user_input = input("> ")
  if user_input == 'done'.upper():
    show()
    break
  elif user_input == '':
    show()
    break
  elif user_input == 'help'.upper():
    help()
  elif user_input == 'show'.upper():
    show()
  else:
    add_item()
