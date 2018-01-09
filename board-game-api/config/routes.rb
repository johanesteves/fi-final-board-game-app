Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/api/board_games/search/:query', to: 'api/board_games#search'

  namespace :api do
    resources :board_games, except: [:new, :edit]
  end


end
BoardGame.where('name LIKE ?', "%#{params[:query]}%")