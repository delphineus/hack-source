angular.module('hackSource.services', [])

.factory('Data', function($http) {
  var data = [
    {
      "id": 1,
      "url": "https://angularjs.org/",
      "title": "Angularjs docs",
      "imgUrl": "https://angularjs.org/img/angularjs-for-header-only.svg",
      "summary": "Angularjs official docs",
      "UserId": 1,
      "createdAt": "2018-03-21T21:01:31.954Z",
      "updatedAt": "2017-03-21T21:01:31.954Z",
      "User": {
        "id": 1,
        "username": "dolphin",
        "password": "flyingFish",
        "createdAt": "2017-03-21T21:01:31.977Z",
        "updatedAt": "2017-03-21T21:01:31.977Z"
      },
      "Likes": [
        {
          "id": 1,
          "ResourceId": 1,
          "UserId": 1,
          "createdAt": "2017-03-21T21:01:31.989Z",
          "updatedAt": "2017-03-21T21:01:31.989Z"
        }
      ],
      "Bookmarks": [
        {
          "id": 1,
          "ResourceId": 1,
          "UserId": 1,
          "createdAt": "2017-03-21T21:01:32.000Z",
          "updatedAt": "2017-03-21T21:01:32.000Z"
        }
      ],
      "Categories": [
        {
          "id": 2,
          "title": "callbacks",
          "createdAt": "2017-03-21T21:01:32.016Z",
          "updatedAt": "2017-03-21T21:01:32.016Z",
          "ResourceCategory": {
            "ResourceId": 1,
            "CategoryId": 2,
            "createdAt": "2017-03-21T21:01:32.043Z",
            "updatedAt": "2017-03-21T21:01:32.043Z"
          }
        },
        {
          "id": 1,
          "title": "promises",
          "createdAt": "2017-03-21T21:01:32.016Z",
          "updatedAt": "2017-03-21T21:01:32.016Z",
          "ResourceCategory": {
            "ResourceId": 1,
            "CategoryId": 1,
            "createdAt": "2017-03-21T21:01:32.043Z",
            "updatedAt": "2017-03-21T21:01:32.043Z"
          }
        }
      ],
      "Tags": [
        {
          "id": 2,
          "title": "sequelize",
          "createdAt": "2017-03-21T21:01:32.030Z",
          "updatedAt": "2017-03-21T21:01:32.030Z",
          "ResourceTag": {
            "ResourceId": 1,
            "TagId": 2,
            "createdAt": "2017-03-21T21:01:32.063Z",
            "updatedAt": "2017-03-21T21:01:32.063Z"
          }
        },
        {
          "id": 1,
          "title": "angular",
          "createdAt": "2017-03-21T21:01:32.030Z",
          "updatedAt": "2017-03-21T21:01:32.030Z",
          "ResourceTag": {
            "ResourceId": 1,
            "TagId": 1,
            "createdAt": "2017-03-21T21:01:32.063Z",
            "updatedAt": "2017-03-21T21:01:32.063Z"
          }
        }
      ]
    },
    {
      "id": 2,
      "url": "http://www.AnotherResourceUrl.com",
      "title": "Another Resource Title",
      "imgUrl": "http://www.anotherImgUrl.com",
      "summary": "im another summary",
      "UserId": 1,
      "createdAt": "2017-03-21T21:01:31.954Z",
      "updatedAt": "2017-03-21T21:01:31.954Z",
      "User": {
        "id": 1,
        "username": "dolphin",
        "password": "flyingFish",
        "createdAt": "2017-03-21T21:01:31.977Z",
        "updatedAt": "2017-03-21T21:01:31.977Z"
      },
      "Likes": [],
      "Bookmarks": [],
      "Categories": [
        {
          "id": 3,
          "title": "frontend",
          "createdAt": "2017-03-21T21:01:32.016Z",
          "updatedAt": "2017-03-21T21:01:32.016Z",
          "ResourceCategory": {
            "ResourceId": 2,
            "CategoryId": 3,
            "createdAt": "2017-03-21T21:01:32.043Z",
            "updatedAt": "2017-03-21T21:01:32.043Z"
          }
        },
        {
          "id": 2,
          "title": "callbacks",
          "createdAt": "2017-03-21T21:01:32.016Z",
          "updatedAt": "2017-03-21T21:01:32.016Z",
          "ResourceCategory": {
            "ResourceId": 2,
            "CategoryId": 2,
            "createdAt": "2017-03-21T21:01:32.043Z",
            "updatedAt": "2017-03-21T21:01:32.043Z"
          }
        }
      ],
      "Tags": [
        {
          "id": 3,
          "title": "bootstrap",
          "createdAt": "2017-03-21T21:01:32.030Z",
          "updatedAt": "2017-03-21T21:01:32.030Z",
          "ResourceTag": {
            "ResourceId": 2,
            "TagId": 3,
            "createdAt": "2017-03-21T21:01:32.063Z",
            "updatedAt": "2017-03-21T21:01:32.063Z"
          }
        },
        {
          "id": 2,
          "title": "sequelize",
          "createdAt": "2017-03-21T21:01:32.030Z",
          "updatedAt": "2017-03-21T21:01:32.030Z",
          "ResourceTag": {
            "ResourceId": 2,
            "TagId": 2,
            "createdAt": "2017-03-21T21:01:32.063Z",
            "updatedAt": "2017-03-21T21:01:32.063Z"
          }
        }
      ]
    },
    {
      "id": 3,
      "url": "http://www.YetAnotherResourceUrl.com",
      "title": "Yet Another Resource Title",
      "imgUrl": "http://www.yetAnotherImgUrl.com",
      "summary": "im yet another summary",
      "UserId": 1,
      "createdAt": "2017-03-21T21:01:31.954Z",
      "updatedAt": "2017-03-21T21:01:31.954Z",
      "User": {
        "id": 1,
        "username": "dolphin",
        "password": "flyingFish",
        "createdAt": "2017-03-21T21:01:31.977Z",
        "updatedAt": "2017-03-21T21:01:31.977Z"
      },
      "Likes": [],
      "Bookmarks": [],
      "Categories": [
        {
          "id": 1,
          "title": "promises",
          "createdAt": "2017-03-21T21:01:32.016Z",
          "updatedAt": "2017-03-21T21:01:32.016Z",
          "ResourceCategory": {
            "ResourceId": 3,
            "CategoryId": 1,
            "createdAt": "2017-03-21T21:01:32.043Z",
            "updatedAt": "2017-03-21T21:01:32.043Z"
          }
        },
        {
          "id": 3,
          "title": "frontend",
          "createdAt": "2017-03-21T21:01:32.016Z",
          "updatedAt": "2017-03-21T21:01:32.016Z",
          "ResourceCategory": {
            "ResourceId": 3,
            "CategoryId": 3,
            "createdAt": "2017-03-21T21:01:32.043Z",
            "updatedAt": "2017-03-21T21:01:32.043Z"
          }
        }
      ],
      "Tags": [
        {
          "id": 1,
          "title": "angular",
          "createdAt": "2017-03-21T21:01:32.030Z",
          "updatedAt": "2017-03-21T21:01:32.030Z",
          "ResourceTag": {
            "ResourceId": 3,
            "TagId": 1,
            "createdAt": "2017-03-21T21:01:32.063Z",
            "updatedAt": "2017-03-21T21:01:32.063Z"
          }
        },
        {
          "id": 3,
          "title": "bootstrap",
          "createdAt": "2017-03-21T21:01:32.030Z",
          "updatedAt": "2017-03-21T21:01:32.030Z",
          "ResourceTag": {
            "ResourceId": 3,
            "TagId": 3,
            "createdAt": "2017-03-21T21:01:32.063Z",
            "updatedAt": "2017-03-21T21:01:32.063Z"
          }
        }
      ]
    }
  ];

  return {
    data: data
  };
})
.factory('Resources', function($http) {

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

  return {
    getAllResources: getAllResources
  };
})
.factory('counter', function() {
  var count = 0;
  var incrementer = function() {
    count++;
  };
  return {incrementer: incrementer, count: count};
});
