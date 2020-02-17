Fabricator(:user) do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    username { Faker::Name.name }
    password { Faker::Games::Pokemon.name }
    planners(count: 2)
end