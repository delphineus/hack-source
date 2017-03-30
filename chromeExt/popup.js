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
};

var resourceData = {
  url: '',
  tags: [],
  title: '',
  imgUrl: '',
  summary: '',
  userId: '',
  category: ''
};

function onSubmit() {
  resourceData.url = document.getElementById('urlInput').value;
  resourceData.title = document.getElementById('titleInput').value;
  resourceData.summary = document.getElementById('summaryInput').value;
  // resource.userId =
  resourceData.category = document.getElementById('categoryInput').value;
  var tags = document.getElementById('tagsInput').value;
  resourceData.tags = tags.split(" ");
};

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
      $.get(url, function(data) {
          var defaultPhoto = 'https://i.stack.imgur.com/Mmww2.png';
          resourceData.imgUrl = $(data).filter('meta[property="og:image"]').attr('content') || defaultPhoto;
          var description = $(data).filter('meta[name=description]').attr('content') || '';
          var title = $(data).filter('title').text() || '';
          document.getElementById('urlInput').value = url;
          document.getElementById('summaryInput').value = description;
          document.getElementById('titleInput').value = title;
      });
    });
});

