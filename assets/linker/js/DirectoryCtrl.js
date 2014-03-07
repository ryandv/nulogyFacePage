var nulogyFacePageApp = angular.module("nulogyFacePageApp", []);

nulogyFacePageApp.controller("DirectoryCtrl", ["$scope", "$http", function ($scope, $http) {
  $http.get("employee/").success(function(data) {
    $scope.tasks = data;
  });
}]);
