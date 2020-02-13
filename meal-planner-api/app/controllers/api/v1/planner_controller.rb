class Api::V1::PlannerController < ApplicationController

    def index
        @planners = Planner.all

        render json: @planners
    end

    def show
        @planner = Planner.find(params[:id])

        render json: @planner
    end

    def create
        @planner = Planner.new(planner_params)

        if @planner.save
            render json: @planner
        else
            flash[:error] = "Something Went Wrong there"
            render json: @planners
        end
    end

    def update
        @planner = Planner.find(params[:id])

        if @planner.update
            render json: @planner
        else
            flash[:error] = "Something Went Wrong there"
            render json: @planner
        end
    end

    def destroy
        @planner = Planner.find(params[:id])

        if @planner.destroy
            render json: {plannerId: @planner.id}
        else
            flash[:error] = "Something Went Wrong there"
            render json: @planner
        end

    private

    def planner_params
        params.require(:planner).permit(:user_id, :name, :duration)
    end
end
