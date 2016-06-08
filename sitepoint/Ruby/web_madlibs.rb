require 'sinatra'

get '/madlibs' do
	erb :questions
end

post '/madlibs' do
	animal = params[:anamal]