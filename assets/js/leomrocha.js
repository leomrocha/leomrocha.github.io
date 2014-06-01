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
mainApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/aboutme.html',
            controller: 'aboutController'
        })
        .when('/about', {
            templateUrl: 'pages/aboutme.html',
            controller: 'aboutController'
        })
        .when('/blog', {
            templateUrl: 'pages/blog.html',
            controller: 'blogController'
        })
        .when('/music', {
            templateUrl: 'pages/music.html',
            controller: 'musicController'
        })
        .when('/projects', {
            templateUrl: 'pages/projects.html',
            controller: 'projectsController'
        })
    
});

////////////////////////////////////////////////////////////////////////////////
// CONTROLLERS
////////////////////////////////////////////////////////////////////////////////
/*mainApp.controller("menuHandler", function($scope){

    $scope.pages = {"aboutme": "aboutme",
                    "music": "music/main",
                    "blog": "blog/main",
                    "projects": "projects/main"
                    };

    $scope.selectedPage = "aboutme";
    
    $scope.setSelectedPage = function(selection){
        console.log("Clicking "+ selection);
        $scope.selectedPage = $scope.pages[selection];
    };
});*/

mainApp.controller("aboutController", function($scope){
    //TODO
});

mainApp.controller("blogController", function($scope){
    //TODO
});

mainApp.controller("musicController", function($scope){
    //TODO
});

mainApp.controller("projectsController", function($scope){
    //TODO
});

