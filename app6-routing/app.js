angular.module('app',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: './home/home.html',
        controller: 'homeCtrl'
      })
      .state('signup',{
        url: '/signup',
        templateUrl: './signup/signup.html',
        controller: 'signupCtrl'
      })
      .state('details',{
        url: '/details/:name',
        templateUrl: './details/details.html',
        controller: 'detailsCtrl'
      })

  });
