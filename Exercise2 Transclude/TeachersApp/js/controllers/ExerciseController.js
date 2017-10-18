function ExerciseController($scope) {
    this.$onInit = () => {
        this.object = [{
            imgUrl: 'rsc/rsc1.png',
            header: 'My first transclude project',
            body: 'This is an example to show how to use transclude in directives with angularJS'
        },
        {
            imgUrl: 'rsc/rsc2.png',
            header: 'Using images in transclude',
            body: 'This is an example to show how to use transclude any tag / component'
        },
        {
            header: 'What happen if there is no image?',
            body: 'You can put a body by default, in this case an image by default'
        }];
    }

    
}

angular.module('app')
.controller('ExerciseController', ExerciseController)