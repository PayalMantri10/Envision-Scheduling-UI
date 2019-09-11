angular.module('app.timeline', [])

.component('timeline', {
    templateUrl: 'routes/timeline/timeline.html',
    controller: 'Timeline',
    controllerAs: 'vm',
    controller: function($scope, $rootRouter, doctorSchedule) {
        var vm = this;

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
            $rootRouter.navigate(['/Dashboard'])
        }

        $scope.routeToIndividualSchedule = function(name) {
            $rootRouter.navigate(['/Schedule'])
        }
        console.log(doctorSchedule)
        $scope.data = doctorSchedule.scheduleone;


        $scope.isAppointementScheduled = function(values, time) {

            return (values.findIndex(value => value.time.substring(11, 16) == time)) > -1
        }

    }


});