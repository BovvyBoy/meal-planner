class Api::V1::ProfileController < ApplicationController

    before_action :authenticate_user!

    
    def index
        render json: { message: "Welcome Home"}
    end

    def profile
        user = current_user
        render_resource(user, with: [:planners])
    end
end