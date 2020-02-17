class Api::V1::PlannersController < ApplicationController

    before_action :authenticate_api_v1_user!

    def index
        planners = current_user.planners

        render json: planners.to_json(include: [:recipes])
    end

    def show
        planner = Planner.find(params[:id])
        authorize_user_resource(planner)
        render_resource(planner, with: [:recipes])
    end

    def create
        planner = Planner.new(planner_params)
        planner.user = current_user
        planner.save
        render_resource(planner)
    end

    def update
        planner = Planner.find(params[:id])
        authorize_user_resource(planner)
        planner.update(planner_params)
        render_resource(planner)
    end

    def destroy
        planner = Planner.find(params[:id])
        authorize_user_resource(planner)
        planner.destroy
        render_resource(planner)
    end

    private

    def planner_params
        params.require(:planner).permit(:user_id, :name, :duration)
    end
end
