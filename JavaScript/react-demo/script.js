console.log('Test message here, yup');

const jsContainer = document.getElementById('js');
jsContainer.innerHTML = `
  <div class="demo">
    Howdy JS 
  </div>
`;

const reactContainer = document.getElementById('react');

ReactDOM.render(
  React.createElement (
    "div",
    { className: "demo" },
    "Howdy to React",
    ),
  reactContainer
  )
