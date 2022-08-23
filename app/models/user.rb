class User < ApplicationRecord
    has_many :checkings
    has_many :savings
    has_many :transactions, :through => :checkings
    has_many :transactions, :through => :savings

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
