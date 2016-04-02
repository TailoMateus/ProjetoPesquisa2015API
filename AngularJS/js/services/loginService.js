app.service("loginAPI", function ($http, $q){
	
  function verificarLogin( login ) {  

  	console.log(login);          
    var request = $http({
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      url: "http://localhost:3000/auth/sign_in",
      data: login
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
  	verificarLogin: verificarLogin
  };
});
