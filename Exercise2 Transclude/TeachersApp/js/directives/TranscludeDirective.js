function transcludeDirective() {
    return {
        scope: {},
        transclude: {
            img: '?img',
            body: 'label'
        },
        bindToController: {
            header: '<'
        },
        template : `
            <h1> Let's use transclude for the directive </h1>
            <div class="row">
                <div class="col-md-5" ng-transclude="img">
                    <img src="rsc/rsc3.png"></img>
                </div>
                <div class="col-md-7 body-directive">
                    <h3>{{transcludeCtr.header}}</h3>
                    <label ng-transclude="body"></label>
                </div>
            </div>`,
        controller: function() {},
        controllerAs: "transcludeCtr"
    }
}

angular.module('app')
.directive('transcludeDirective', transcludeDirective);
