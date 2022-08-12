import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: "Elijah", lastName: "Mwambazi"
      },
      address: "Zambia"
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi my name is {this.state.name}, I live in {this.state.address}
          </p>
          <button onClick={() => {
            this.setState({
              name: {
                firstName: "God",
                lastName: ""
              }
            })
          }
          }
          >Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
