my_list = []
accepting_input = True

while accepting_input:
  print('Enter DONES to stop entering items.')
  item = input('Enter an item for your list: ')
  if item.upper() == "DONES":
    print(my_list)
    break
  else:
    my_list.append(item)


