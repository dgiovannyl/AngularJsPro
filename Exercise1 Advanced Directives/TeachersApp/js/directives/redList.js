function redlist() {
    return {
        restrict: 'A',
        compile: function($scope, $element, $attrs) {
            return {
                post: function($scope, $element, $attrs) {
                    $attrs.$observe('exists', (value) => {
                        if (value === 'true') {
                            $attrs.$addClass('red-text')
                        } else {
                            $attrs.$removeClass('red-text')
                        }
                    }); 
                }
            }
        }
    }
}

angular.module('app')
.directive('redlist', redlist);