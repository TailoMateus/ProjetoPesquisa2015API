app.service("historicoProspectosAPI", function ($http, $q){

	function getSituacao() {
    var request = $http({
      method: "get",
      url: "http://localhost:3000/api/v1/situacao"
    });
    return( request.then( handleSuccess, handleError ) );
  }
	
	function saveHistoricoProspecto( historicoProspecto ) { 
         
    var request = $http({
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      url: "http://localhost:3000/api/v1/saveHistoricoProspecto",
      data: historicoProspecto
    });
    return( request.then( handleSuccess, handleError ) );
  }

  function getHistoricoProspecto() {
    var request = $http({
      method: "get",
      url: "http://localhost:3000/api/v1/historicoprospecto"
    });
    return( request.then( handleSuccess, handleError ) );
  }

  function getHistoricoProspectoId( Id ) {
    var request = $http({
      method: "get",
      url: "http://localhost:3000/api/v1/carregarIdHistorico/" + Id
    });
    return( request.then( handleSuccess, handleError ) );
  }

  function handleError( response ) {

    if (! angular.isObject( response.data ) || ! response.data.message) {
      return( $q.reject( "An unknown error occurred." ) );
    }
    return( $q.reject( response.data.message ) );
  }

  function handleSuccess( response ) {
    return( response.data );
  }

	return({
		getSituacao: getSituacao,
		getHistoricoProspecto: getHistoricoProspecto,
    getHistoricoProspectoId: getHistoricoProspectoId,
		saveHistoricoProspecto: saveHistoricoProspecto
	});
});
