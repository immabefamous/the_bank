class Transaction < ApplicationRecord
    belongs_to :checking
    belongs_to :saving
end
