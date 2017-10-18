let parentComponent = {
    template: `
        <button class="btn btn-danger btn-block" ng-if="$ctrl.showForm" ng-click="$ctrl.showForm = false">Destroy the form!!!!</button>
        <button class="btn btn-success btn-block" ng-if="!$ctrl.showForm" ng-click="$ctrl.showForm = true">Build the form!!!!</button>
        <form-component ng-if="$ctrl.showForm" push-object="$ctrl.pushObject($event)"></form-component>
        <div ng-repeat="elm in $ctrl.list track by $index" class="container-component">
            <list-component elm="elm" idx="$index"></list-component>
            <hr>
        </div>
    `,
    controller: function() {
        this.$onInit = () => {
            this.list = [];
            console.error("The children are not ready yet!!!")
        }
        this.$postLink = () => {
            console.info("The children are ready")
        }
        this.pushObject = (event) => {
            this.list.push(event.newObject);
        }
    }
}


angular.module('app')
.component('parentComponent', parentComponent)