class CreateEstados < ActiveRecord::Migration
  def change
    create_table :estados do |t|
      t.string :UF
      t.string :nome

      t.timestamps
    end
  end
end