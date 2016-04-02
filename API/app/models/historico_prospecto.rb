class HistoricoProspecto < ActiveRecord::Base
  belongs_to :situacao
  belongs_to :prospecto
end
