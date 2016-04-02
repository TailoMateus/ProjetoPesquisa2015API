class CreateCadastroCompletoProspectos < ActiveRecord::Migration
  def change
    create_table :cadastro_completo_prospectos do |t|

		  t.string :nomefantasia
		  t.string :razaosocial
		  t.string :cnpj
		  t.string :ie
		  t.string :municipio
		  t.string :rua
		  t.string :bairro
		  t.string :complemento
		  t.string :cep
		  t.string :telefone

		  t.references :prospecto
		  t.references :estado

      t.timestamps null: false
    end
  end
end
