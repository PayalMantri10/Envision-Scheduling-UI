angular.module('myApp').directive('navBar', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/navbar/navbar.html',
        controller: function() {
            $(document).ready(function() {

                $(function() {
                    $('li a').click(function(e) {
                        $('a').removeClass('active');
                        $(this).addClass('active');
                    });
                });

            });
        }
    };
});