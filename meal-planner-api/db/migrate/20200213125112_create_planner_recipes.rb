class CreatePlannerRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :planner_recipes do |t|
      t.belongs_to :planner
      t.belongs_to :recipe

      t.timestamps
    end
  end
end
