class Api::V1::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user.planners
        else
            flash[:error] = "Something Went Wrong there"
            render json: @user
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :username, :email, :password)
    end
end
