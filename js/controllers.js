var app = angular.module("myApp", []);

app.controller('myController', function($scope, $http) {
  var login = "NicolasFrancaX"
    , url = 'https://api.github.com/users/' + login
    , repositoriesGet = $http.get(url + '/repos')
    , user = $http.get(url);

  repositoriesGet.success(function(data) {
    $scope.repositories = data;
  });

  user.success(function(data) {
    $scope.user = data;
  });

  $scope.post = function(repo) {
    $http.post('https://api.github.com/user/repos?access_token=91b47e8c5d4f1ceb32e91d188e1e28afd0b01bfa', angular.copy(repo));
    location.reload();
  }
});
