app.controller("loginCtrl", function ($scope, loginAPI) {

  $scope.login = {};	
  $scope.logins = [];

  $scope.verificarLogin = function() {

    loginAPI.verificarLogin( $scope.login ).then( function( logins ) {
      $scope.logins = logins;

      if(logins){
        window.location = "prospectoPrincipal.html"
      } else {
        console.log("Login Inválido");
      }


      },
      function( errorMessage ) {
        $scope.errors = errorMessage;
      }
    );
  };
});
