app.service("cadastroCompletoAPI", function ($http, $q){

	function saveCadastroCompleto( cadastroCompleto ) {            
    var request = $http({
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      url: "http://localhost:3000/api/v1/saveCadastroCompleto",
      data: cadastroCompleto
    });
    return( request.then( handleSuccess, handleError ) );
  }

  function getCadastroCompleto() {
    var request = $http({
      method: "get",
      url: "http://localhost:3000/api/v1/cadastro_completo_prospecto"
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

	return{
    getCadastroCompleto: getCadastroCompleto,
  	saveCadastroCompleto: saveCadastroCompleto
  };
});