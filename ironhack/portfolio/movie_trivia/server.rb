require "sinatra"
# require_relative "lib/blog.rb"
# require_relative "lib/post.rb"
require "sinatra/reloader" if development?

get "/" do


	erb(:home)
end

get "/search" do
	search = params[:search_term].to_s
	erb(:submit)
end

first = params[:first_number].to_f
