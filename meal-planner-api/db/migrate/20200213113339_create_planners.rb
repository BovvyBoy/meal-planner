class CreatePlanners < ActiveRecord::Migration[6.0]
  def change
    create_table :planners do |t|
      t.belongs_to :user
      t.string :name
      t.integer :duration

      t.timestamps
    end
  end
end
