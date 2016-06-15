require "sinatra"
require "./lib/calculator.rb"
require "sinatra/reloader" if development?

enable(:sessions)

get "/session_test" do
	session[:saved_value] #see slides; remembers if it is stored there if I go to another page
end

get "/" do
	erb(:home)
end

post "/calculate_add" do
	first = params[:first_number].to_f
	second = params[:second_number].to_f
	puts "#{first} + #{second} = #{Calculator.new(first,second).add}"
end


# get "/add" do
# 	erb(:add)
# end

# post "/calculate_add" do
# 	#add numbers here
# 	first = params[:first_number].to_f
# 	second = params[:second_number].to_f
# 	result = first + second
# 	"#{first} + #{second} = #{result}"
# end
