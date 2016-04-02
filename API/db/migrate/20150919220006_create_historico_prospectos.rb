class CreateHistoricoProspectos < ActiveRecord::Migration
  def change
    create_table :historico_prospectos do |t|
      t.string :descricao
      t.string :data
      
      t.references :prospecto
      t.references :situacao
    
      t.timestamps null: false
    end
  end
end