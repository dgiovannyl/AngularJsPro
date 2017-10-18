function age(){
    return function(collection, ageValue){
        if(!ageValue) return collection;
        /*var filtered = [];
        for (var i = 0; i < collection.length; i++) {
            if(collection[i].age > ageValue.min && collection[i].age <= ageValue.max){
                filtered.push(collection[i]);
            }            
        }
        return filtered;*/

        return collection.filter(function(value){
            return value.age > ageValue.min && value.age <= ageValue.max;
        });
    };
}


angular.module("app").filter('age', age);