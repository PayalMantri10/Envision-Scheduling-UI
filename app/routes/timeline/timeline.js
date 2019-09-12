angular.module('myApp').controller('timelineController', function($scope, $location, doctorSchedule) {

    let items = [];
    $scope.departments = [
        "Anasthesiology",
        "Operations",
        "Radiology"
    ]

    $scope.selectedDepartment = $scope.departments[0];

    $scope.setDepartment = function(value) {
        $scope.selectedDepartment = value;
    }
    for (var hour = 9; hour < 15; hour++) {
        items.push([hour, 0]);
        items.push([hour, 30]);
    }

    var date = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    });

    $scope.range = items.map(time => {
        const [hour, minute] = time;
        date.setHours(hour);
        date.setMinutes(minute);

        return formatter.format(date);
    });


    $scope.routeToDetail = function(name) {
        $location.path('/appointment');
    }

    $scope.routeToIndividualSchedule = function(name) {
        $location.path('/schedule');
    }
    console.log(doctorSchedule)
    $scope.data = doctorSchedule.scheduleone;


    $scope.isAppointementScheduled = function(values, time) {
        if (values)
            return (values.findIndex(value => value.time.substring(11, 16) == time)) > -1;
        else
            return false
    }
});