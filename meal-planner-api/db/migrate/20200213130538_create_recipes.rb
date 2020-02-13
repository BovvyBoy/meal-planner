class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :category
      t.string :origin
      t.string :instructions
      t.string :image
      t.string :video

      t.timestamps
    end
  end
end
