import React from 'react'
import Router from 'ampersand-router'
import Repos from './pages/Repos'
import Public from './pages/Public'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    React.render(<Public/>,document.body)
  },

  repos() {
    React.render(<Repos/>, document.body)
  }
});
