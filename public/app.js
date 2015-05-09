var app = angular.module('ecommerce', ['ngRoute'])

app.config(function($httpProvider, $routeProvider){
  
  $routeProvider
  .when('/', {
  	templateUrl: 'views/mainContent.html',
  	controller: 'mainCtrl'
  })

  .when('/products', {
  	templateUrl: 'views/allProductsView.html', 
  	controller: 'ProductsCtrl'
  })

  .when('/product/:id', {
  	templateUrl: 'views/singleProductView.html', 
  	controller: 'SingleProductCtrl'
  })

  .when('/login', {
  	templateUrl: 'views/loginView.html',
  	controller: 'LoginCtrl'
  })

});