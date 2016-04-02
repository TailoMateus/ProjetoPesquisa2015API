class Prospecto < ActiveRecord::Base
  belongs_to :estado
  belongs_to :situacao

  has_many :cadastro_completo_prospectos
  has_many :historico_prospectos
end
