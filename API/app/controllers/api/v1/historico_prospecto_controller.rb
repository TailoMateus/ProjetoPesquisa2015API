class API::V1::HistoricoProspectoController < ApplicationController
  #before_action :authenticate_usuario!
  def index
    @historico_prospectos = HistoricoProspecto.all

    render json: @historico_prospectos if stale?(etag: @historico_prospectos.all, last_modified: @historico_prospectos.maximum(:updated_at))
  end

  def show
    render json: @historico_prospecto if stale?(@historico_prospecto)
  end

  def create
    @historico_prospecto = HistoricoProspecto.new(historico_prospecto_params)

    if @historico_prospecto.save
      render json: @historico_prospecto, status: :created
    else
      render json: @historico_prospecto.errors, status: :unprocessable_entity
    end
  end

  def update
    if @historico_prospecto.update(historico_prospecto_params)
      head :no_content
    else
      render json: @historico_prospecto.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @historico_prospecto.destroy

    head :no_content
  end

  def carregarIdHistorico
    @historico_prospecto = HistoricoProspecto.select("*").joins("left join situacaos on 
      (historico_prospectos.situacao_id = situacaos.id)").where(prospecto_id: params[:prospecto_id]);

    render json: @historico_prospecto if stale?(@historico_prospecto)
  end

  private
    def historico_prospecto_params
      params.permit(:descricao, :situacao_id, :prospecto_id, :data)
    end
end