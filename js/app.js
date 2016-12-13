var user = angular.module('user', ['ui.router', 'ngMessages'])
    .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html',
            controller:'mainController'
        })
        .state('add', {
            url: '/add',
            templateUrl: 'views/add.html',
            controller: 'addController'
        })
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'views/edit.html',
            controller:'editController'
        });
        $urlRouterProvider.otherwise('/main');
});
