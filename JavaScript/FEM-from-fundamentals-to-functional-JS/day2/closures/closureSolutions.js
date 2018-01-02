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

// 1. Using the module pattern, design a toaster. Use your creativity here and think about what you want your users to be able to access on the outside of your toaster vs what you don't want them to be able to touch.
    
//   ```javascript
//   var Toaster = function(){
//       //some private methods and properties
      
//       return {
//         //some public methods and properties, etc
//       };
//   };
