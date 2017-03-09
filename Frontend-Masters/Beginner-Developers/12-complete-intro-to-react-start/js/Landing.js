import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>DemoApp</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse All of the Things</Link>
      </div>
    )
  }
})

export default Landing
