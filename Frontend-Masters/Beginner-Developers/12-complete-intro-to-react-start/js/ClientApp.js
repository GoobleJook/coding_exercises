import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

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
