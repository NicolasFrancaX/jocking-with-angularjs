var app = angular.module("myApp", []);

app.controller('myController', function($scope, $http) {
  var login = "NicolasFrancaX"
    , url = 'https://api.github.com/users/' + login
    , repositories = $http.get(url + '/repos')
    , user = $http.get(url);

  repositories.success(function(data) {
    $scope.repositories = data;
  });

  user.success(function(data) {
    $scope.user = data;
  });
});
