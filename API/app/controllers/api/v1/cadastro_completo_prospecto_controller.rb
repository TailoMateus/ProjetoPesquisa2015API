class API::V1::CadastroCompletoProspectoController < ApplicationController
  #before_action :authenticate_usuario!

  def index
    @cadastro_completo_prospectos = CadastroCompletoProspecto.all

    render json: @cadastro_completo_prospectos if stale?(etag: @cadastro_completo_prospectos.all, 
    	last_modified: @cadastro_completo_prospectos.maximum(:updated_at))
  end

  def show
    render json: @cadastro_completo_prospecto if stale?(@cadastro_completo_prospecto)
  end

  def create
    @cadastro_completo_prospecto = CadastroCompletoProspecto.new(cadastro_completo_prospecto_params)

    if @cadastro_completo_prospecto.save
      render json: @cadastro_completo_prospecto, status: :created
    else
      render json: @cadastro_completo_prospecto.errors, status: :unprocessable_entity
    end
  end

  def update
    if @cadastro_completo_prospecto.update(cadastro_completo_prospecto_params)
      head :no_content
    else
      render json: @cadastro_completo_prospecto.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @cadastro_completo_prospecto.destroy

    head :no_content
  end

  private
    def cadastro_completo_prospecto_params
      params.permit(:nomefantasia, :razaosocial, :cnpj, :ie, :municipio, :prospecto_id, 
      :estado_id, :rua, :bairro, :complemento, :cep, :telefone)
    end
end