import random as r

def nchoices(itr,int):
  my_list = []
  while int > 0:
    my_list.append(r.choice(itr))
    int -= 1
  return my_list
    

print(nchoices([1,2,3,4,5,6,7],2))