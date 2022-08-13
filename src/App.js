import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchInput: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => { return { monsters: users } },
          () => { })
      })
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchInput)
    })

    return (
      <div className="App">
        <input
          className="search-bar"
          type="search"
          placeholder="search monster(s)"
          onChange={(event) => {
            const searchInput = event.target.value.toLocaleLowerCase()

            return this.setState({ searchInput })
          }
          }
        />

        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>)
          })
        }
      </div>
    )
  }
}

export default App