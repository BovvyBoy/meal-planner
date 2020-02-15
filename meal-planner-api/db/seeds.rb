require 'rest-client'
require 'json'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dannyb = User.create(name: "Dan", username: "bovvyboy", email: "dan@mail.com", password: "password")

weekshop = Planner.create(user_id: 1, name: "Weekly Shop", duration: 7)

#lasagna = Recipe.create(name: "Lasagne", origin: "Italy", instructions: "please cook", image: "http://imgsource.com", video: "http://vidsource.com", category: "Pasta")





meal_cats = ["Beef", "Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"]
meals = []
full_meals = []
meal_cats.each do |cat|
    res = RestClient.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=#{cat}")
    meal_parse = JSON.parse(res)
    meals << meal_parse["meals"]
end

meals.each do |meal|
    meal.each do |mid|
        res = RestClient.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=#{mid["idMeal"]}")
        meal_parse = JSON.parse(res)
        full_meals << meal_parse
    end
end

full_meals.each do |info|
    Recipe.create(
        name: info["meals"][0]["strMeal"],
        category: info["meals"][0]["strCategory"],
        origin: info["meals"][0]["strArea"],
        instructions: info["meals"][0]["strInstructions"],
        image: info["meals"][0]["strMealThumb"],
        video: info["meals"][0]["strYoutube"]
    )
end


danweekshop = PlannerRecipe.create(recipe_id: 1, planner_id: 1)

