app.controller('cadastroCompletoCtrl', ['$scope', 'cadastroCompletoAPI', 'estadosAPI', '$rootScope',
  function($scope, cadastroCompletoAPI, estadosAPI, $rootScope) {
  
  $scope.esconderCadastroCompleto = true;
  $scope.cadastroCompleto = {}; 
  $scope.cadastroCompletos = [];  
  $scope.estados = [];
  $scope.alerts = [];

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.carregarProspectos = function() {
    $scope.nomeProspecto = $rootScope.globalProspecto;
  }

  $scope.saveCadastroCompleto = function() {
    $scope.cadastroCompleto.prospecto_id = $scope.nomeProspecto.id;
    
    cadastroCompletoAPI.saveCadastroCompleto( $scope.cadastroCompleto ).then(
      carregarCadastroCompleto,
      function( errorMessage ) {
        $scope.errors = errorMessage;
      }
    );
    $scope.cadastroCompleto = {}; 

    $scope.alerts = [ 
      { type: 'success', msg: 'Registro gravado com sucesso.' }
    ];
  };
  
  function carregarCadastroCompleto() {
    cadastroCompletoAPI.getCadastroCompleto().then( function( cadastroCompletos ) {
      preencherCadastroCompleto( cadastroCompletos );
    });
  }

  function preencherCadastroCompleto( cadastroCompletos ) {
    $scope.cadastroCompletos = cadastroCompletos;
  }

  var carregarEstados = function () {
    estadosAPI.getEstados().then( function( estados ) {
      preencherEstados( estados );
    });
  }

  function preencherEstados( estados ) {
    $scope.estados = estados.estado;
  }

  carregarEstados();
}]);
