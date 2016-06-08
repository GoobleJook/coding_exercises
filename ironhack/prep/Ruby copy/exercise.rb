puts "What is the source file?"
source1 = gets.chomp
puts "Give me another one!"
source2 = gets.chomp
puts "What is the destination file?"
destination = gets.chomp

source1txt = IO.read(source1)
source2txt = IO.read(source2)
IO.write(destination, source1txt + source2txt)

newsource = IO.read(destination)
puts "Here is the contents of the new file, #{destination}: #{newsource}"