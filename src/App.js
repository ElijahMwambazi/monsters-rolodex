// import { Component } from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import SearchBox from "./components/search-box/search-box.component"
import CardList from "./components/card-list/card-list.component"

// APP FUNCTIONAL COMPONENT
const App = () => {
  const [searchInput, setSearchInput] = useState('') // [value, setValue]
  const [monsters, setMonsters] = useState([])
  const [displayedMonsters, setDisplayedMonsters] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((responce) => responce.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchInput)
    })

    setDisplayedMonsters(filteredMonsters)
  }, [monsters, searchInput])

  const onSearchChange = (event) => {
    const searchInputValue = event.target.value.toLocaleLowerCase()
    setSearchInput(searchInputValue)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="search-box"
        placeholder="search monster(s)"
        onChangeHandler={onSearchChange}
      />

      <CardList
        monsters={displayedMonsters}
      />
    </div >
  )
}

// APP CLASS COMPONENT
// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchInput: ""
//     }
//   }

//   // Parse api data into state
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users/')
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(
//           () => { return { monsters: users } },
//           () => { })
//       })
//   }

//   // Search functionality
//   onSearchChange = (event) => {
//     const searchInput = event.target.value.toLocaleLowerCase()

//     return this.setState(() => { return { searchInput } })
//   }

//   render() {
//     const { monsters, searchInput } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchInput)
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox
//           className="search-box"
//           placeholder="search monster(s)"
//           onChangeHandler={onSearchChange}
//         />

//         <CardList
//           monsters={filteredMonsters}
//         />
//       </div >
//     )
//   }
// }

export default App