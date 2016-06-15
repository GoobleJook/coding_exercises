require 'pry'

status = "peace"

buggy_logger = status

print "Status: "
print buggy_logger << "\n" #bug here? Why?
# print buggy_logger + "\n" works thought; and what about puts?

def launch_nukes?(status)
	unless status == 'peace'
		return true
	else
		return false
	end
end

print "Nukes Launched: #{launch_nukes?(status)}\n"

binding.pry

# Use this link to help figure out assignment error and difference
# between << and + when dealing with strings

# http://stackoverflow.com/questions/5686621/ruby-string-concatenation-and