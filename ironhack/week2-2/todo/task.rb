class Task
	attr_reader :content, :id
	@@current_id = 1
	def initialize(content)
		@content = content
		@id = @@current_id
		@@current_id += 1
	end
end

# 	def initialize(name, status, due)
# 		@name = name
# 		@status = status
# 		@due = due
# 	end
	
# 	def add_task(t_name)
# 		return t_name
# 	end
# end


# # todo list========

# # Attributes
# # ----------
# @name
# @tasks

# # Actions
# #--------
# def create_task
# def delete_task
# def reminder <optional>


# # -----------------------


# # Task
# # ====

# # Attributes
# # ----------
# @name / @description (what the task is)
# @status
# @due_date
# @instructions / @notes (extra information for completing the task)
# @category


# # Actions
# # -------
# def update
# def complete!

# ====== Tests =====

# test to see if Todo_list name exists
