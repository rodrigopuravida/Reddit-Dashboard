console.log('app.js');

var reditApp = angular.module('ReditApp',['ui.bootstrap']);

reditApp.controller('ReditSearch',['$scope','$http','$modal',function($scope,$http,$modal){

  console.log('anything wtf');

  $scope.searchTerm = '';
  $scope.searchHistory = [];
  $scope.articles = [];
  $scope.finalArray=[];

  $scope.search = function(){

    $scope.searchHistory.push($scope.searchTerm);
    console.log($scope.searchHistory);





    $http({
      url: 'http://www.reddit.com/search.json',
      params:{
        q:$scope.searchTerm
      }
    }).success(function(data){
      // console.log(data.data.children);
      $scope.articles = data.data.children;

      // console.log($scope.articles[0].data);
      $scope.finalArray=$scope.articles;
      // console.log($scope.articles[0]);

      // for (var i = 0; i < $scope.articles.length; i++)
      // {
      //   console.log($scope.articles[i].data.created)
      // }
      // $scope.articles = data["facets"]["children"];

      console.log($scope.finalArray[0].data.url);

    });

    // clear the scree
    $scope.searchTerm = '';



  }



}]);





