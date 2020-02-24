Rails.application.routes.draw do
  
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :planners do 
        resources :recipes
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :recipes
    end
  end

  root to: "home#index"
  get '/profile' => 'home#profile'
  

      # resources :users, only: [:create]
      devise_for :users,
                 path: '',
                 path_names: {
                   sign_in: 'api/v1/login',
                   sign_out: 'api/v1/logout',
                   registration: 'api/v1/signup'
                 },
                 controllers: {
                   sessions: 'api/v1/sessions',
                   registrations: 'api/v1/registrations'
                 }

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :planners
      end
    end
  end

  
end
