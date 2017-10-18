function list() {
    return {
        scope: {},
        bindToController: {
            list: '='
        },
        template : `
            <div>
                <ul>
                    <li ng-repeat="text in listCtrl.list"> <label redlist exists="{{text.exists}}">{{text.text}}</label> </li>
                </ul>
            </div>`,
        controller: function ($scope, $element, $attrs) {
            $attrs.$observe('text', (value) =>  {
                if (value && value !== "") {
                    this.list.push({text: value, exists: false});
                }
            });
        },
        controllerAs: 'listCtrl'
    }
}

angular.module('app')
.directive('listCmp', list);
