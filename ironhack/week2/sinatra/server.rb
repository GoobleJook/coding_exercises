require "sinatra"

get "/" do
	"My first Sinatra app."
end

get "/hi" do
	"'Sup, buddy!!!!"
end

get "/about" do
	bday = Time.new(1973, 10, 30)
	now = Time.now
	@years_ago = now.year - bday.year
	erb(:author)
end

get "/hours/ago/:time" do
	@time = params[:time].to_i
	now = Time.now
	@hours_behind = now - (@time * 3600)
	erb(:hours)
end
