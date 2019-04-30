Rails.application.routes.draw do
  resources :evolutions
  resources :pokemons, param: :name
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
