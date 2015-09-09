Rails.application.routes.draw do

  root "root#index"

  resource :root, only: [:index]

  resources :posts,
    only: [:index, :show, :new, :create, :destroy, :update],
    defaults: { format: 'json' }
end
