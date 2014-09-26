'use strict';
//comment for changes
require('angular/angular');
require('angular-route');

var notesApp = angular.module('notesApp', ['ngRoute']);

require('./notes/controllers/notes-controller')(notesApp);
require('./notes/controllers/ta-controller')(notesApp);
require('./notes/controllers/select-controller')(notesApp);

notesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/notes', {
      templateUrl: 'views/notes/notes.html',
      controller: 'notesController'
    })
    .when('/select', {
      templateUrl: 'views/notes/select.html',
      controller: 'selectController'
    })
    .when('/ta', {
      templateUrl: 'views/notes/ta.html',
      controller: 'taController'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
