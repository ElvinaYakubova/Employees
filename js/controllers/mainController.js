user.controller("mainController", function ($scope, dataFactory, $q) {
    
    $scope.list = dataFactory.data;
    $scope.sortType = 'name';
    $scope.sortReverse = false;

    $scope.currentPage = 0;
    $scope.empPerPage = 2;

    $scope.firstPage = function() {
        return $scope.currentPage == 0;
    };

    $scope.lastPage = function() {
        var lastPageNum = Math.ceil(dataFactory.data.length/$scope.empPerPage - 1);
        return $scope.currentPage == lastPageNum;
    };

    $scope.cntOfPages = function() {
        return Math.ceil(dataFactory.data.length/$scope.empPerPage);
    };
	
    $scope.pageBack = function() {
        $scope.currentPage--;
    };

    $scope.pageNext =  function() {
        $scope.currentPage++;
    };

    $scope.start = function() {
        return $scope.currentPage*$scope.empPerPage;
    };

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

