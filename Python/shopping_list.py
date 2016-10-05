my_list = []
accepting_input = True

while accepting_input:
  print('Enter DONE to stop entering items.')
  item = input('Enter an item for your list: ')
  if item.upper() == "DONE":
    print(my_list)
    break
  else:
    my_list.append(item)


