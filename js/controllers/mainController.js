user.controller("mainController", function ($scope, dataFactory, $q) {
    
    $scope.list = dataFactory.data;
	
    $scope.editEmp = function(emp) {
		$scope.emp = emp;
	};
    
    $scope.delEmp = function(emp) {
    	var r = confirm("Вы уверены?");
		if (r == true) {
            dataFactory.delEmp(emp);
        }
    };
 });

