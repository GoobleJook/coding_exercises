var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1(null,this.props.title)
      ) 
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: "Robert is a great coder"}),
        MyTitleFactory({ title: "and his wife is an amazing lover"}),
        MyTitleFactory({ title: "He's happy to live in Paradise!"})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))