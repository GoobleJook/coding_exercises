shopping_list = []

while True:
  user_input = input("Enter an item to add to your shopping list. Enter 'DONE', or an empty line, to exit and print this list: ")
  if user_input.upper() == 'DONE':
    break
  elif user_input == '':
    break
  shopping_list.append(user_input)
item_num = 0
for item in shopping_list:
  item_num += 1
  print('{}: ').format(item_num)