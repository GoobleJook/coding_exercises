# Hashes are associative arrays, which are sorted by name not index
# You can look up values by its name or key
# Similar to dictionaries

my_hash = {}
my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"

puts my_hash

# .has_key? method checks for a certain key, and .has_value? checks for a certain value
puts my_hash.has_key?("AST")
puts my_hash.has_key?("CAT")
puts my_hash.has_value?("Galicia")

# .select method returns a new hash consisting of key-value pairs, matching certain conditions, from an original hash
new_hash = my_hash.select { |key, value| key.include?("G") }
puts new_hash