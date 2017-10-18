let formComponent = {
    template: `
    <form ng-submit="$ctrl.createUser()" name="formTest">
        <div class="form-group row">
            <label for="name" class="col-2 col-form-label">Name</label>
            <div class="col-10">
                <input class="form-control" type="text" ng-model="$ctrl.obj.name" name="name" required parser-directive>
            </div>
        </div>
        <div ng-if="formTest.name.$touched" ng-messages="formTest.name.$error">
            <label ng-message="required" class="ng-message-label">This field is required!</label>
        </div>
        <div class="form-group row">
            <label for="name" class="col-2 col-form-label">Last Name</label>
            <div class="col-10">
                <input class="form-control" name="lastName" type="text" ng-model="$ctrl.obj.lastName" required parser-directive>
            </div>
        </div>
        <div ng-if="formTest.lastName.$touched" ng-messages="formTest.lastName.$error">
            <label ng-message="required" class="ng-message-label">This field is required!</label>
        </div>
        <div class="form-group row">
            <label for="name" class="col-2 col-form-label">User Name</label>
            <div class="col-10">
                <input class="form-control" type="text" ng-model="$ctrl.obj.userName" name="userName" required>
            </div>
        </div>
        <div ng-if="formTest.userName.$touched" ng-messages="formTest.userName.$error">
            <label ng-message="required" class="ng-message-label">This field is required!</label>
        </div>
        <div class="form-group row">
            <label for="name" class="col-2 col-form-label">password</label>
            <div class="col-10">
                <input class="form-control" type="password" ng-model="$ctrl.obj.password" name="password" 
                id="description" required>
            </div>
        </div>
        <div ng-if="formTest.password.$touched" ng-messages="formTest.password.$error">
            <label ng-message="required" class="ng-message-label">This field is required!</label>
        </div>
        <div class="form-group row">
            <label for="name" class="col-2 col-form-label">Email</label>
            <div class="col-10">
                <input class="form-control" name="email" type="text" ng-model="$ctrl.obj.email" required validator-directive>
            </div>
        </div>
        <div ng-if="formTest.email.$touched" ng-messages="formTest.email.$error" ng-messages-multiple>
            <label ng-message="required" class="ng-message-label">This field is required!</label><br>
            <label ng-message="format" class="ng-message-label">The format is wrong!</label>
        </div>
        
        <button type="submit" class="btn btn-primary btn-block" ng-disabled="formTest.$invalid">Create user</button>
    </form>
    `,
    controller: ['$scope', function($scope) {
        this.$onInit = () => {
            this.obj = {};
        }

        this.createUser = () => {
            $scope.$emit('setUser', {
                user: this.obj
            });
        }
    }]
}

angular.module('app')
.component('formComponent', formComponent);
