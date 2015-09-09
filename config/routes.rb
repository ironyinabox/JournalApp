Rails.application.routes.draw do

  root "root#index"

  resource :root, only: [:index]

  resources :posts,
    only: [:index, :show, :new, :create, :destroy],
    defaults: { format: 'json' }
end
