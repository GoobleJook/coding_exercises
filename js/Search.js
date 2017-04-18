import React from 'react'
import ShowCard from './ShowCard'
const { arrayOf, shape, string } = React.propTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>Rob's Video</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        <div>
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`
              .toUpperCase().indexOf(this.state.searchTerm
              .toUpperCase()) >= 0
            })
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })}
        </div>
      </div>
    )
  }
})

export default Search
