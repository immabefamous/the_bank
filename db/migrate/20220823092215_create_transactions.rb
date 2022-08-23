class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.text :name
      t.text :location
      t.text :category
      t.integer :amount
      t.date :date
      t.integer :checking_id
      t.integer :saving_id
      
      t.timestamps
    end
  end
end
