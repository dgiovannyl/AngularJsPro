let parentComponent = {
    template: `
        <form-component></form-component>
        <user-component ></user-component>
    `,
    controller: ['$scope', function($scope) {
        this.$onInit  = () => {
            $scope.$on('setUser', (event, data) => {
                $scope.$broadcast('fillUser', data);
            });
        }
    }]
}


angular.module('app')
.component('parentComponent', parentComponent)