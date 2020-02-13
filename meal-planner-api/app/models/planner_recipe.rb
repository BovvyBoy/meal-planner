class PlannerRecipe < ApplicationRecord
    has_many :planners
    has_many :recipes
end
