'use strict';

app.controller('CounterController', CounterController);

function CounterController($scope) {

    var cc = this;

    cc.textField = "";
    cc.count = 0;
    cc.itemsList = [];
    cc.buttonDisabled = 'false';

    /*doSometing = (param1, param2) => {

    };*/
    
    cc.increment = function increment () {        
        cc.itemsList.unshift(cc.textField);
    };
    
    $scope.$watch(function(){
        return cc.textField;
    }.bind(cc), function (newValue, oldValue){
        if(newValue){
            cc.buttonDisabled = false;
        }else{
            cc.buttonDisabled = true;
        }
    });

    $scope.$watchCollection(angular.bind(cc, function () { 
        return cc.itemsList;
    }), function (newValue, oldValue){
        if(newValue === oldValue){            
            return;
        }
        cc.count++;
    });    
}