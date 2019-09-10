angular.module('app.schedule', [])

.component('schedule', {
    templateUrl: 'routes/individual schedule/schedule.html',
    controller: 'Schedule',
    controllerAs: 'vm',
    controller: function($scope, $rootRouter) {
        var vm = this;


        vm.$routerOnActivate = function(toRoute, fromRoute) {
            $scope.doctor = {};
            $scope.doctor.name = "Sushmita";
            $scope.doctor.speciality = "MBBS, MD-Anaesthesiology";
            $scope.doctor.experience = 10;
        };

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

        $scope.routeToDetail = function(name) {
            $rootRouter.navigate(['/Dashboard'])
        }

        $scope.doctorSchedule = {
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
                },
                {
                    "id": "15",
                    "text": "Event",
                    "time": "2019-09-10T10:30:00",
                    "end": "2019-09-10T11:00:00",
                    "isConfirmed": false
                },
                {
                    "id": "63",
                    "text": "Event",
                    "time": "2019-09-11T12:00:00",
                    "end": "2019-09-11T12:30:00",
                    "isConfirmed": false
                },
                {
                    "id": "16",
                    "text": "Event",
                    "time": "2019-09-10T12:30:00",
                    "end": "2019-09-10T13:00:00",
                    "isConfirmed": false
                },
                {
                    "id": "17",
                    "text": "Event",
                    "time": "2019-09-12T09:00:00",
                    "end": "2019-09-12T09:30:00",
                    "isConfirmed": false
                }


            ]
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

        $scope.isAppointementScheduled = function(values, time, date) {
            let datetime = date + "T" + time;
            return (values.findIndex(value => value.time.substring(0, 16) == datetime)) > -1
        }

        $scope.setTimeInterval = function(value) {
            $scope.selectedTimeInterval = value;
        }

    }


});