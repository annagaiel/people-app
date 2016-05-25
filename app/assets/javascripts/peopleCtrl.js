(function(){
  "use Strict"
  angular.module("app").controller("peopleCtrl",
    function($scope, $http){

      $scope.people = [];
      $scope.setup = function(){
        $http.get("/api/v1/people.json").then(function(response){
          $scope.people = response.data;
        });
      }

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
