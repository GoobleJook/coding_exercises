/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})

 var MyTitleFact = React.createFactory(MyTitle)

// replace render method
var MyFirstComponent = React.createClass({
  render () {
    return (
      div(null,
        MyTitleFact({title: 'Props are great!'}),
        MyTitleFact({title: 'Use props everywhere'}),
        MyTitleFact({title: 'Props are the best!'})
      )
    )
  }
})

ReactDOM.render(MyFirstComponent, document.getElementById('app'))