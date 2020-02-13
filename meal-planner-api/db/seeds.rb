# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dannyb = User.create(name: "Dan", username: "bovvyboy", email: "dan@mail.com", password_digest: "password")

weekshop = Planner.create(user_id: 1, name: "Weekly Shop", duration: 7)

lasagna = Recipe.create(name: "Lasagne", origin: "Italy", instructions: "please cook", image: "http://imgsource.com", video: "http://vidsource.com", category: "Pasta")

danweekshop = PlannerRecipe.create(recipe_id: 1, planner_id: 1)