class Search
	attr_accessor :term

	def get_term(term)
		@term = term.to_s
	end
end