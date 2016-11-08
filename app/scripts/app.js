var app = window.angular.module('app', ['flow'])
.config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        target: '/upload',
        permanentErrors:[404, 500, 501],
        minFileSize: 0
    };
    // You can also set default events: 
    flowFactoryProvider.on('catchAll', function (event) {
      console.log("caught an event");
    });
    // Can be used with different implementations of Flow.js 
    // flowFactoryProvider.factory = fustyFlowFactory; 
}]);