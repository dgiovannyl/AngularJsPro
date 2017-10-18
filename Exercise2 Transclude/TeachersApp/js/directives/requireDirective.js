function parentDirective() {
    return {
        scope: {},
        transclude: true,
        template: `
            <require-directive>
                <h3>Let's learn how to use require property</h3>
            </require-directive>
            <h1> {{parentDirective.counter}} </h1>
        `,
        require: '^^ParentDirective',
        controller: function() {
            this.$onInit = () => {
                this.counter = 0;
            }
            this.addValue = () => {
                this.counter++;
            }
        },
        controllerAs: "parentDirective"
    }
}

function requireDirective() {
    return {
        scope: {},
        transclude: true,
        template: `
            <div ng-transclude></div>
            <button type="button" ng-click="add()" class="btn btn-success btn-block">click on me!</button>
        `,
        require: '^^parentDirective',
        link: function($scope, $element, $attrs, $ctrl) {
            $scope.add = () => {
                $ctrl.addValue();
            }
        }
    }
}

angular.module('app')
.directive('parentDirective', parentDirective)
.directive('requireDirective', requireDirective);