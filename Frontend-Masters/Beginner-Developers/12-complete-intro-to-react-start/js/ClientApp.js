import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='Rob is cool' color='peru' />
        <MyTitle title='props are proper' color='mediumaquamarine' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
