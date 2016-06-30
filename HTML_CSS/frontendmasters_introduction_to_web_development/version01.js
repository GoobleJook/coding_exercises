$('.btn').click(function() {
  
  $('.text').text('loading . . .');
  
  $.ajax({
    type:"GET",
    data: {
      q: "puppy",
      restrict_sr: "true"
    },
    url:"http://www.reddit.com/r/aww/search.json",
    success: function(response) {
      $('.text').html('');
      var children = response.data.children;
      for (var i = 0; i < children.length; i++) {
        if (children[i].data.thumbnail !== "self" && children[i].data.thumbnail !== "default") {
          $('.text').append('<img src="' + children[i].data.thumbnail + '" />');
        }
      }
      
    },
  });
  
});