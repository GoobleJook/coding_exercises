# Integers are two classes, Fixnum and Bignum, use "_" not "," to seperate larger numbers
age = 41
cats = 1
stars_in_milkyway = 325_006_357_011

# Common methods
# .even? and .odd? return a boolean indicating whether int is even or odd
puts age.odd?
puts age.even?

# .round rounds an int to a specified degreee of precision
puts age.round(-1)
puts age.round(10)

# .times executes a block of code for a specified number of times
3.times { puts "beetlejuice" }