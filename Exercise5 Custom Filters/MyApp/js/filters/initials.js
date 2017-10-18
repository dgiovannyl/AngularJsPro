function initials(){
    return function(name){        
        var initials = name.match(/\b\w/g) || [];
        return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    };
}

angular.module("app").filter('initials', initials);