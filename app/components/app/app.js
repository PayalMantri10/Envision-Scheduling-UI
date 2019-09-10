var app = angular.module('myApp', [
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
        { path: '/', component: 'schedule', name: 'Schedule' },
        { path: '/Timeline', component: 'timeline', name: 'Timeline' },
        { path: '/Dashboard', component: 'about', name: 'Dashboard' },
        { path: '/**', component: 'notfound', name: 'NotFound' }
    ]
});