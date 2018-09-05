var app = angular.module("menu", []);
app.controller("myCtrl", function ($scope) {
  $scope.winHeight = window.innerHeight;
  $scope.cardHeight = Math.min(Math.floor(($scope.winHeight - 70) * 7 / 8), 800);
  $scope.footerHeight = $scope.winHeight - 50 - $scope.cardHeight;
  console.log($scope.footerHeight);
  $scope.tag = 'home';
  $scope.cards = [{
    'img': './img/php.jpg',
    'env': 'PHP',
    'link': 'http://qylsteve.herokuapp.com',
    'content': 'This is the profile page for Steve'
  }, {
    'img': './img/node.jpg',
    'env': 'NodeJs',
    'link': 'https://thechecklist.herokuapp.com/',
    'content': 'This is only a testing prototype of an application'
  }, {
    'img': './img/django.jpg',
    'env': 'Django',
    'link': 'https://noteweb.herokuapp.com/',
    'content': 'This is a simple note taking application with authentication.'
  }, {
    'img': './img/rail.jpg',
    'env': 'Rail',
    'link': 'https://infiloopmusic.herokuapp.com/',
    'content': 'A simple web application using Rails and prestige sql'
  },
  // {
  //   'img': './img/net.jpg',
  //   'env': '.NET',
  //   'link': '',
  //   'content': ''
  // },
  {
    'img': './img/java.jpg',
    'env': '.JAVA',
    'link': 'targetanalysis.steveqiu.com',
    'content': 'This is a website for stock query. It also include some other statistics calculated base on information received.'
  }];
  $scope.message = {
    'about': 'This is a brief introduction',
    'contact': 'steveqiu@hotmail.ca'
  };
  $scope.setTag = function (tagName) {
    $scope.tag = tagName;
  }
  $scope.pickClass = function (tagName) {
    if ($scope.tag == tagName) {
      return 'active';
    };
    return '';
  }
  $scope.checkTag = function (tagName) {
    return $scope.tag === tagName;
  }
});
