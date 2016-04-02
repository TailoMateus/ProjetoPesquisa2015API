class Status_Serializer < ActiveModel::Serializer
  attributes :id, :nome
  has_many :prospecto, class_name: "Prospecto"
end