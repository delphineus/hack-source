// getOpenGraph: function(req, res) {
//   openGraph(req.body.url, function(err, meta) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Meta:  ', meta)
//       res.send(meta);
//     }
//   });
// },

// var getMetaDataFor = function(data) {
//   return $http({
//     method: 'POST',
//     url: '/api/opengraph',
//     data: JSON.stringify(data)
//   })
//   .then(function(resp) {
//     console.log(resp);
//     return resp.data;
//   });
// };

// getMeta = function(url) {
//   var data = {
//     url: url,
//     imgUrl: 'https://i.stack.imgur.com/Mmww2.png',
//     category: ''
//   };

//   // User.checkLoggedIn().then(function(user) {
//   //   $scope.data.UserId = user.user.id;
//   // });

//   return Data.getMetaDataFor({url: url})
//     .then(function(meta) {
//       console.log(meta);
//       $scope.data.title = meta.title;
//       $scope.data.summary = meta.description;
//       if (meta.image) {
//         if (Array.isArray(meta.image.url)) {
//           $scope.data.imgUrl = meta.image.url[meta.image.url.length - 1];
//         } else {
//           $scope.data.imgUrl = meta.image.url;
//         }
//       }
//     });

//-----------------------------------------------------------------------------

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}


function renderURLinput(url) {
  document.getElementById('urlInput').value = url;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    renderURLinput(url);
    $.get(url, function(data) {
        console.log($(data).filter('meta'));
        console.log($(data).filter('title'));
        console.log($(data).filter('img'));
        var description = $(data).filter('meta[name=description]').attr('content')
        document.getElementById('summaryInput').value = description;

    });
    }, function(errorMessage) {
      renderStatus('Cannot display image. ' + errorMessage);
    });
});