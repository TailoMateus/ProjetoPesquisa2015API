app.controller('menuCriacaoCtrl', function ($scope, $modal, $log) {
  $scope.dt = null;

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);

  $scope.getDayClass = function(date, mode) {
	  if($scope.dt != null){
	    open();
	    $scope.dt = null;
    }
  
    return '';
  };
  
  $scope.items = ['item1', 'item2', 'item3'];

  var open = function () {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        },
		
		      dt: function(){
			      return $scope.dt;
		      }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, dt) {

  $scope.dt = dt;
  $scope.items = items;
  
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});