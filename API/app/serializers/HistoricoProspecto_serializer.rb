class HistoricoProspectoSerializer < ActiveModel::Serializer
  attributes :id, :descricao, :situacao_id, :prospecto_id
end