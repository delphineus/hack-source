// this is an example from the Angular docs
// https://docs.angularjs.org/guide/directive

angular.module('docsRestrictDirective', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])
.directive('myCustomer', function() {
  return {
    restrict: 'E',
    templateUrl: 'my-customer.html'
  };
});