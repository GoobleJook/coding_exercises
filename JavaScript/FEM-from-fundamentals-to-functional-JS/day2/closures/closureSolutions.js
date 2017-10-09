var nonsense = function(string) {
  var blab = function(){
    alert(string);
  };
  return blab;
};

var blabLater = nonsense('string');
var blabAgainLater = nonsense('M.I.A.');

var lastNameTrier = function(firstName) {
  var lastNameGetter = function(lastName) {
    console.log(firstName + ' ' + lastName);
  };
  return lastNameGetter;
};

var storyWriter = function() {
  var story = '';
  return {
    addWords: function(word) {
      story += ' ' + word;
      return story.trim();
    },
    erase: function() {
      story = '';
    }
  };
};

story = myStory.addWords('This is my story. I think it is a very good story.');
// "This is my story. I think it is a very good story."
story
// "This is my story. I think it is a very good story."
