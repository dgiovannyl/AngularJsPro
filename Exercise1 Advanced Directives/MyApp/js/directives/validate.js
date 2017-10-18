'use strict';

app.directive('validateRepeated', validateRepeated);

function validateRepeated() {
    return {        
        restrict: 'A',    
        link: function ($scope, $element, $attrs) {
            $element.addClass('not--repeated');
            $attrs.$observe('textField', function (value){
                if($attrs.$$element.hasClass("new")){
                   $attrs.$$element.removeClass("new");
                }else{
                    var newItemList = JSON.parse($attrs.itemsList); 
                    debugger;               
                    if(newItemList.indexOf(value) > -1 && value.trim() === $attrs.$$element.text().trim()){
                        $attrs.$updateClass('repeated', 'not--repeated');
                        $attrs.buttonDisabled=true;
                    }else{
                        $attrs.$updateClass('not--repeated', 'repeated'); 
                        $attrs.buttonDisabled=false;
                    }
                }
            });
        }
    }
}