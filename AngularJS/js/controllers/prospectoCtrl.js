app.controller('prospectoCtrl', ['$scope', '$http', '$interval', 'dateFilter', 'prospectosAPI', 'estadosAPI', '$rootScope', 
  function($scope, $http, $interval, dateFilter, prospectosAPI, estadosAPI, $rootScope) {

  $scope.dataAtual = dateFilter(new Date(), 'dd MMMM');
  $scope.esconderCadastroBasico = true;
  $scope.estados = [];
  $scope.prospectos = [];
  $scope.prospecto = {};  
  $scope.alerts = [];

  carregarProspectos();

  $scope.selecionarIconesSocialFacebook = true;
  $scope.selecionarIconesSocialInstagram = true;
  $scope.selecionarIconesSocialSkype = true;
  $scope.selecionarIconesSocialYoutube = true;
  $scope.selecionarIconesSocialLinkedin = true;

  //$scope.maskTelefone = '(99) 9999-9999';
  
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.saveProspecto = function() {

    prospectosAPI.saveProspecto( $scope.prospecto ).then(
      carregarProspectos,
      function( errorMessage ) {
        $scope.errors = errorMessage;
      }
    );
    $scope.prospecto = {};

    $scope.alerts = [ 
      { type: 'success', msg: 'Registro gravado com sucesso.' }
    ];
  };
  
  function carregarProspectos() {
    prospectosAPI.getUltimoProspecto().then( function( prospectos ) {
      preencherProspecto( prospectos );
    });
  }

  function preencherProspecto( prospectos ) {
    $scope.prospectos = prospectos;
    $rootScope.globalProspecto = $scope.prospectos;
  }

  var carregarEstados = function () {
    estadosAPI.getEstados().then( function( estados ) {
      preencherEstados( estados );
    });
  }

  function preencherEstados( estados ) {
    $scope.estados = estados.estado;
  }

  var carregarUsuarios = function () {
    prospectosAPI.getUsuarios().then( function( usuarios ) {
      preencherUsuarios( usuarios );
    });
  }

  function preencherUsuarios( usuarios ) {
    $scope.usuarios = usuarios;
  }
  
  carregarEstados();
  carregarUsuarios();
}]);
