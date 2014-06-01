var mainApp = angular.module("LeoSite", ["ngRoute"]);

////////////////////////////////////////////////////////////////////////////////
// DIRECTIVES
////////////////////////////////////////////////////////////////////////////////
/**
 * AngularJS has a problem with src element in object tags
 * here is a fix found at:
 * https://github.com/angular/angular.js/issues/339#issuecomment-19384664
 */
mainApp.directive('embedSrc', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var current = element;
      scope.$watch(function() { return attrs.embedSrc; }, function () {
        var clone = element
                      .clone()
                      .attr('src', attrs.embedSrc);
        current.replaceWith(clone);
        current = clone;
      });
    }
  };
});


////////////////////////////////////////////////////////////////////////////////
// VIEWS
////////////////////////////////////////////////////////////////////////////////
mainApp.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/aboutme.html',
        })
        .when('/about',{redirectTo: '/'})
        .when('/:section', {
            templateUrl: function($routeParams){
                return '/pages/'+$routeParams.section+'.html';
            },
            controller: 'pageController'
        })
        .when('/:section/:post', {
            templateUrl: 'pages/blog_post.html',
            controller: 'blogController'
        });
    
    // use HTML5 history API
    //I don't want to have pretty URLs if it avoids direct linking
    //so I take this out
    //$locationProvider.html5Mode(true);
    
});

////////////////////////////////////////////////////////////////////////////////
// CONTROLLERS
////////////////////////////////////////////////////////////////////////////////


mainApp.controller("pageController", function($scope, $http, $route, $routeParams){

    
});

mainApp.controller("blogController", function($scope, $http, $route, $routeParams){
    //TODO
});


