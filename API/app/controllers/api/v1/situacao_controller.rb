class API::V1::SituacaoController < ApplicationController
  #before_action :authenticate_usuario!
  def index
    @situacoes = Situacao.all

    render json: @situacoes
  end
end
