angular.module('myApp')

.controller('scheduleController', function($scope, $location, scheduleService) {
    var vm = this;
    $scope.doctor = {};
    $scope.doctor.name = "Sushmita";
    $scope.doctor.speciality = "MBBS, MD-Anaesthesiology";
    $scope.doctor.experience = 10;


    $scope.selectedTimeInterval = "Weekly";

    let items = [];
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



    $scope.week = []
    var curr = new Date();
    for (let i = 0; i < 7; i++) {
        let first = curr.getDate() - curr.getDay() + i
        let day = moment(new Date(curr.setDate(first))).format('YYYY-MM-DD')
        $scope.week.push(day)
    }
    $scope.selectedDayIndex = new Date().getDay();

    $scope.routeToDetail = function(name) {
        $location.path('/appointment');
    }

    $scope.doctorDetails = scheduleService.getSelectedDoctorSchedule();


    $scope.isAppointementScheduled = function(values, time, date) {
        let datetime = date + "T" + time;
        if (values)
            return (values.findIndex(value => value.time.substring(0, 16) == datetime)) > -1
        else
            return false;
    }

    $scope.setTimeInterval = function(value) {
        $scope.selectedTimeInterval = value;
    }
});