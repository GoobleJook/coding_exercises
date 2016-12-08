

def most_classes(teachers):
# returns name of the teacher who has taught the most classes
  longest = 0
  best = ''
  for teacher, classes in teachers.items():
    print("{}: {}".format(teacher,len(classes)))
    if len(classes) > longest:
      longest = len(classes)
      best = teacher
  return best

def num_teachers(teachers):
# returns the total number of teachers in the dictionary
  count = 0
  for teacher in teachers.items():
    count += 1
  return count





my_teachers = {
  'Smith': ['math','math','math'],
  'Jones': ['engrish','engrish'],
  'Watson': ['detective stuff'],
  'Pierre': ['kama','sutra','french','stuff']
}

print(most_classes(my_teachers))
print(num_teachers(my_teachers))

