angular.module('app.timeline', [])
    // .component('timelineHome', {
    //     template: '<h2>Timeline</h2><ng-outlet></ng-outlet>',
    //     $routeConfig: [
    //         { path: '/', name: 'Timeline', component: 'timeline', useAsDefault: true },
    //         { path: '/appointmentDetail', name: 'Appointment', component: 'about' }
    //     ]
    // })
    .component('timeline', {
        templateUrl: 'routes/timeline/timeline.html',
        controller: 'Timeline',
        controllerAs: 'vm',
        controller: function($scope) {
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



            $scope.schedulerConfig = {
                scale: "Day",
                days: new DayPilot.Date().daysInMonth(),
                startDate: new DayPilot.Date().firstDayOfMonth(),
                timeHeaders: [
                    { groupBy: "Month" },
                    { groupBy: "Day", format: "d" }
                ],
                treeEnabled: true,
                resources: [{
                        "id": "group_1",
                        "name": "People",
                        "expanded": true,
                        "children": [
                            { "id": "1", "name": "Person 1" },
                            { "id": "2", "name": "Person 2" },
                            { "id": "3", "name": "Person 3" },
                            { "id": "4", "name": "Person 4" },
                            { "id": "5", "name": "Person 5" },
                            { "id": "6", "name": "Person 6" },
                            { "id": "7", "name": "Person 7" },
                            { "id": "8", "name": "Person 8" },
                            { "id": "9", "name": "Person 9" }
                        ]
                    },
                    {
                        "id": "group_2",
                        "name": "Tools",
                        "expanded": true,
                        "children": [
                            { "id": "11", "name": "Tool 1" },
                            { "id": "12", "name": "Tool 2" },
                            { "id": "13", "name": "Tool 3" },
                            { "id": "14", "name": "Tool 4" },
                            { "id": "15", "name": "Tool 5" },
                            { "id": "16", "name": "Tool 6" },
                            { "id": "17", "name": "Tool 7" },
                            { "id": "18", "name": "Tool 8" },
                            { "id": "19", "name": "Tool 9" }
                        ]
                    }
                ],
                events: [{
                    "id": "12",
                    "text": "Event",
                    "start": "2019-09-09T00:00:00",
                    "end": "2019-09-10T00:00:00",
                    "resource": "3"
                }]
            };

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