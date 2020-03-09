class Api::V1::PlannerRecipesController < ApplicationController 

    before_action :authenticate_user!

    def create
        planner_recipe = PlannerRecipe.new(planner_recipe_params)
        planner_recipe.save
        render_resource(planner_recipe)
    end

    private

    def planner_recipe_params
        params.require(:planner_recipe).permit(:planner_id, :recipe_id)
    end

end