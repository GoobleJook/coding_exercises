class ProgrammingLanguage
    attr_accessor :name, :age, :type
    def initialize(name, age, type)
        @name = name
        @age = age
        @type = type
    end
end
ruby = ProgrammingLanguage.new("Ruby", 21, "Dynamic")
python = ProgrammingLanguage.new("Python", 24, "Dynamic")
javascript = ProgrammingLanguage.new("JavaScript", 20, "Dynamic")
go = ProgrammingLanguage.new("Go", 6,"Static")
rust = ProgrammingLanguage.new("Rust", 5, "Static")
swift = ProgrammingLanguage.new("Swift", 2, "Static")
java = ProgrammingLanguage.new("Java", 20, "Static")
swink = ProgrammingLanguage.new("Swink", 0, "Made up")

array_of_languages = [ruby, python, javascript, go, rust, swift, java]

def array_printer(array) 
    array.each do | language |
        puts "Language: #{language.name} | Age: #{language.age} | Type System: #{language.type}"
    end
end

puts "This is just a print"
array_printer(array_of_languages)

array_new_language = array_of_languages.map do | lang |
    lang.age = lang.age + 1 
    lang
end

array_reverse = array_of_languages.sort {|x,y| y.age <=> x.age }
puts "Age in reverse"
array_printer(array_reverse)

array_java_sux = array_of_languages.delete_if { | language | language.name == "Java" }
puts "Without Java"
array_printer(array_java_sux)

array_shuffled = array_of_languages.shuffle 
puts "Shuffled"
array_printer(array_shuffled)


# THIS IS OUR PROBLEM IT ONLY RETURNS TYPE (LAST ITEM) AND NOT FULL NAME, AGE, TYPE
array_string = array_of_languages.map do | lang |
    lang.age = lang.age.to_s
    name = lang.name
    type = lang.type
end


puts ".joined"
joined = array_string.join(separator=" ")
puts joined


puts "inserted"
inserted = array_of_languages.insert(0, swink)
array_printer(inserted)

puts "popped"
popped = array_of_languages.pop
puts popped.name

puts "original check"
array_printer(array_of_languages)

