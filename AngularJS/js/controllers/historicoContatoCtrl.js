app.controller('historicoContatoCtrl', ['$scope', 'historicoProspectosAPI', 'prospectosAPI', '$rootScope',
  function($scope, historicoProspectosAPI, prospectosAPI, $rootScope) {

  $scope.esconderHistoricoContato = true;
  $scope.esconderDescricaoHistoricoContato = true;
  $scope.esconderComponentesHistoricoContato = true;
  $scope.historicoProspectos = [];
  $scope.historicoProspecto = {}; 
  $scope.situacaos = []; 

  $scope.prospectoselecionado = {};
  $scope.prospectos = [];
  $scope.alerts = [];

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  var carregarSituacao = function () {
    historicoProspectosAPI.getSituacao().then( function( situacaos ) {
      preencherSituacao( situacaos );
    });
  }

  $scope.carregarProspectos = function() {
    $scope.nomeProspecto = $rootScope.globalProspecto;
    $scope.prospectoselecionado.selected = $scope.nomeProspecto;
    prospectosAPI.getProspecto().then( function( prospectos ) {
      preencherProspecto( prospectos );
    });
  }

  function preencherProspecto( prospectos ) {
    $scope.prospectos = prospectos.prospecto;
  }

  function preencherSituacao( situacaos ) {
    $scope.situacaos = situacaos.situacao;
  }

  $scope.carregarHistorico = function(){
    if($scope.prospectoselecionado.selected){
      historicoProspectosAPI.getHistoricoProspectoId($scope.prospectoselecionado.selected.id).then( function( historicoProspectos ) {
        preencherHistoricoProspecto( historicoProspectos );
      });
    }
  }

  $scope.saveHistoricoProspecto = function() {
    $scope.prospectoselecionado.selected.situacao_id = $scope.historicoProspecto.situacao_id;

    $scope.historicoProspecto.prospecto_id = $scope.prospectoselecionado.selected.id;
    historicoProspectosAPI.saveHistoricoProspecto( $scope.historicoProspecto ).then(
      $scope.carregarHistorico,
      function( errorMessage ) {
        $scope.errors = errorMessage;
      }
    );
    $scope.historicoProspecto = {};

    $scope.alerts = [ 
      { type: 'success', msg: 'Registro gravado com sucesso.' }
    ];
  };

  $scope.editProspecto = function( prospecto ) {

    prospectosAPI.editProspecto( prospecto ).then( 
      function( errorMessage ) {
        $scope.errors = errorMessage;
      }
    );
  }
  
  function carregarhistoricoProspectos() {
    historicoProspectosAPI.getHistoricoProspecto().then( function( historicoProspectos ) {
      preencherHistoricoProspecto( historicoProspectos );
    });
  }

  function preencherHistoricoProspecto( historicoProspectos ) {
    $scope.historicoProspectos = historicoProspectos.historico_prospecto;
  }
  
  carregarSituacao();
}]);
