# We have been asked from Ironhack to develop a new and awesome Blog. After many cups of coffee and sleepless nights, we conclude that our blog should implement:

# Two Classes: Blog and Post
# Every post has a title, a date and text.
# Blog: It has a container for all the posts. An array or something like that.
# A blog should be able to create and show a front page through the methods create_front_page and publish_front_page, but feel free to use the methods your want. At the end, the blog should be able to show every post in the following format:

# Post title 1
# **************
# Post 1 text
# ----------------
# Post title 2
# **************
# Post 2 text
# ----------------
# Post title 3
# **************
# Post 3 text
# ----------------
# The posts should be ordered by date starting on newest.
# For example:

# blog = Blog.new
# blog.add_post Post.new(...)
# blog.add_post Post.new(...)
# blog.add_post Post.new(...)

# blog.publish_front_page
# Post title 1
# **************
# Post 1 text
# ----------------
# Post title 2
# **************
# Post 2 text
# ----------------
# Post title 3
# **************
# Post 3 text
# ----------------
require 'date'
require 'pry'

class Blog
	def initialize
		@posts = []
	end

	def add_post(post)
		@posts.push(post)
	end


	def publish_front_page
		@posts.sort! {|post1, post2| post2.date<=>post1.date } 
		@posts.each {|post|
			puts "#{post.title},"
			puts "*" * post.title.length
			puts "written on #{post.date}."
			puts "#{post.text}"
			puts "--------------------"
		}

	end
end


class Post
	attr_accessor :title, :date, :text
	def initialize(date, title, text)
		@date = date
		@title = title
		@text = text
	end
end

class Sponsored_post < Post
	attr_accessor :title, :date, :text
	def initialize(date, title, text)
		@title = "******" + title + "******"
		@date = date
		@text = text
	end
end

Oct20 = Post.new(Date.today,"Stuff","This is something I wrote about stuff.") # setting it to a variable keeps it shorter and makes it reusable -- ***PREFERRED***
Oct21 = Post.new(Date.today,"Things","This is something I wrote about some things.")

blog = Blog.new
blog.add_post(Oct21)
blog.add_post(Oct20)
blog.add_post Post.new(Date.today, "Shit", "Shit and stuff. I like metal music") 
blog.add_post Sponsored_post.new(Date.today,"I have sold out","They pay me well!")
blog.publish_front_page

binding.pry
# Bonus blog

# Your blog looks amazing! but we need to improve it a little bit. A blog can have hundreds of posts, and sometimes it can be chaotic to find one. So we need to organize them, and nothing better than pagination. In this new version of the blog, we want that it only shows three posts per page, and at the the bottom, we would like to show the number of pages that it has and it will be very cool if the current page is shown in a different colour (you can use the colorize gem). To change from one page to another, the user should respond with either next or prev(previous).

# For example: We have a Blog with 8 Posts