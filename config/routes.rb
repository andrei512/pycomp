Rails.application.routes.draw do

  root 'welcome#index'

  resources :problems
  devise_for :users
end
