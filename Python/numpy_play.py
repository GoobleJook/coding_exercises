import numpy as np

# Creating array in NumPy

my_list = [1, 2, 3]
x = np.array(my_list)
print("List: {}".format(my_list))
print('array: {}'.format(x))

# vs the more efficient:

y = np.array([4,5,6])
print('Another array: {}'.format(y))

# Multidimensional array

m = np.array([[7,8,9],[10,11,12]])
print('Here is a multidimensional array: {}'.format(m))
print('shape() prints the attributes of the md array: {}, which means 2 rows of 3 columns'.format(m.shape))

# arange() returns an array of evenly spaced values with a given interval
n = np.arange(0, 30, 2) # start at 0, end before 30, and count up by 2
print('arange() returns an array of evenly spaced values with a given interval, as such: {}'.format(n))

print('reshape() changes an existing array to new dimensions, as in: {}'.format(n.reshape(3,5)))