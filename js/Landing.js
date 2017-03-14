import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Rob Video</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All the Things</a>
      </div>
    )
  }
})

export default Landing
