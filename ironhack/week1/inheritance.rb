class GF
	def initialize
		puts 'In GF class'
	end
	def gfmethod
		puts 'GF method call'
	end
end

# Class F is a subclass of GF

class F < GF
	def initialize
		puts 'In F Class'
	end
end

# Class S sub-class of F
class S < F
	def initialize
		puts 'In S class'
	end
end

son = S.new
son.gfmethod