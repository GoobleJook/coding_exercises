# to append lists, you can use the .append... 

a_list = list(range(3))
a_number = 3
a_list.append(a_number)
print(a_list)

# but this won't work on lists...

b_list = list(range(4,6))
a_list.append(b_list)
print(a_list)

# So to add a list to a list, we use concatenation, like with strings

a_list = list(range(3))
a_list.append(a_number)

c_list = a_list + b_list
print(c_list)




# print('appending a_number to a_list =  {}'.format(a_list.append(a_number))) 

# print('{} {}'.format(1,2))