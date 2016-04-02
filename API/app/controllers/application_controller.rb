class ApplicationController < ActionController::API
  include ActionController::Serialization

  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers
  before_action :configure_permitted_parameters, if: :devise_controller?

  rescue_from Exception do |error|
    error(error)
  end

  def cors_preflight_check
    if request.method == 'OPTIONS'
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version, Token'
      headers['Access-Control-Max-Age'] = '1728000'
      render :text => '', :content_type => 'text/plain'
    end
  end

  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    headers['Access-Control-Max-Age'] = "1728000"
  end

  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  def routing_error
    raise ActionController::RoutingError.new(params[:path])
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :nome
    devise_parameter_sanitizer.for(:sign_up) << :funcao
  end

  def error(error)
    if env["ORIGINAL_FULLPATH"] =~ /^\/api/
    error_info = {
      :error => :internal_server_error,
      :exception => "#{error.class.name} : #{error.message}",
    }
    error_info[:trace] = error.backtrace[0,10] if Rails.env.development?
    render :json => error_info, :status => :internal_server_error
    else
      raise e
    end
  end

  def record_not_found(error)
    render :json => {:error => error.message}, :status => :not_found
  end
end
