var newform = {
    require: {
        parent: '^^parent'
    },
    controller: function ($scope){
        this.$onDestroy = function (){
            console.log("onDestroy newform.js ...");            
        };
    },
    template: ` 
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputname" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputname" ng-model="inputname" placeholder="Name">
                </div>
            </div>
            <div class="form-group">
                <label for="inputdescription" class="col-sm-2 control-label">Description</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputdescription" ng-model="inputdescription" placeholder="Description">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-primary" ng-click="$ctrl.parent.additems(inputname, inputdescription);">Add item</button>   
                </div>
            </div>
        </form>
    `       
};

app.component('newform', newform);