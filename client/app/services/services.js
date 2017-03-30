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
      url: '/auth/logged-in'
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
      item.title.toLowerCase().split(' ').forEach(function(word) {
        if (!stopWords[word]) itemSearch.push(word);
      });

      if (itemSearch.indexOf(searchBar) !== -1) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});

//these common words are excluded from the above search
const stopWords = {
a: true,
able: true,
about: true,
across: true,
after: true,
all: true,
almost: true,
also: true,
am: true,
among: true,
an: true,
and: true,
any: true,
are: true,
as: true,
at: true,
be: true,
because: true,
been: true,
but: true,
by: true,
can: true,
cannot: true,
could: true,
dear: true,
did: true,
do: true,
does: true,
either: true,
else: true,
ever: true,
every: true,
for: true,
from: true,
get: true,
got: true,
had: true,
has: true,
have: true,
he: true,
her: true,
hers: true,
him: true,
his: true,
how: true,
however: true,
i: true,
if: true,
in: true,
into: true,
is: true,
it: true,
its: true,
just: true,
least: true,
let: true,
like: true,
likely: true,
may: true,
me: true,
might: true,
most: true,
must: true,
my: true,
neither: true,
no: true,
nor: true,
not: true,
of: true,
off: true,
often: true,
on: true,
only: true,
or: true,
other: true,
our: true,
own: true,
rather: true,
said: true,
say: true,
says: true,
she: true,
should: true,
since: true,
so: true,
some: true,
than: true,
that: true,
the: true,
their: true,
them: true,
then: true,
there: true,
these: true,
they: true,
this: true,
tis: true,
to: true,
too: true,
twas: true,
us: true,
wants: true,
was: true,
we: true,
were: true,
what: true,
when: true,
where: true,
which: true,
while: true,
who: true,
whom: true,
why: true,
will: true,
with: true,
would: true,
yet: true,
you: true,
your: true
};
