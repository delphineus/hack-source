git addfunction getCurrentTabUrl(callback) {
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
        console.log($(data).filter('img'));
        var description = $(data).filter('meta[name=description]').attr('content') || '';
        var title = $(data).filter('title').text() || '';
        document.getElementById('summaryInput').value = description;
        document.getElementById('titleInput').value = title;

    });
    }, function(errorMessage) {
      renderStatus('Cannot display image. ' + errorMessage);
    });
});