class Planner < ApplicationRecord
    belongs_to :user
    has_many :planner_recipe
    has_many :recipes, through: :planner_recipe
end
