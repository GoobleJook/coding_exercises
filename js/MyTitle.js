import React from 'react'

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

export default MyTitle
