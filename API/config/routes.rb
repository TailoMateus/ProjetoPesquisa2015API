Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'Usuario', at: 'auth'

  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resource :usuarios

      get     "/prospecto",     to: "prospecto#index"
      get     "/ultimoProspecto",     to: "prospecto#ultimo"
      post    "/saveProspecto",     to: "prospecto#create"
      get     "/prospecto/:id", to: "prospecto#show"
      put     "/editProspecto/:id", to: "prospecto#update"
      delete  "/prospecto/:id", to: "prospecto#destroy"

      get     "/historicoprospecto",     to: "historico_prospecto#index"
      post    "/saveHistoricoProspecto",     to: "historico_prospecto#create"
      get     "/historicoprospecto/:id", to: "historico_prospecto#show"
      get     "/carregarIdHistorico/:prospecto_id", to: "historico_prospecto#carregarIdHistorico"
      put     "/historicoprospecto/:id", to: "historico_prospecto#update"
      delete  "/historicoprospecto/:id", to: "historico_prospecto#destroy"

      get "/estado", to: "estado#index"

      get "/situacao", to: "situacao#index"

      get "/usuario", to: "usuario#index"

      get "/cadastro_completo_prospecto",  to: "cadastro_completo_prospecto#index"
      post    "/saveCadastroCompleto",     to: "cadastro_completo_prospecto#create"
      get     "/cadastro_completo_prospecto/:id", to: "cadastro_completo_prospecto#show"
      put     "/cadastro_completo_prospecto/:id", to: "cadastro_completo_prospecto#update"
      delete  "/cadastro_completo_prospecto/:id", to: "cadastro_completo_prospecto#destroy"
    end
  end
end
