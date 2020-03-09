class Api::V1::RecipesController < ApplicationController

    def index
        recipes = Recipe.all

        render json: recipes
    end

    def show
        recipe = Recipe.find(params[:id])

        render json: recipe
    end

    def create
        # planner_recipe = PlannerRecipe.new(planner_recipe_params)
        # planner_recipe.save
        current_planner = Planner.find_by_id(params[:planner_id].to_i)
        current_recipe = Recipe.find_by_id(params[:planner_recipe][:recipe_id].to_i)
        planner_recipe = current_planner.recipes<<(current_recipe)
        render_resource(current_planner)
    end

    private

    def planner_recipe_params
        params.require(:planner_recipe).permit(:planner_id, :recipe_id)
    end

end
