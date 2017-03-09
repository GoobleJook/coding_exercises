import React from 'react'

const Landing = React.createClass({
  render() {
    return(
      <div className='landing'>
        <h1>DemoApp</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All of the Things</a>
      </div>
    )
  }
})

export default Landing