class HomeController < ApplicationController
    
    before_action :authenticate_user!

    def index
        render json: { message: "Welcome Home"}
    end

    def profile
        owner = current_user
        render_resource(user, with: [:planners])
    end
end