angular.module('app.timeline', [])

.component('timeline', {
    templateUrl: 'routes/timeline/timeline.html',
    controller: 'Timeline',
    controllerAs: 'vm',
    controller: function($scope, $rootRouter) {
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
        $scope.data = {

            "values": [{
                    "name": "Sushmita",
                    "events": [{
                            "id": "12",
                            "text": "Event",
                            "time": "2019-09-09T12:00:00",
                            "end": "2019-09-10T12:30:00",
                            "isConfirmed": true
                        },
                        {
                            "id": "13",
                            "text": "Event",
                            "time": "2019-09-09T13:00:00",
                            "end": "2019-09-10T13:30:00",
                            "isConfirmed": false
                        }
                    ]
                },
                {
                    "name": "Pavan",
                    "events": [{
                            "id": "13",
                            "text": "Event",
                            "time": "2019-09-09T09:00:00",
                            "end": "2019-09-10T09:30:00",
                            "isConfirmed": false
                        },
                        {
                            "id": "14",
                            "text": "Event",
                            "time": "2019-09-09T11:00:00",
                            "end": "2019-09-10T11:30:00",
                            "isConfirmed": true
                        }
                    ]
                },
                {
                    "name": "Payal",
                },
                {
                    "name": "Swati Chauhan",
                    "events": [{
                            "id": "13",
                            "text": "Event",
                            "time": "2019-09-09T09:30:00",
                            "end": "2019-09-10T09:30:00",
                            "isConfirmed": false
                        },
                        {
                            "id": "14",
                            "text": "Event",
                            "time": "2019-09-09T11:30:00",
                            "end": "2019-09-10T12:30:00",
                            "isConfirmed": true
                        }
                    ]
                },
                {
                    "name": "Shriram",
                    "events": [{
                            "id": "13",
                            "text": "Event",
                            "time": "2019-09-09T10:00:00",
                            "end": "2019-09-10T10:30:00",
                            "isConfirmed": false
                        },
                        {
                            "id": "14",
                            "text": "Event",
                            "time": "2019-09-09T12:30:00",
                            "end": "2019-09-10T13:00:00",
                            "isConfirmed": true
                        }
                    ]
                },
                {
                    "name": "Vaishnu Dash",
                    "events": [{
                            "id": "13",
                            "text": "Event",
                            "time": "2019-09-09T13:00:00",
                            "end": "2019-09-10T13:30:00",
                            "isConfirmed": false
                        },
                        {
                            "id": "14",
                            "text": "Event",
                            "time": "2019-09-09T14:00:00",
                            "end": "2019-09-10T14:30:00",
                            "isConfirmed": true
                        }
                    ]
                },
                {
                    "name": "Pavan",
                    "events": [{
                            "id": "13",
                            "text": "Event",
                            "time": "2019-09-09T09:00:00",
                            "end": "2019-09-10T09:30:00",
                            "isConfirmed": false
                        },
                        {
                            "id": "14",
                            "text": "Event",
                            "time": "2019-09-09T11:00:00",
                            "end": "2019-09-10T11:30:00",
                            "isConfirmed": true
                        }
                    ]
                },

            ]

        }

        $scope.isAppointementScheduled = function(values, time) {

            return (values.findIndex(value => value.time.substring(11, 16) == time)) > -1
        }

    }


});