class Planner < ApplicationRecord
    belongs_to :user
    belongs_to :planner_recipe
    has_many :recipes, through: :planner_recipe
end
