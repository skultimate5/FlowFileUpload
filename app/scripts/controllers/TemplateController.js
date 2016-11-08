window.angular.module('app').controller('TemplateController', ['$scope', 'TemplateService', function ($scope, TemplateService) {
	
	TemplateService.getSomeData()
	.success(function(data){
		$scope.text = data[0].title;
	})
	.error(function(error){
		console.log(error);
	})

	$scope.$on('flow::fileAdded', function (event, $flow, flowFile) {
		console.log($flow);
		console.log(flowFile);
	  event.preventDefault();//prevent file from uploading 
	});
}]);