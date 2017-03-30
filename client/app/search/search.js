angular.module('hackSource.search', [])
.controller('searchCtrl', function($scope, $http, $q, $timeout, Data) {
  // $scope.queryLibrary = [];
  // Data.getAllCategories().then(resp => {
  //   resp.forEach(item => {
  //     $scope.queryLibrary.push(item);
  //   });
  // });
  // Data.getAllTags().then(resp => {
  //   resp.forEach(item => {
  //     $scope.queryLibrary.push(item);
  //   });
  // });
  //
  // $scope.selectedItem = null;
  // $scope.searchText = null;
  //
  // $scope.querySearch = querySearch;
  //
  // function querySearch (query) {
  //   var results = query ? $scope.queryLibrary.filter( createFilterFor(query) ) : $scope.queryLibrary;
  //   var deferred = $q.defer();
  //   $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
  //   return deferred.promise;
  // }
  //
  // function createFilterFor(query) {
  //   var lowercaseQuery = angular.lowercase(query);
  //   return function filterFn(cat) {
  //     return (cat.title.indexOf(lowercaseQuery) === 0);
  //   };
  //
  // }
  //
  // $scope.clearInput = function() {
  //   $scope.selectedItem = null;
  //   $scope.searchText = null;
  // };
  $scope.searchText = null;
  $scope.change = (text) => {
    let value = $scope.searchText;
    Data.filterBySearch(value);
  }
})
.directive('hsSearch', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/search/search.html',
    replace: true
  };
});
