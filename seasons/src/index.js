import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     return (
//         <div>
//             Latitude:
//         </div>

//     );
// }

// determine users physical location

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => { 
                //call set state
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
      }

      componentDidMount() {
        console.log('My component was rendered to the screen.');
      }

      componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
      }

    //define render
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>

        } else if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>

        } else {
            return <div>Loading!</div>
        }

        // return (
        //     <div>
        //         Latitude: {this.state.lat} 
        //         <br />
        //         Error: {this.state.errorMessage}
        //     </div>
        // );
    }
}

ReactDOM.render( 
    <App />,
    document.querySelector('#root')
);
