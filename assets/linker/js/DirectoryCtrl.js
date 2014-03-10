var nulogyFacePageApp = angular.module("nulogyFacePageApp", ["ui.select2", "ngAnimate"]);

nulogyFacePageApp.controller("DirectoryCtrl", ["$scope", "$http", function ($scope, $http) {

  getAllEmployees();

  $scope.select2Options = {
    multiple: true,
  };

  $http.get("project/").success(function(data) {
    $scope.projects = data;
  });

  $http.get("customer/").success(function(data) {
    $scope.customers = data;
  });

  $scope.isSelected = function(employee) {
    if ($scope.selectedTags.length == 0) {
      return true;
    } else {
      return _.some($scope.selectedTags, function(tag) {
        return _.contains(employee.tags, tag);
      });
    }
  };

  function getAllEmployees() {
    $http.get("employee/").success(function(data) {
      $scope.employees = _.sortBy(data, function(employee) { return employee.lastName; });
    });
  }
}]);
