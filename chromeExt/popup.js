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
  UserId: null,
  category: ''
};

function onSubmit() {
  resourceData.url = document.getElementById('urlInput').value;
  resourceData.title = document.getElementById('titleInput').value;
  resourceData.summary = document.getElementById('summaryInput').value;
  resourceData.category = document.getElementById('categoryInput').value;
  var tags = document.getElementById('tagsInput').value;
  tags = tags.split(' ');
  if (tags.length > 0) {
    resourceData.tags = tags;
  }
  $.post('http://hack-source.herokuapp.com/api/resources', resourceData);
  $('.form-group').fadeOut(600);
  $('#submit').fadeOut(600);
  $('.container').animate({height: "120px"}, 800);
  $('.title').text('Resource submitted!').css({'font-size': '20px', 'padding-top': '5px'});
  $('.container').append('<h5 class="form-text text-muted">Visit <a target="_blank" href="http://hack-source.herokuapp.com/">HackSource</a> to see your resources.</h5>');
  $('h5').css({'font-size': '15px', 'font-weight': '600', 'text-align': 'center'});
};

function getCookies(domain, name)
  {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
      if (cookie) {
        ID = cookie.value;
        resourceData.UserId = ID;
        $(".form-control").prop('disabled', false);
        $("#submit").show();
        $("#loginHelp").hide();
      } else {
        $(".form-control").prop('disabled', true);
        $("#submit").hide();
        $("#loginHelp").show();
      }
    });
  }

document.addEventListener('DOMContentLoaded', function() {
  $.get('http://hack-source.herokuapp.com/api/categories', function(res) {
    res.forEach(function(category) {
      $('#categoryInput').append($('<option/>', {
              value: category.title,
              text : category.title
          }));
    })
  });

  getCookies("http://hack-source.herokuapp.com", "HSid");

  getCurrentTabUrl(function(url) {
      $.get(url, function(data) {
          //Get metadata from current tab
          var defaultPhoto = 'https://i.stack.imgur.com/Mmww2.png';
          resourceData.imgUrl = $(data).filter('meta[property="og:image"]').attr('content') || defaultPhoto;
          var description = $(data).filter('meta[name=description]').attr('content') || '';
          var title = $(data).filter('title').text() || '';
          document.getElementById('urlInput').value = url;
          document.getElementById('summaryInput').value = description;
          document.getElementById('titleInput').value = title;
      });
    });

  $("#submit").click(function(event) {
    onSubmit();
    event.preventDefault();
  });

});