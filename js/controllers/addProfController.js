profession.controller("addProfController", function addProfController($scope, $location, dataFactory) {

	$scope.maleProf = dataFactory.prof.Male;
    $scope.femaleProf = dataFactory.prof.Female;
	
	$scope.addProf = function(addProf, addProfForm) {
		if(addProfForm.$valid) {
			toastr.success('Запись успешно добавлена');
			dataFactory.addProf(addProf);
			$location.path('/main');
		}
	}

});


