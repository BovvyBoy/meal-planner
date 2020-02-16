Fabricator(:planner) do
    name { Faker::Name.name}
    duration { (Random.new.rand * 7).floor }
end 