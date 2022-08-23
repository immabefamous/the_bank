class CreateSavings < ActiveRecord::Migration[7.0]
  def change
    create_table :savings do |t|
      t.integer :available_balance
      t.integer :current_balance
      t.integer :account_number
      t.integer :user_id

      t.timestamps
    end
  end
end
