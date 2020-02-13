class Recipe < ApplicationRecord
    belongs_to :planner_recipes
    has_many :planners, through: :planner_recipe
end
