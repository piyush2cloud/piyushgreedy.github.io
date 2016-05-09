var app = angular.module("quintify", ['quintify.controllers', 'angular-timeline', 'angular-scroll-animate', 'angular-flippy']);


app.directive("scroll", function ($window) {
    return function (scope, element, attrs) {

        angular.element($window).bind("scroll", function () {
            console.log(this.pageYOffset);
            if (this.pageYOffset <= 553) {
                scope.imagechangepath = 'images/f1.jpg';
            }

            if (this.pageYOffset >= 553) {
                scope.disappeardiv = 1;
                scope.appeardivdefault = 0;
            }

            if (this.pageYOffset >= 760 && this.pageYOffset <= 1077) {
                scope.imagechangepath = 'images/f2.png';

            }

            if (this.pageYOffset >= 1077 && this.pageYOffset <= 1817) {
                scope.imagechangepath = 'images/f3.jpg';


            }

            if (this.pageYOffset >= 1817 && this.pageYOffset <= 2937) {
                scope.imagechangepath = 'images/f4.jpg';

            }

            if (this.pageYOffset >= 2937 && this.pageYOffset <= 3457) {
                scope.imagechangepath = 'images/f5.png';
            }

            if (this.pageYOffset >= 3457 && this.pageYOffset <= 4297) {
                scope.imagechangepath = 'images/f6.png';
            }

            if (this.pageYOffset >= 4297) {
                scope.imagechangepath = 'images/f7.jpg';
            }

            scope.$apply();
        });
    };
});