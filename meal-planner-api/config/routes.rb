Rails.application.routes.draw do
  devise_for :names
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "home#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :planners
    end
  end

  namespace :api do
    namespace :v1 do
      resources :recipes
    end
  end
end
