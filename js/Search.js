import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
const { shape, string } = React.PropTypes

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show) => <ShowCard key={show.imdbID} show={show} />
        )}
      </div>
    )
  }
})

export default Search
