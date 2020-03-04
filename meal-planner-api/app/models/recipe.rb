class Recipe < ApplicationRecord
    has_many :planner_recipes
    has_many :planners, through: :planner_recipes
    has_many :users, through: :planners
end
