angular.module('myApp').component('navBar', {
    templateUrl: 'components/navbar/navbar.html',
    controllerAs: 'vm',
    controller: [function() {
        var vm = this;

        vm.logout = function() {
            $rootRouter.navigate(['/Home']);
        }
    }]
});