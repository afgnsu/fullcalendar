Rails.application.routes.draw do
  resources :calendars
  #get 'calendars/new'
  #get 'calendars/create'
  #get 'calendars/update'
  #get 'calendars/destroy'
  #get 'home/index'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
