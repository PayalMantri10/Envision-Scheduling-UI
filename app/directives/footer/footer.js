angular.module('myApp').directive('customFooter', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/footer/footer.html',
        controller: function() {}
    };
});