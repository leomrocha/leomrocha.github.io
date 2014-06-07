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

mainApp.directive('markdown', function (){
    //console.log("evaluating markdown");
    var converter = new Showdown.converter();
    return {
        restrict: 'AEC',
        link: function (scope, element, attrs) {
        //console.log("evaluating markdown 2");
		var htmlText = converter.makeHtml(element.text() || '');
		element.html(htmlText);
        }
    };
});

mainApp.directive('vextab', function($compile){
    //console.log("rendering vextab");
    var canvas = document.createElement('canvas');

    renderer = new Vex.Flow.Renderer( canvas,
                  //Vex.Flow.Renderer.Backends.SVG);
                  Vex.Flow.Renderer.Backends.CANVAS);
    artist = new Vex.Flow.Artist(10, 10, 800, {scale: 0.8});
    if (Vex.Flow.Player) {
        opts = {};
        //if (options) opts.soundfont_url = options.soundfont_url;
        player = new Vex.Flow.Player(artist, opts);
    }
    vextab = new Vex.Flow.VexTab(artist);
    return{
        restrict: 'E',
        link: function(scope, element, attrs){
                try {
                    vextab.reset();
                    artist.reset();
                    vextab.parse(element.text());
                    artist.render(renderer);
                    console.log("artist = ", artist);
                }
                catch (e) {
                    console.log("Error");
                    console.log(e);
                }
                
         //element.appendChild(canvas);
         $compile(canvas)(scope);
         //element.append(canvas);
         //element.htmlText(canvas);
         element.replaceWith(canvas);
         //console.log("vextab processing");
        }
    }
});

mainApp.directive('vexchord', function($compile){
    //console.log("rendering vextab");
    return{
        restrict: 'E',
        link: function(scope, element, attrs){
            //console.log("attributes = ",attrs);
            //console.log(attrs.key);
            //console.log(attrs.string);
            //console.log(attrs.shape);
             var el = createChordElement(createChordStruct(attrs.key, attrs.string, attrs.shape));
             $compile(el)(scope);
             element.replaceWith(el);
             //console.log("finish vexchord processing");
        }
    }
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
                var path = '/pages/'+$routeParams.section+'.html';
                //console.log("generating path section = ", path);
                return path;
            },
            controller: 'pageController'
        })
        .when('/:section/:post', {
            templateUrl: 'pages/blog_post.html',
            //TODO change the following function for the previous one. Add more generic post handling
            //templateUrl: function($routeParams){
            //    //console.log("route params = ", $routeParams);
            //    var path = '/posts/'+$routeParams.section+'/'+$routeParams.post+'.html';
            //    //console.log("creating path = ", path);
            //    return path;
            //},
            controller: 'pageController'
            //controller: function($routeParams){
            //    console.log("controller = ", ctrl);
            //    var ctrl =  $routeParams.section+'Controller';
            //    return ctrl;
            //}
        });
    
    // use HTML5 history API
    //I don't want to have pretty URLs if it avoids direct linking
    //so I take this out
    //$locationProvider.html5Mode(true);
    
});

////////////////////////////////////////////////////////////////////////////////
// CONTROLLERS
////////////////////////////////////////////////////////////////////////////////


mainApp.controller("pageController", function($scope, $http, $route, $routeParams, $location){
    //console.log("starting controller page");
    $scope.section = $route.current.params.section;
    $scope.post = $route.current.params.post; //only will be used if exists
    
    //console.log("route = ", $route.current.params);
    
    //load posts index from json file ... FUTURE replace for somethign better
    $http.get('meta/index.json')
       .then(function(res){
          $scope.posts = res.data;
          //console.log("obtained data = ", res.data);
        });
    
    $scope.go = function ( path ) {
      $location.path( path );
    };
    
});

mainApp.controller("blogController", function($scope, $http, $route, $routeParams){

});


