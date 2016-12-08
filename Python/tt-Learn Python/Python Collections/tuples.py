# Tuples are created not by parenthesis but by commas
# Generally they are seen created with parenthesis; however, they aren't necessary
# my_tup = (1,2,3) is the same as my_tup = 1,2,3
# or, since Python is expecting an iteratible, you can feed it
# my_tup = ([1,2,3]), which is the same as the above

# Tuples can be used for simultaneous assignment

# a,b = 1,2

# a >> 1
# b >> 2

# Why, because commas make Tuples not parenthesis

# Tuple unpacking is pretty fucking neat

# c = (3,4)

# d, e = c
# >> d
# >> 3
# >> e
# >> 4

# Tuple packing is pretty fucking cool too

# f = (d, e)
# >> f 
# >> 3, 4

# Tuple swapping is also neat

# First reset a and b
# >> del a
# >> del b
# >> a = 1
# >> b = 2

# Let's try to swap them. In many languages you need a third variable to do this. But in Python...
# >> a,b = b,a
# >> a
# >> 2
# >> b
# >> 1

# Tuples can be used as pretty cool functional assignment techniques, too
# def my_func():
#   return (1, 2, 3)

# my_tup = my_func()
# x,y,z = my_tup

# Tuples are often used to return values from functions, and it is a neat tick
# to catch these tuples in multiple variables, using the above techniques