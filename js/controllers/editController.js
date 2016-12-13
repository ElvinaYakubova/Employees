user.controller("editController", function editController($scope, $location, dataFactory, $stateParams, $q) {
    $scope.id = $stateParams.id;
    
    $scope.editInf = angular.copy(dataFactory.getEmp($scope.id));

    $scope.editEmp = function(editInf, editForm) {
		if(editForm.$valid){
			toastr.success('Запись успешно обновлена');
			dataFactory.saveEmp($scope.id, editInf);
            $location.path('/main');
		}
		else toastr.error('Некорректные данные');
	};

	$scope.cancel = function() {
		toastr.warning('Изменения не сохранены')
		$location.path('/main');
	};
});
