class API::V1::ProspectoController < ApplicationController
  #before_action :authenticate_usuario!

  def index
    @prospectos = Prospecto.select('situacaos.id as idsituacao, situacaos.nome as nomesituacao, prospectos.*').joins('left join situacaos on 
      situacaos.id = prospectos.situacao_id').all

    render json: @prospectos if stale?(@prospectos)
  end

  def ultimo
    @prospectos = Prospecto.select("situacaos.id as idsituacao, situacaos.nome as nomesituacao, prospectos.*").joins("left join situacaos on 
      situacaos.id = prospectos.situacao_id").last

    render json: @prospectos if stale?(@prospectos)
  end

  def show
    render json: @prospecto if stale?(@prospecto)
  end

  def create
    @prospecto = Prospecto.new(prospecto_params)

    if @prospecto.save
      render json: @prospecto, status: :created
    else
      render json: @prospecto.errors, status: :unprocessable_entity
    end
  end

  def update
    @prospecto = Prospecto.find(params[:id])

    if @prospecto.update_attributes(prospecto_params)
      render json: @prospecto
    else
      render json: @prospecto.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @prospecto.destroy

    head :no_content
  end

  private
    def prospecto_params
      params.permit(:nome, :empresa, :telefone, :email, :cidade, :estado_id, 
      :social, :situacao_id)
    end
end
