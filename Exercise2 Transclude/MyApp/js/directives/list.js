'use strict';

app.directive('itemList', itemList);

function itemList() {
    return {  
        restrict: 'E',      
        template: `
            <ul>
                <li class="new" 
                    ng-repeat="item in counter.itemsList" 
                    validate-repeated 
                    text-field="{{counter.textField}}" 
                    items-list="{{counter.itemsList}}"
                    button-disabled={{counter.buttonDisabled}}>
                    {{ item }}
                </li>
            </ul>
        `
    }
}