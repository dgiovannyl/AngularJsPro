let userComponent = {
    template: `
        <div ng-if="$ctrl.fullUser">
            <strong>Name: </strong>
            <input type="text" readonly  class="form-control" ng-model="$ctrl.fullUser.name"><br>
            <strong>Last Name: </strong>
            <input type="text" readonly  class="form-control" ng-model="$ctrl.fullUser.lastName"><br>
            <strong>User Name: </strong>
            <input type="text" readonly  class="form-control" formatter-directive ng-model="$ctrl.fullUser.userName"><br>
            <strong>Password: </strong>
            <input type="text" readonly  class="form-control" ng-model="$ctrl.fullUser.password"><br>
            <strong>Email: </strong>
            <input type="text" readonly  class="form-control" ng-model="$ctrl.fullUser.email"><br>
            <button type="button" class="btn btn-danger" ng-click="$ctrl.changeUserName()">Change user name</button>
        </div>
    `,
    controller: ['$scope', function($scope) {
        this.$onInit = () => {
            $scope.$on('fillUser', (event, data) => {
                this.fullUser = angular.copy(data.user);
            });
        }
        this.changeUserName = () => {
            if (this.fullUser.userName === this.fullUser.name[0] + this.fullUser.lastName) {
                this.fullUser.userName = this.fullUser.name + '.' + this.fullUser.lastName;
            } else {
                this.fullUser.userName = this.fullUser.name[0] + this.fullUser.lastName;
            }
        }
    }]
}


angular.module('app')
.component('userComponent', userComponent)