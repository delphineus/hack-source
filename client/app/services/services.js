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

  var getMetaDataFor = function(data) {
    return $http({
      method: 'POST',
      url: '/api/opengraph',
      data: JSON.stringify(data)
    })
    .then(function(resp) {
      console.log(resp);
      return resp.data;
    });
  };

  var postResource = function(data) {
    console.log('Posting resource.');
    $http({
      method: 'POST',
      url: '/api/resources',
      data: JSON.stringify(data)
    });
  };

  var postTags = function(tags) {
    if (!tags) { return; }
    tags.forEach((tag) => {
      $http({
        method: 'POST',
        url: '/api/tags',
        data: JSON.stringify({title: tag})
      });
    });
  };

  return {
    getAllResources: getAllResources,
    getAllCategories: getAllCategories,
    getAllTags: getAllTags,
    getPopularTags: getPopularTags,
    getMetaDataFor: getMetaDataFor,
    postResource: postResource,
    postTags: postTags
  };
})

.factory('User', function ($http) {
  var user = {};
  var isNoUser = true;

  var checkLoggedIn = function() {
    return $http({
      method: 'GET',
      url: '/logged-in'
    })
    .then(function(response) {
      if (response.data.user) {
        user = response.data.user;
        isNoUser = false;
      }
      return {user: user, isNoUser: isNoUser};
    });
  };

  return {
    user: user,
    isNoUser: isNoUser,
    checkLoggedIn: checkLoggedIn
  };
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
})
.filter('filterBySearch', function () {
  return function (items, searchBar) {
    var filtered = [];

    if (!searchBar) {
      return items;
    }

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemSearch = [];

      item.Tags.forEach(function(tag) {
        itemSearch.push(tag.title);
      });
      item.Categories.forEach(function(cat) {
        itemSearch.push(cat.title);
      });

      if (itemSearch.indexOf(searchBar) !== -1) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});
