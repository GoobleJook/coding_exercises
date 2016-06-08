# Write a function that receives a sentence and returns an array with 
# the sentence's words sorted alphabetically. Ignore case and punctuation.

# recommended approach
# First, split the sentence into words and sort it with the default sort method.
# Now, after splitting the array remove punctuation characters.
# After that, sort using a custom function that ignores cases when comparing words 
#(you can compare both strings after calling upcase on them), but keeping the capitalized words 
# as they were in the beginning .


def word_sort(sentence)
	sentence.delete! ".?!;,"
	words = sentence.split
	words.sort_by!{ |word| word.downcase}
end

sent = "This is a sentence. It has words and punctuation."

puts word_sort(sent)
