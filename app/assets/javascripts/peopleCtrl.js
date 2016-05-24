(function(){
  "use Strict"
  angular.module("app").controller("peopleCtrl",
    function($scope){

      $scope.people = [
        {
          name: "Anna",
          bio: "Wonderful person",
          bioVisible: false
        },
        {
          name: "Mary",
          bio: "Graceful person",
          bioVisible: false
        },
        {
          name: "Sally",
          bio: "Funny person",
          bioVisible: false
        }
      ]

      $scope.toggleBio = function(person){
        person.bioVisible = !person.bioVisible
      }

      $scope.addPerson = function(newName, newBio){
        if (newName && newBio) {
          $scope.people.push({name:newName, bio:newBio, bioVisible: false})
          $scope.newName = null;
          $scope.newBio = null;
        }
      }

      $scope.deleteMe = function(index){
        $scope.people.splice(index, 1);
      }

      window.$scope = $scope;
  });
})();
