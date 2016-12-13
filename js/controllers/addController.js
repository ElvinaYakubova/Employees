user.controller("addController", function addController($scope, $location, dataFactory) {
	$scope.addEmp = function(addInf, addForm) {
		if(addForm.$valid){
			toastr.success('Запись успешно добавлена');
			dataFactory.addEmp(addInf);
			$location.path('/main');
		}
	}
});


