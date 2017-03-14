/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

// Every component needs a render method, and it must be a pure function (doesn't modify any state or change anything), and it must return markup

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color, fontWeight: 'bold' } }, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'props are the best', color: 'peru' }),
        MyTitleFactory({ title: 'props are the worst', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'props are meh' })
     )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
