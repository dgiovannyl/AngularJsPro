var items = {
    require: {
        parent: '^^parent'
    },
    controller: function () {         
    },
    template: `
        <div class="row divider-content" ng-repeat="item in $ctrl.parent.items">
            <div class="col-md-1 vertical-align">
                {{$index + 1}}
            </div>
            <div class="col-md-11 description-content">
                <h3>{{item.name}}</h3>
                <p class="help-block">{{item.description}}</p>
            </div>
        </div>
    `
};

app.component('items', items);

