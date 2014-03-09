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

  $scope.filterEmployees = function() {

    if ($scope.selectedProjects.length === 0) {
      getAllEmployees();
      return;
    }

    $http.get("employee/filter?project=" + $scope.selectedProjects.join("&project=")).success(
      function(data, status, headers, config) {
      $scope.employees = data;
    });
  };

  function getAllEmployees() {
    $http.get("employee/").success(function(data) {
      $scope.employees = data;
    });
  }
}]);
