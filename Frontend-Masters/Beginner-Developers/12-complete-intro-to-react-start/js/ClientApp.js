/* global React ReactDOM */

// The above is added to tell ESLint that these are global variables that are supposed to be undefined

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color, fontWeight: 'bold', textAlign: 'center' } }, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'Robert is a great coder', color: 'peru' }),
        MyTitleFactory({ title: 'and his wife is an amazing lover', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'He\'s happy to live in Paradise!', color: 'darkviolet' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
