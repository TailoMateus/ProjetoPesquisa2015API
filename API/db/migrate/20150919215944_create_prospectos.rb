class CreateProspectos < ActiveRecord::Migration
  def change
    create_table :prospectos do |t|
      t.string :nome
      t.string :empresa
      t.string :telefone
      t.string :email
      t.string :cidade
      t.string :social

      t.references :estado
      t.references :situacao
      
      t.timestamps null: true
    end
  end
end
