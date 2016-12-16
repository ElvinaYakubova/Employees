user.controller("mainController", function ($scope, dataFactory, $q, $filter, $sce) {
    
    $scope.list = dataFactory.data;
    $scope.sortType = 'name';
    $scope.sortReverse = false;

    $scope.currentPage = 0;
    $scope.empPerPage = 2;

    $scope.len = dataFactory.data.length;

    $scope.firstPage = function() {
        return $scope.currentPage == 0;
    };

    $scope.lastPage = function() {
        var lastPageNum = Math.ceil($scope.len/$scope.empPerPage - 1);
        return $scope.currentPage == lastPageNum;
    };

    $scope.cntOfPages = function() {
        if ($scope.len == 0) return 1;
        return Math.ceil($scope.len/$scope.empPerPage);
    };
	
    $scope.pageBack = function() {
        $scope.currentPage--;
    };

    $scope.pageNext =  function() {
        $scope.currentPage++;
    };

    $scope.updatePager = function() {
        var  filtered = $filter('filter')($scope.list, $scope.searchText);
        $scope.len = filtered.length;
        $scope.currentPage = 0;
    }

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

