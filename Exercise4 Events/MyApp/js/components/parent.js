var parent = {
    controller: function (){

        this.items = [];
        this.mainButtonLabel = "Build the form";
        this.isFormActive = false;

        this.additems = function addItems(itemname, itemdescription){
            //console.log("The item was added = " + itemname + " " + itemdescription );            
            var item = {
                name: itemname,
                description: itemdescription
            };
            this.items.push(item);
        };

        this.changeFormStatus = function changeFormStatus (){
            this.isFormActive = !this.isFormActive;
            this.mainButtonLabel = this.isFormActive ? 'Destroy the form' : "Build the form"; 
            //console.log("Now the form is " + this.isFormActive);       
            this.items = [];     
        };

        this.$onInit = function (){
            console.log("The children are not ready yet!");
        }
        
        this.$postLink = function () {
            console.log("The children are ready");
        }

    },
    template: `
        <div class="container">
            <hr/>
            <button type="button" class="btn btn-default center-block" ng-click="$ctrl.changeFormStatus();">{{$ctrl.mainButtonLabel}}</button>
            <hr/>  

            <newform ng-if="$ctrl.isFormActive"></newform>
            
            <div ng-if="$ctrl.isFormActive">                
                <items></items>
            </div>
        </div>
    `       
};

app.component('parent', parent);