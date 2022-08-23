# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

puts "generating users"
User.create(name: "Emmanuel", username: "unique1", password: "pass1")
y = 2
while y <= 10
    User.create(name: Faker::FunnyName.two_word_name, username: "unique#{y}", password: "pass#{y}")
    y += 1
end

# randomId = rand(20)
puts "generating checking & savings"
z = 1
while z <= 10
randomCBalance = rand(99999)
randomSBalance = rand(99999)
Checking.create(available_balance: randomCBalance, current_balance: randomCBalance, account_number: rand(999999999), user_id: z)

Saving.create(available_balance: randomSBalance, current_balance: randomSBalance, account_number: rand(999999999), user_id: z)
z += 1
end

puts "generating transactions"
randomAmount= rand(9999)
a = 1
while a < 10
    b = 1 
    while b < 10
        Transaction.create(name: Faker::Company.name, location: Faker::Address.full_address, category: Faker::Company.industry, amount: rand(99999), date: Faker::Date.between(from: '2022-01-23', to: '2022-08-20'), checking_id: b, saving_id: nil)
        b += 1
    end
    Transaction.create(name: "Withdrawl", location: "ATM", category: "Withdrawl", amount: rand(9999), date: Faker::Date.between(from: '2022-01-23', to: '2022-08-20'), checking_id: rand(10), saving_id: nil)
    Transaction.create(name: "Deposit", location: "ATM", category: "Deposit", amount: rand(99999), date: Faker::Date.between(from: '2022-01-23', to: '2022-08-20'), checking_id: nil, saving_id: rand(10))
    Transaction.create(name: "Transfer to Savings", location: "Internal", category: "Tansfer", amount: rand(9999), date: Faker::Date.between(from: '2022-01-23', to: '2022-08-20'), checking_id: rand(10), saving_id: nil)
    Transaction.create(name: "Transfer to Checking", location: "Internal", category: "Transfer", amount: rand(9999), date: Faker::Date.between(from: '2022-01-23', to: '2022-08-20'), checking_id: nil, saving_id: rand(10))
a += 1
end
