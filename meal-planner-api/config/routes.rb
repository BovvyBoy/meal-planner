Rails.application.routes.draw do
  
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  

  root to: "home#index"
  

  namespace :api do
    namespace :v1 do
      # resources :users, only: [:create]
      devise_for :users,
                 path: '',
                 path_names: {
                   sign_in: 'login',
                   sign_out: 'logout',
                   registration: 'signup'
                 },
                 controllers: {
                   sessions: 'api/v1/sessions',
                   registrations: 'api/v1/registrations'
                 }
    end
  end

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
end
