myApp.factory('dataFactory', ['$http', '$q', function($http, $q) {
    
    var dataFactory = {}; 

    var obj = [];

    $http.get('data.json').success(function(data) {
        angular.merge(obj,data.employees);
    });  
    dataFactory.data = obj;

    dataFactory.getEmp = function(id) {
    	var res = -1;
    	for(var i = 0; i < dataFactory.data.length; i++) {
	        if (dataFactory.data[i].id == id) {
	            res = i;
	            break;
	        } 
	    }
		return dataFactory.data[res];
    }

    dataFactory.saveEmp = function(id, inf) {
        for(var i = 0; i < dataFactory.data.length; i++) {
            if (dataFactory.data[i].id == id) {
                dataFactory.data[i] = inf;
                break;
            } 
        }
    }

    dataFactory.addEmp = function(inf) {
       if (dataFactory.data.length != 0) inf.id = parseInt(dataFactory.data[dataFactory.data.length-1].id)+1;
	else inf.id = 1;
        dataFactory.data.push(inf);
    }

    dataFactory.delEmp = function(emp) {
        $res = dataFactory.data.indexOf(emp);
        dataFactory.data.splice($res,1);
    }

    
    return dataFactory;
}]);

