// angular.module('app.schedule', []).component('schedule', {
//     templateUrl: 'routes/home/home.html',
//     controller: 'Home',
//     controllerAs: 'vm',
//     controller: function($scope) {
//         var vm = this;

//         vm.$routerOnActivate = function(toRoute, fromRoute) {
//             this.name = "Payal";
//         };
//     }
// });

angular.module('myApp').controller('homeController', function($scope) {
    $scope.name = "Payal";

});