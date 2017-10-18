function parserDirective() {
    return {
        require: 'ngModel',
        link: function ($scope, $elem, $attrs, $ctrl) {
            let ngModelCtrl = $ctrl;
            ngModelCtrl.$parsers.unshift(function(value) {
                return value.toUpperCase();
            });
        }
    }
}
angular.module('app')
.directive('parserDirective', parserDirective);