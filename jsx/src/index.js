// Import the React and ReactDOM libraries
import { div } from 'prelude-ls';
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';
    const labelName = 'Enter name:';

    return (
        <div> 
            <label className="label" htmlFor="name">
                {labelName}
            </label> 
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonText}
            </button>
        </div>
    );
}

// Take a react component and show it on screen
ReactDOM.render( 
    <App />,
    document.querySelector('#root')
);


//
if (module.hot) {
    module.hot.accept();
  }