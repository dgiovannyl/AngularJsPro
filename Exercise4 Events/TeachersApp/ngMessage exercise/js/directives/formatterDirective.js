function formatterDirective() {
    return {
        require: 'ngModel',
        link: function ($scope, $elem, $attrs, $ctrl) {
            let ngModelCtrl = $ctrl;
            ngModelCtrl.$formatters.unshift(function(value) {
                let returnValue = '';
                let random_boolean = Math.random() >= 0.5;
                for(let i = 0; i < value.length; i++) {
                    if ((i % 2 === 0 && random_boolean) || (i % 2 !== 0 && !random_boolean)) {
                        returnValue = returnValue + value[i].toUpperCase();
                    } else {
                        returnValue = returnValue + value[i].toLowerCase();
                    }
                }
                return returnValue;
            });
        }
    }
}
angular.module('app')
.directive('formatterDirective', formatterDirective);