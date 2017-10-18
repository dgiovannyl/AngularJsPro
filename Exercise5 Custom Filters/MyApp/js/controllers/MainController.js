function MainController(appList, ageFilterList){
    this.appList = appList;
    
    this.ageFilterList = ageFilterList;

    this.ageFilter = 0;

    this.genderFilter = undefined;

    this.changeAge = () => {      
        if((this.ageFilterList.length-1) === this.ageFilter){
            this.ageFilter = 0;
        }else{
            this.ageFilter++;
        }
    };

    this.changeGender = () => {
        if(this.genderFilter === undefined){
            this.genderFilter = 'M';
        }else if(this.genderFilter === 'M'){
            this.genderFilter = 'F';
        }else if(this.genderFilter === 'F'){
            this.genderFilter = undefined;
        }        
    };
};

angular.module("app").controller('MainController', ['appList', 'ageFilterList', MainController]);