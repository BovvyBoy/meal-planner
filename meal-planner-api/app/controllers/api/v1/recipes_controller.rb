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
        planner_recipe = PlannerRecipe.new(planner_recipe_params)
        planner_recipe.save
        render_resource(planner_recipe)
    end

    private

    def planner_recipe_params
        params.require(:planner_recipe).permit(:planner_id, :recipe_id)
    end

end
