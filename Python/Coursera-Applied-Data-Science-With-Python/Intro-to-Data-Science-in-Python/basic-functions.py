def add_two_numbers(x,y):
  return x+y

print(add_two_numbers(1,2))

def add_two_or_three_numbers(x,y,z=None):
  if(z==None):
    return x+y
  else:
    return x+y+z

print(add_two_or_three_numbers(1,2))
print(add_two_or_three_numbers(1,2,3))

def add_numbers_with_flag(x,y,z=None,flag=False):
  if(flag):
    print('Flag is true!')
  if(z==None):
    return x+y
  else:
    return X+y+z

print(add_numbers_with_flag(1,2,flag=True))

def add_numbers_as_variable(x,y):
  return x+y

a = add_numbers_as_variable
print(a(200,300))