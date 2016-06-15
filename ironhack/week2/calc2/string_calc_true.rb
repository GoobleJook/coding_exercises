class String_calc
	def add_num (num_string)
		@sum = 0
		@num_array = num_string.split(/[\n, ,]/)

		# return 0 for blank string
		# return num for one num
		# return sum for 2 num

		# .inject and .map will get rid of need for counter
		
		if @num_array.length == 0
			return 0
		elsif @num_array.length == 1
			return @num_array[0].to_i
		elsif @num_array.length > 1
			@num_array.each { | num | @sum += num.to_i }
			return @sum
		end
	end
end