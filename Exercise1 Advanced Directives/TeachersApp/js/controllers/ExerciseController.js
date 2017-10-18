function ExerciseController($scope) {
    this.$onInit = () => {
        this.list = [];
        this.counter = 0;
        this.showMessage = false;
    }
    this.addText = () => {
        this.textToAdd = this.newText;
        this.newText = "";
    }
    $scope.$watchCollection("exercise.list", (newValue, oldValue) => {
        if (newValue) {
            this.counter = newValue.length;
        }
    });
    $scope.$watch("exercise.newText", (newValue, oldValue) => {
        this.showMessage = false;
        this.list.map(text => {
            if (text.text === newValue) {
                this.showMessage = true;
                text.exists = true;
            } else {
                text.exists = false;
            }
        })
    });
}
angular.module('app')
.controller('ExerciseController', ExerciseController)