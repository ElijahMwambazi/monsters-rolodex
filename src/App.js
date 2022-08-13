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

  // Parse api data into state
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => { return { monsters: users } },
          () => { })
      })
  }

  // Search functionality
  onSearchChange = (event) => {
    const searchInput = event.target.value.toLocaleLowerCase()

    return this.setState(() => { return { searchInput } })
  }


  render() {
    const { monsters, searchInput } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchInput)
    })

    return (
      <div className="App">

        {/* Search bar */}
        <input
          className="search-bar"
          type="search"
          placeholder="search monster(s)"
          onChange={onSearchChange}
        />

        {/* Monster output */}
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