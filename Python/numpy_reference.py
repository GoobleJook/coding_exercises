import numpy as np

# Creating array in NumPy

my_list = [1, 2, 3]
x = np.array(my_list)
print("List: {}".format(my_list))
print('array: {}'.format(x))

# vs the more efficient:

y = np.array([4,5,6,7,8,9])
print('Another array: {}'.format(y))

# Multidimensional array

m = np.array([[7,8,9],[10,11,12]])
print('Here is a multidimensional array: {}'.format(m))
print('shape() prints the attributes of the md array: {}, which means 2 rows of 3 columns'.format(m.shape))

# arange() returns an array of evenly spaced values with a given interval
n = np.arange(0, 30, 2) # start at 0, end before 30, and count up by 2
print('arange() returns an array of evenly spaced values with a given interval, as such: {}'.format(n))

print('reshape() changes an existing array to new dimensions, as in: {}'.format(n.reshape(3,5)))

print('linspace() returns evenly spaced numbers and figures out interval for you (0, 4, 9) returns 9 evenly spaced values from 0 to 4, as \
	such: {}'.format(np.linspace(0,4,9)))

o = np.linspace(0,4,9)
o.resize(3,3)
print('resize() changes the shape and size of array in-place, as such: {}'.format(o))

zeros = np.zeros((3,2))
ones = np.ones((1,20))
print("np.ones and np.zeroes return new arrays of given size and shape, filled with ones and zeroes respectively, as such: {}\n{}".format(ones, zeros))

print("\n\n np.eye() returns a 2d array with ones on the diagonal and zeros elsewhere\n")
a = np.eye(3)
print(a)

print("\n\n np.diag extracts a diagonal or constructs a diagonal array\n\n")
print(np.diag(y))

print('Create an array using repeting list \(or see np.tile\)\n\n')
print(np.array([1,2,3] * 3))

print('\n\nrepeat elements of an array using np.repeat')
print(np.repeat([1,2,3],3))

print('\n\nCombining arrays and functions like int \n')
p = np.ones([2, 3], int)
print(p)

print('\n\nUse np.vstack to stack arrays in sequence vertically (row wise)\n')
print(np.vstack([p, 2*p]))

print('\n\nhstack stacks horizontally (column wise)\n')
print(np.hstack([p, 2*p]))

print('\n\nYou can use mathematical operations, as such:\n\n')
x = np.array([1,2,3])
y = np.array([6,7,8])
print('x is {}\n'.format(x))
print('y is {}\n'.format(y))
print('x + y = {}\n'.format(x + y))
print('x - y = {}\n'.format(x -y))
print('x * y = {}\n'.format(x * y))
print('x / y = {}\n'.format(x/y))
print('x ^ 2 = {}\n'.format(x**2))
print("Dot Product of 1*6 + 2*7 + 3*8: \n{}".format(x.dot(y)))
z = np.array([y, y**2])
print("z is a multidimensional array made up of y and squares of y, as such:\n{}".format(z))
print("This is the shape of z before transposing it:\n{}".format(z.shape))
print("Use z.T to transpose z.")
print(z.T.shape)
print("Use .dtype to see data type of elements in array, as in:\n{}".format(z.dtype))
print("Or you can use .astype to cast as a specific type, as in:\n{}".format(z.astype('f')))
print("\nNumpy has many built-in math functions, including .sum(), .max(), .min(), .mean(), .std()\n")
print(".argmax() and .argmin() return the index of the maximum and minimum values in the array")
print("\nindexing and slicing are pretty much the same as strings")
print('use .copy() to create copy of arrays that will not affect the original array when copy is modified\n\n')

print("Let's learn about iterating over arrays: \n\n")
print("First let's create a new 4 x 3 array of random numbers 0-9")
test = np.random.randint(0, 10, (4,3))
print(test)
print("\nYou can iterate by row:\n")
for row in test:
	print(row)
print("\nYou can iterate by index:\n")
for i in range(len(test)):
	print(test[i])
print("\nYou can iterate by row and index:\n")
for i, row in enumerate(test):
	print('row', i, 'is', row)
print("\nYou can use zip() to iterate over multiple iterables:\n")
test2 = test**2
print("This is test:\n{}".format(test))
print("\nThis is test2:\n{}".format(test2))
print("Let's iterate over them both!\n")
for i,j in zip(test,test2):
	print(i,'+',j,'=',i+j)

