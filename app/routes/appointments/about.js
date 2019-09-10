angular.module('app.about', []).component('about', {
    templateUrl: 'routes/appointments/appointmentDetail.html',
    controller: function($scope, $rootRouter) {
        var vm = this;

        vm.$routerOnActivate = function(toRoute, fromRoute) {
            $scope.doctor = {};
            $scope.doctor.name = "Sushmita";
            $scope.doctor.speciality = "MBBS, MD-Anaesthesiology";
            $scope.doctor.experience = 10;

            $scope.appointment = {};

            $scope.appointment.date = "08-08-2019 10:00am"
            $scope.appointment.place = "Operation Theatre"
            $scope.appointment.department = "Neuro Department"
            $scope.appointment.assignedBy = "Dr. Samir"
        };

        $scope.close = function() {
            console.log('Hello close called')
            $rootRouter.navigate(['/Timeline'])
        }

    }
});