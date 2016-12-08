def most_classes(teachers):
  longest = 0
  best = ''
  for teacher, classes in teachers.items():
    print("{}: {}".format(teacher,len(classes)))
    if len(classes) > longest:
      longest = len(classes)
      best = teacher
  return best

my_teachers = {
  'Smith': ['math','math','math'],
  'Jones': ['engrish','engrish'],
  'Watson': ['detective stuff']
}

print(most_classes(my_teachers))