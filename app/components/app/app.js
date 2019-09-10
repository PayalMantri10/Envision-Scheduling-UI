var app = angular.module('myApp', [
    'angularMoment',
    'ngComponentRouter',
    'app.templates',
    'app.schedule',
    'app.navbar',
    'app.timeline',
    'app.about',
    'app.404',
    'daypilot',
])

app.value('$routerRootComponent', 'app');
app.component('app', {
    templateUrl: 'components/app/app.html',
    $routeConfig: [
        { path: '/', component: 'timeline', name: 'Home' },
        { path: '/Timeline', component: 'timeline', name: 'Timeline' },
        { path: '/Dashboard', component: 'about', name: 'Dashboard' },
        { path: '/Schedule', component: 'schedule', name: 'Schedule' },
        { path: '/**', component: 'notfound', name: 'NotFound' }
    ]
});