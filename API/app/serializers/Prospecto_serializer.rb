class ProspectoSerializer < ActiveModel::Serializer
  attributes :id, :nome, :empresa, :telefone, :email, :cidade, :social, :estado_id, :situacao_id
  has_one :situacao, class_name: "Situacao"
end