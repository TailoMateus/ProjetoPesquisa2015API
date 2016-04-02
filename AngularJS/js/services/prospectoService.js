app.service("prospectosAPI", function ($http, $q){

  function saveProspecto( prospecto ) {          
    var request = $http({
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      url: "http://localhost:3000/api/v1/saveProspecto",
      data: prospecto
    });
    return( request.then( handleSuccess, handleError ) );
  }

  function editProspecto( prospecto ) { 

    var request = $http({
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      url: "http://localhost:3000/api/v1/editProspecto/" + prospecto.selected.id,
      data: prospecto.selected
    });
    return( request.then( handleSuccess, handleError ) );
  }

  function getProspecto() {
    var request = $http({
      method: "get",
      url: "http://localhost:3000/api/v1/prospecto"
    });
    return( request.then( handleSuccess, handleError ) );
  }

  function getUltimoProspecto() {
    var request = $http({
      method: "get",
      url: "http://localhost:3000/api/v1/ultimoProspecto"
    });
    return( request.then( handleSuccess, handleError ) );
  }

  function getUsuarios() {
    var request = $http({
      method: "get",
      url: "http://localhost:3000/api/v1/usuario"
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
    getProspecto: getProspecto,
    getUltimoProspecto: getUltimoProspecto,
    getUsuarios: getUsuarios,
    editProspecto: editProspecto,
    saveProspecto: saveProspecto
  };
});
