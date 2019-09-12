var app = angular.module('myApp', [
    'angularMoment',
    'ngRoute',
    'app.templates',
    'app.404',
    'app'
])


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "routes/timeline/timeline.html",
            controller: "timelineController"
        })
        .when("/timeline", {
            templateUrl: "routes/timeline/timeline.html",
            controller: "timelineController"
        })
        .when("/appointment", {
            templateUrl: "routes/appointments/appointmentDetail.html",
            controller: "appointmentController"
        })
        .when("/schedule", {
            templateUrl: "routes/individualSchedule/schedule.html",
            controller: "scheduleController"
        });

    $locationProvider.html5Mode(true);
});