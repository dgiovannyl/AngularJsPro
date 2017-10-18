var parent = {
    controller: function (){
    },
    template: `
        <div ng-controller="MainController as main">
    
            <div>How to use filters?</div>

            <button ng-click="main.changeGender();">
                Change Gender
            </button>

            <button ng-click="main.changeAge();">
                Change Age
            </button>

            <p>
                <b>Current gender:</b> <span>{{ !main.genderFilter ? 'All' : (main.genderFilter.toUpperCase() | fullGender); }}</span>
            </p>

            <p>
                <b>Current age:</b> <span>{{main.ageFilterList[main.ageFilter].range}}</span>
            </p>

            <table>
                <thead>
                    <th>Full Name</th>
                    <th>Initials</th>
                    <th>Gender</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    <tr ng-repeat="player in main.appList | 
                            gender:main.genderFilter | 
                            age:main.ageFilterList[main.ageFilter] " 
                        ng-class="{
                            male: player.gender === 'M', 
                            female: player.gender ==='F'
                        }"
                    >
                        <td>{{ player.fullName }}</td>
                        <td>{{ player.fullName | initials}}</td>
                        <td>{{ player.gender | fullGender}}</td>
                        <td>{{ player.age }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `       
};

angular.module("app").component('parent', parent);