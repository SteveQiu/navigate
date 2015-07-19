var app = angular.module("menu", []);
app.controller("myCtrl", function ($scope) {
  $scope.winHeight = window.innerHeight;
  $scope.cards = [{
    'link': '',
    'env': 'PHP'
  }, {
    'link': '',
    'env': 'NodeJs'
  }, {
    'link': '',
    'env': 'Django'
  }, {
    'link': '',
    'env': 'Rail'
  }, {
    'link': '',
    'env': '.NET'
  }];
});
