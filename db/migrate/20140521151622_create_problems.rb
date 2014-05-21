class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.string :name
      t.text :description
      t.boolean :public
      t.integer :user_id

      t.timestamps
    end
  end
end
