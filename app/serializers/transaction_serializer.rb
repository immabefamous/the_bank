class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :category, :amount, :date

  belongs_to :checking
  belongs_to :saving
end
