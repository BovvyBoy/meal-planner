class Api::V1::RecipesController < ApplicationController

    before_action :authenticate_user!

    def index
        recipes = Recipe.all

        render json: recipes
    end

    def show
        recipe = Recipe.find(params[:id])

        render json: recipe
    end

end
