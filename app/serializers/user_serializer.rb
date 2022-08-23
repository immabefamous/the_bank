class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  has_many :checkings
  has_many :savings
end
