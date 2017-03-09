import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './Landing'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        {/*HashRouter is a hack and should not be used unless you can't connect to React Router or some real router*/}
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
