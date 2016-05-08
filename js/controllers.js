angular.module('quintify.controllers', [])

    .controller("myCtrl", function ($scope, $timeout, $window) {




        $scope.imagechangepath = 'images/f1.jpg';

        $scope.animatelinechange = 0;
        $scope.onlinetesttextchange = 0;
        $scope.firstgifboxfade = 0;
        $scope.secondgifboxfade = 0;

        $scope.thirdgifboxfade = 0;
        $scope.fourgifboxfade = 0;
        $scope.fivegifboxfade = 0;
        $scope.sixgifboxfade = 0;
        $scope.sevengifboxfade = 0;
        $scope.eightgifboxfade = 0;
        $scope.onlyplacetolearnfade = 0;


        $timeout(function () {
            $scope.animatelinechange = 1;
        }, 1500);

        $timeout(function () {
            $scope.onlinetesttextchange = 1;
        }, 2500);

        $timeout(function () {
            $scope.firstgifboxfade = 1;
        }, 3500);

        $timeout(function () {
            $scope.secondgifboxfade = 1;
        }, 4500);

        $timeout(function () {
            $scope.thirdgifboxfade = 1;
        }, 5500);

        $timeout(function () {
            $scope.fourgifboxfade = 1;
        }, 6500);


        $timeout(function () {
            $scope.fivegifboxfade = 1;
        }, 7500);

        $timeout(function () {
            $scope.sixgifboxfade = 1;
        }, 8500);

        $timeout(function () {
            $scope.sevengifboxfade = 1;
        }, 9500);


        $timeout(function () {
            $scope.eightgifboxfade = 1;
            $scope.onlyplacetolearnfade = 1;

        }, 10500);


        $scope.animateElementIn = function ($el) {
            $el.removeClass('timeline-hidden');
            $el.addClass('bounce-in');
        };

        // optional: not mandatory (uses angular-scroll-animate)
        $scope.animateElementOut = function ($el) {
            $el.addClass('timeline-hidden');
            $el.removeClass('bounce-in');
        };

        $scope.events = [{
            badgeClass: 'danger',
            colorback: '#D9534F',
            badgeIconClass: 'glyphicon-check',
            title: 'In Depth Assessment',
            content: 'Learnign by experience is still one of the most effective ways to learn and retain a knowledge as it has experience to it. We prepare tests for both collective and individual assessment so that students can easily figure out their key to success..'
        },
            {
                badgeClass: 'success',
                colorback: '#3F903F',
                badgeIconClass: 'glyphicon glyphicon-pencil',
                title: 'Question and Answer based learning',
                content: 'Often evidences are a better solution than proof. When a concept is already hard to understand, its better to ask. Its better to answer what? why? how? In the answer lies the rub! '
            }, {
                badgeClass: 'primary',
                colorback: '#2E6DA4',
                badgeIconClass: 'glyphicon-credit-card',
                title: 'Frequently Updated Question Bank',
                content: 'Change is rule of life! So why same questions, why repetition. Face challenging new problems every day, hand crafted, brain stormed by our experts for those who seek study adventures! '
            }, {
                badgeClass: 'info',
                colorback: '#5BC0DE',
                badgeIconClass: 'glyphicon glyphicon-user',
                title: 'Customised Test',
                content: 'More relentless, more successful. Why wait for institution to schedule exam for you. We give customised test any time, any syllabus, self set difficulty, time bound or unbound, increasing difficulty or fixed and much more variants crafted only for you, the future! '
            }, {
                badgeClass: 'danger',
                colorback: '#D9534F',
                badgeIconClass: 'glyphicon glyphicon-signal',
                title: 'Online Doubt Clearing Session',
                content: 'Stuck with something, We are here to help. In case of a persistent doubt in any problem just head to online doubt sessions with our instructor and your issue will be well addressed. .'
            }, {
                badgeClass: 'primary',
                colorback: '#2E6DA4',
                badgeIconClass: 'glyphicon glyphicon-repeat',
                title: 'Detailed Solutions',
                content: 'Every test follows with a very detailed solutions that goes in depth to all concepts with reference to problem related to those conepts. It is known that ontological understanding of concepts leads to a much better, retaintive and effective learning experience for students '
            }, {
                badgeClass: 'info',
                colorback: '#5BC0DE',
                badgeIconClass: 'glyphicon glyphicon-edit',
                title: 'Competetive learning',
                content: 'No one is at their best, until there is a challenge. Why player 2 only in games, why not compete with the guy on your right or on your left. See where you stand in the competetition through friendly hosted custom tests among friends. '
            }, {
                badgeClass: 'danger',
                colorback: '#D9534F',
                badgeIconClass: 'glyphicon glyphicon-flash',
                title: 'Video Tutorials',
                content: 'Stay up to date with video tutorials addressing common problems faced by many students and much more on a regular basis.'
            }, {
                badgeClass: 'primary',
                colorback: '#2E6DA4',
                badgeIconClass: 'glyphicon glyphicon-thumbs-up',
                title: 'Reach Your success',
                content: 'Summing it all up, key to success is, to test your self, to assess your self, and to become an even better self. We are the platform to help you do just that. Fly to your success beyond any bounds. .'
            },

        ];

    });
