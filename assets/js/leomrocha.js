var mainApp = angular.module("LeoSite", []);

//.controller("ListController", function($scope, $http) {
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


mainApp.controller("MenuHandler", function($scope){

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
});
