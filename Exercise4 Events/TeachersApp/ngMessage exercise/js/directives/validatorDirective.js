function validatorDirective() {
    return {
        require: 'ngModel',
        link: function ($scope, $elem, $attrs, $ctrl) {
            let ngModelCtrl = $ctrl;
            ngModelCtrl.$validators.format = function (modelValue, viewValue) {
                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regex.test(viewValue);
            }
        }
    }
}
angular.module('app')
.directive('validatorDirective', validatorDirective);