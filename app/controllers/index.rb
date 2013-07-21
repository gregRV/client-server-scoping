enable :sessions

get '/' do
  erb :index
end

get '/skills/:skill' do
  erb :skills
end

get '/meals' do
  @meals = ["Spaghetti",
            "Ravioli",
            "Hummus and Veggies",
            "Pizza",
            "Falafel",
            "Sushi",
            "Linguini",
            "Onigilli"]
  @meal = @meals[rand(0..7)]
  erb :meals
end

get '/set_color' do
  erb :set_color
end

post '/colors' do
  session[:color] = params[:color]
  redirect '/'
end

