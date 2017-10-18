let formComponent = {
    bindings: {
        pushObject: '&'
    },
    template: `
        <form ng-submit="$ctrl.addObj()">
            <div class="form-group row">
                <label for="name" class="col-2 col-form-label">Name</label>
                <div class="col-10">
                    <input class="form-control" type="text" ng-model="$ctrl.obj.name" id="name" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="name" class="col-2 col-form-label">Description</label>
                <div class="col-10">
                    <input class="form-control" type="text" ng-model="$ctrl.obj.description" id="description" required>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Add</button>
        </form>
    `,
    controller: function() {
        this.$onInit = () => {
            this.obj = {};
        }
        
        this.addObj = () => {
            this.pushObject({
                $event: {
                    newObject: this.obj
                }
            });
            this.obj = {};
        }

        this.$onDestroy = () => {
            console.log("This element was destroyed");
        }
}
}

angular.module('app')
.component('formComponent', formComponent);
