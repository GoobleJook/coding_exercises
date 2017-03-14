var div = React.DOM.div
var h1 = React.DOM.h1

// Every component needs a render method, and it must be a pure function (doesn't modify any state or change anything), and it must return markup

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1(null, 'Check out my component!')
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)


var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory(MyTitle),
        MyTitleFactory(MyTitle),
        MyTitleFactory(MyTitle)
      )
    )
  }
})


ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
