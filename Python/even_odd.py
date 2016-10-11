import random

start = 5 

def even_odd(num):
    # If % 2 is 0, the number is even.
    # Since 0 is falsey, we have to invert it with not.
    return not num % 2

while start != False:
    randNum = random.randint(1,99)
    if even_odd(randNum) != 0:
        print("{} is even".format(randNum))
    else:
        print("{} is odd".format(randNum))
    start = start -1

