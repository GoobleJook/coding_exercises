// Now, onto the most important step. Creating the JavaScript file that will hold all the React code. Call this one app.js.
// So now that you have all that out of the way, onto the main event. Displaying all the new hires to the Dom using JSX
// You would first need to create an array with the names of the new hires.

const names = ['Jordan', 'Catherine', 'Yoly', 'Ezell']

// From there you would need to create a React element that will dynamically render the entire list of names. This without you having to manually display each one.

const displayNewHires = (
  <ul>
    {names.map(name => <li>{name}</li>)}
  </ul>
);

// The key thing to note here is that you are not having to create individual <li> elements. You only need describe how you want them to look once and React will handle the rest. That is quite a powerful thing. While you only have a few names, imagine having a list of hundreds of thousands! You can see how this would be a much better approach. Especially if the <li> elements are more complex than the ones used here.
// The last bit of code that is needed to render the content to the screen is the main ReactDom render function.

ReactDOM.render(
  displayNewHires,
  document.getElementById('root')
)