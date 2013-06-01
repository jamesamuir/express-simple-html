'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: './app/partials/home.html', controller: HomeCtrl});
    $routeProvider.when('/about', {templateUrl: './app/partials/about.html', controller: AboutCtrl});
    $routeProvider.when('/contact', {templateUrl: './app/partials/contact.html', controller: ContactCtrl});
    $routeProvider.when('/services', {templateUrl: './app/partials/services.html', controller: ServicesCtrl});
    $routeProvider.when('/gallery', {templateUrl: './app/partials/gallery.html', controller: GalleryCtrl});
    $routeProvider.when('/legal', {templateUrl: './app/partials/legal.html', controller: LegalCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
