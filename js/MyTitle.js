import React from 'react'

// Every component needs a render method, and it must be a pure function (doesn't modify any state or change anything), and it must return markup

var MyTitle = React.createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle
