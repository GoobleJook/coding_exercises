shopping_list = []

def remove_item(idx):
  # shopping_list.pop(idx)
  del shopping_list[idx]

def show_help():
  print("""
    Seperate each item with a comma.
    Type DONE to quit, SHOW to see the current list, 
    REMOVE to take an item off the list, and HELP to get this message.
    """)

def show_list():
  count = 1
  for item in shopping_list:
    print('{}: {}'.format(count,item))
    count += 1

print('Give me a list of things you want to shop for.')
show_help()

while True:
  new_stuff = input("""
  Enter a new item for your list.
  >""")
  if new_stuff == 'done'.upper():
    print('\nHere is your list:')
    show_list()
    break
  elif new_stuff == 'show'.upper():
    print('\nHere is your list:')
    show_list()
    continue
  elif new_stuff == 'help'.upper():
    show_help()
    continue
  elif new_stuff == 'remove'.upper():
    spot = input('What is the number of the item you want to remove? \n> ')
    try:
      if spot:
        index = int(spot) - 1
        remove_item(index)
    except:
      print("That isn't a valid number. Please check again by typing 'SHOW', followed by 'REMOVE'")
  
  else:
    new_list = new_stuff.split(',')
    spot = input("""
      Add this at a certain spot?
      Press enter for the end of the list, or give me a number. 
      There are currently {} items in the list.\n>""".format(len(shopping_list)))
    try:
      if spot:
          index = int(spot) - 1
          for item in new_list:
            shopping_list.insert(index, item.strip())
            index += 1
      else:
        for item in new_list:
          shopping_list.append(item.strip())
    except:
      print('You need to enter a digit for an index. Please re-enter the item name.')
