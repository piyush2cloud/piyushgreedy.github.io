var mainApp = angular.module("poolin", ['poolin.controllers', 'duScroll','ngDialog','ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

        when('/splash', {
            templateUrl: 'splash.html',
            controller: 'splashCtrl'
        }).

        when('/main', {
            templateUrl: 'main.html',
            controller: 'myCtrl'
        }).

        otherwise({
            redirectTo: '/splash'
        });
}]);

mainApp.run(function($rootScope) {
    $rootScope.mainbody = 0;
    $rootScope.splashbackground =1;
})

/* This is the directive used to check the scroll height of the screen dynamically */
mainApp.directive("scroll", function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {
            if (this.pageYOffset > 350) {

                scope.logozindexblue = 0;
                scope.logozindexwhite = 1;
                scope.changenavicon = 1;
                scope.changemyaccountcol = 1;
                scope.customnavbarshow = 1;
                scope.customnavbarhide = 0;

            }
            else {

                scope.logozindexblue = 1;
                scope.logozindexwhite = 0;
                scope.changenavicon = 0;
                scope.changemyaccountcol = 0;
                scope.customnavbarshow = 0;
                scope.customnavbarhide = 1;

            }

            if (this.pageYOffset > 130 & this.pageYOffset < 890) {
                scope.autoscrollmobile = 1;
            }
            else {
                scope.autoscrollmobile = 0;
            }
            scope.$apply();
        });
    };
});

mainApp.directive('myDirective', ['$window', function ($window) {
    return {
        link: link,
        restrict: 'E',
    };
    function link(scope, element, attrs) {
        scope.width = $window.innerWidth;
        angular.element($window).bind('resize', function () {
            scope.width = $window.innerWidth;
            if (scope.width > 993) {
                scope.showbrowsertrue = 1;
                scope.showmobiletrue = 0;
                scope.showseperatorsmall = 0;
                scope.showseperatorlarge = 1;
                scope.StopTimerPlay();
                scope.StopTimerSettle();
                scope.martop8 = 0;
                scope.mobiletextaligncenter = 0;
                scope.colcentered = 0;
            }
            else {
                scope.showseperatorsmall = 1;
                scope.showseperatorlarge = 0;
                scope.showbrowsertrue = 0;
                scope.showmobiletrue = 1;
                scope.martop8 = 1;
                scope.mobiletextaligncenter = 1;
                scope.colcentered = 1;
            }
            // manuall $digest required as resize event
            // is outside of angular
            scope.$digest();
        });
    }
}]);
