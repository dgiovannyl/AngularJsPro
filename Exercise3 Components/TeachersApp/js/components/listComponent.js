let listComponent = {
    bindings: {
        elm: '<',
        idx: '<'
    },
    template: `
        <div class="row">
            <label class="col-md-2 idx-label">{{$ctrl.idx + 1}}</label>
            <div class="col-md-10 list-container">
                <label>{{$ctrl.elm.name}}</label><br>
                <span>{{$ctrl.elm.description}}</span>
            </div>
        </div>
    `,
    controller: function() {
    }
}


angular.module('app')
.component('listComponent', listComponent)