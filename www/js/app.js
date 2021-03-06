// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'SearchController'
    })

    $stateProvider.state('search', {
        url: '/results',
        templateUrl: 'templates/results.html',
        controller: 'ResultsController'
    })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});

app.controller('SearchController', function($scope, $http) {
    $scope.getPrice = function() {
        var price = $scope.price;

        if (price){
            $http.post('http://www.google.com').
              success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                console.log('success');
              }).
              error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }

    }


})
app.controller('ResultsController', ['$scope', function($scope) {
    $scope.master = "these are the results";
}]);
