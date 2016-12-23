user.controller("addController", function addController($scope, $location, dataFactory) {

	$scope.maleProf = dataFactory.prof.Male;
    $scope.femaleProf = dataFactory.prof.Female;
	
	$scope.addEmp = function(addInf, addForm) {
		if(addForm.$valid){
			toastr.success('Запись успешно добавлена');
			dataFactory.addEmp(addInf);
			$location.path('/main');
		}
	};
	// $scope.addProf = function(addProf, addProfForm) {
	// 	if(addProfForm.$valid) {
	// 		toastr.success('Запись успешно добавлена');
	// 		dataFactory.addProf(addProf);
	// 		$location.path('/main');
	// 	}
	// }

});


