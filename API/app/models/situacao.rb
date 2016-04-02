class Situacao < ActiveRecord::Base
  has_many :historico_prospectos
  has_many :prospectos
end
