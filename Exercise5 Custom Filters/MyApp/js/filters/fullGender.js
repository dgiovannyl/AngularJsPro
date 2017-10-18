function fullGender(){
    return function(value){ 
        return value == 'M' ? 'Male' : 'Female';
    };
}

angular.module("app").filter('fullGender', fullGender);