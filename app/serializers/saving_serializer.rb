class SavingSerializer < ActiveModel::Serializer
  attributes :id, :available_balance, :current_balance, :account_number, :transactions

  belongs_to :user
  has_many :transactions
end
