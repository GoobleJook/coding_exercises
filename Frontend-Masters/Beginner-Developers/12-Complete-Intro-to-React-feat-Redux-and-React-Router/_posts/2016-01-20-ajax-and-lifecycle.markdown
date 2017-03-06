---
title: "React Lifecycle Methods and AJAX with React"
---

Due to the structuring of our app, we haven't had to use React lifecycle methods despite the fact they're fairly common to use and thus important to know. One of the most compelling reasons to use lifecycle methods is to do AJAX. Once a component gets mounted to the page then we want to be able request data from the server. First let's discuss the lifecycle of a React component.

1. __constructor/getInitialState__ - This is where set up your components initial state. The former is for ES6 classes (that we've been using) and the latter is for the React.createClass method.
1. __componentWillMount__ - This method runs right _before_ the component gets mounted. This one is not too common to use, but you will want to use it any time you want code to run both in node and in the browser.
1. __componentDidMount__ - This method runs right _after_ your component gets put into the DOM. This method _will not get run in node but will in the browser_. This makes it so your component can render first _then_ you can go get the data you need. In your component you can throw up a loader if you need to. Also if you need to interact with the DOM (like if you were wrapping D3 or a jQuery plugin) this would be the place to do it.
1. __componentWillUnmount__ - This method runs right before the component is taken off the DOM. Most common thing to do here is get rid of external event listeners or other things you need to clean up.

Cool! So let's make our Details page check the IMDB rating! Open Details.jsx

{% highlight javascript %}
// require in axios
const axios = require('axios')

// add constructor and componentDidMount to Details
constructor (props) {
  super(props)

  this.state = {
    omdbData: {}
  }
}
componentDidMount () {
  console.log('here', this.props.shows[this.props.params.id].imdbID)
  axios.get(`http://www.omdbapi.com/?i=${this.props.shows[this.props.params.id].imdbID}`)
    .then((response) => {
      this.setState({omdbData: response.data})
    })
    .catch((error) => {
      console.error('axios error', error)
    })
}

// add to render before return
let rating
if (this.state.omdbData.imdbRating) {
  rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
}

// add between year and poster
{rating}
{% endhighlight %}

We're requiring in [axios][axios] which is a great little promise-based AJAX client and using that to make requests to the Open Movie Database to find the IMDB ratings. If you go to your pages now you'll notice that the rating is showing up a little after the page renders. That's because it's being grabbed from the magical Internet tubes! As you can see, we did this componentDidMount so that the user could see UI before waiting on an AJAX request. Notice that it doesn't get server-side rendered either because the server doesn't call componentDidMount.

That's it! That's all you need to need know about AJAX with React as well as the lifecycle methods!

[axios]: https://github.com/mzabriskie/axios