# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

gloomhaven = BoardGame.create(name: "Gloomhaven", rank: 1, rating: 9.0, img_url: "", release_year: 2017, weight: 3.33)

pandemic_legacy_S1 = BoardGame.create(name: "Pandemic Legacy: Season 1", rank: 2, rating: 8.7, img_url: "", release_year: 2015, weight: 2.80)