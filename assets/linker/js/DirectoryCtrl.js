var nulogyFacePageApp = angular.module("nulogyFacePageApp", ["ui.select2"]);

nulogyFacePageApp.controller("DirectoryCtrl", ["$scope", "$http", function ($scope, $http) {
  $http.get("employee/").success(function(data) {
    $scope.employees = data;
  });

  $http.get("project/").success(function(data) {
    $scope.projects = data;
    $scope.select2Options = {
      multiple: true,
    };
  });

  $scope.filterEmployees = function() {
    $http.get("employee/filter", {
      project: $scope.selectedProject
    }).success(function(data, status, headers, config) {
      $scope.employees = data;
    });
  };
}]);
