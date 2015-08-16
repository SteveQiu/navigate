var app = angular.module("menu", []);
app.controller("myCtrl", function ($scope) {
  $scope.winHeight = window.innerHeight;
  $scope.tag = 'home';
  $scope.cards = [{
    'img': './img/php.jpg',
    'env': 'PHP',
    'link': 'http://qylsteve.herokuapp.com',
    'content': 'This is the profile page for Steve'
  }, {
    'img': './img/node.jpg',
    'env': 'NodeJs',
    'link': '',
    'content': 'This is the only node application currently'
  }, {
    'img': './img/django.jpg',
    'env': 'Django',
    'link': '',
    'content': ''
  }, {
    'img': './img/rail.jpg',
    'env': 'Rail',
    'link': '',
    'content': ''
  }, {
    'img': './img/net.jpg',
    'env': '.NET',
    'link': '',
    'content': ''
  }];

  $scope.setTag = function(tagName){
    $scope.tag = tagName;
  }

  $scope.pickClass = function(tagName){
    if ($scope.tag == tagName) {
      return 'active';
    };
    return '';
  }
});
