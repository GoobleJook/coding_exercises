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


# You can use .extend() to add ranges to lists

c_list.extend(range(6,11))
print(c_list)

# You can use .insert() to place items into a list based on index
alpha = list('acdf')
print(alpha)
alpha.insert(1,'b')
alpha.insert(4,'e')
print(alpha)

# Removing items from a list:

# First you might need to get the index of the item, which we can do in two ways:
# 1. Using the .index() method

letter_list = list('abzdef')
z_index = letter_list.index('z')
print(z_index)

# Then you can delete with the del keyword...
del letter_list[2]
print(letter_list)
# which can be also used to delete strings and numbers but not characters in strings
# or you can use the 
# .remove() method
my_list = [1,2,3,1]
my_list.remove(1)
print(my_list)
# but remove only removes the first iteration of the item you want to remove