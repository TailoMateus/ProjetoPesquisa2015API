app.service("estadosAPI", function ($http, $q){

	function getEstados() {
    var request = $http({
      method: "get",
      url: "http://localhost:3000/api/v1/estado"
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
    getEstados: getEstados
  };
});