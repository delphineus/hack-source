angular.module('hackSource.services', [])

.factory('Data', function($http) {

  // GET all Resources
  var getAllResources = function () {
    return $http({
      method: 'GET',
      url: '/api/resources'
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data;
    });
  };

  // GET all Categories
  var getAllCategories = function () {
    return $http({
      method: 'GET',
      url: '/api/categories'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  // GET all Tags
  var getAllTags = function () {
    return $http({
      method: 'GET',
      url: '/api/tags'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  // GET popular Tags
  var getPopularTags = function () {
    return $http({
      method: 'GET',
      url: '/api/most-popular-tags'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getAllResources: getAllResources,
    getAllCategories: getAllCategories,
    getAllTags: getAllTags,
    getPopularTags: getPopularTags
  };
})
.factory('counter', function() {
  var count = 0;
  var incrementer = function() {
    count++;
  };
  return {incrementer: incrementer, count: count};
})

.filter('filterByCat', function () {
  return function (items, searchCat) {
    var filtered = [];

    if (!searchCat) {
      return items;
    }

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemCats = [];

      item.Categories.forEach(function(cat) {
        itemCats.push(cat.title);
      });

      if (itemCats.indexOf(searchCat) !== -1) {
        filtered.push(item);
      }
    }
    return filtered;
  };
})
.filter('filterByTag', function () {
  return function (items, searchTag) {
    var filtered = [];

    if (!searchTag) {
      return items;
    }

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemTags = [];

      item.Tags.forEach(function(tag) {
        itemTags.push(tag.title);
      });

      if (itemTags.indexOf(searchTag) !== -1) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});
