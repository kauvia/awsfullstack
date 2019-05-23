Rails.application.routes.draw do

  get "/test" => "tests#getTest"
  post "/test" => "tests#postTest"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
