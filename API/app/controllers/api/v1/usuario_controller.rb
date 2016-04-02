class API::V1::UsuarioController < ApplicationController
  #before_action :authenticate_usuario!
  def index
    @usuarios = Usuario.all

    render json: @usuarios if stale?(etag: @usuarios.all, last_modified: @usuarios.maximum(:updated_at))
  end
end
