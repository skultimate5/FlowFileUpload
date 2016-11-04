window.angular.module('app').service('TemplateService', [ '$http', function ($http) {
	var templateService = {};

	templateService.getSomeData = function(){
		return $http.get('http://jsonplaceholder.typicode.com/photos');
	}

	return templateService;
}]);