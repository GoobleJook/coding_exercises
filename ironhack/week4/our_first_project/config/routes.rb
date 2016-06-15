Rails.application.routes.draw do
  get '/' => 'projects#home'
  get '/projects' => 'projects#index'
end
