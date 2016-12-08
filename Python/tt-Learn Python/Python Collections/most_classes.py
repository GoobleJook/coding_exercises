

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


# Now, create a function named stats that takes the teacher dictionary. 
# Return a list of lists in the format [<teacher name>, <number of classes>]. 
# For example, one item in the list would be ['Dave McFarland', 1].

def stats(teachers):
  stats_list = []
  teacher_list = []
  for teacher, classes in teachers.items():
    teacher_list.append(teacher)
    teacher_list.append(len(classes))
    stats_list.append(teacher_list)
    teacher_list = []
  return stats_list



my_teachers = {
  'Smith': ['math','math','math'],
  'Jones': ['engrish','engrish'],
  'Watson': ['detective stuff'],
  'Pierre': ['kama','sutra','french','stuff']
}

print(most_classes(my_teachers))
print(num_teachers(my_teachers))
print(stats(my_teachers))
