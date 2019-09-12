angular.module('myApp').controller('appointmentController', function($scope, $location) {

    $scope.doctor = {};
    $scope.doctor.name = "Sushmita";
    $scope.doctor.speciality = "MBBS, MD-Anaesthesiology";
    $scope.doctor.experience = 10;

    $scope.appointment = {};

    $scope.appointment.date = "08-08-2019 10:00am"
    $scope.appointment.place = "Operation Theatre"
    $scope.appointment.department = "Neuro Department"
    $scope.appointment.assignedBy = "Dr. Samir"

    $scope.close = function() {
        $location.path('/timeline')
    }

});