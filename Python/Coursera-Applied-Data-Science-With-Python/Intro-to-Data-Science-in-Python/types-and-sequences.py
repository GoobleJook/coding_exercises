# tuples are immutable and are accessed by index, integers or slices
tups = ('a',1,'b',3)
print("Changing tups[3] from 3 to 4")
try:
  tups[3] = 4
  print("tups[3] now equals {}".format(tups[3]))
except:
  print("Cant do that fool! Tuples are immutable. See?")
  print("tups[3] still equals {}".format(tups[3]))