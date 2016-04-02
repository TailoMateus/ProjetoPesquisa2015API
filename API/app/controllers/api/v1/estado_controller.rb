class API::V1::EstadoController < ApplicationController
  #before_action :authenticate_usuario!
  def index
    @estados = Estado.all

    render json: @estados if stale?(etag: @estados.all, last_modified: @estados.maximum(:updated_at))
  end
end
