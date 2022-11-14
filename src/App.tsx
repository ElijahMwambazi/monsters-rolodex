// import { Component } from 'react';
import {
  useState,
  useEffect,
  ChangeEvent,
} from "react";

import { getData } from "./utils/data.utils";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

export type TMonster = {
  id: string;
  name: string;
  email: string;
};

// APP FUNCTIONAL COMPONENT
const App = () => {
  const [searchInput, setSearchInput] =
    useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState<
    TMonster[]
  >([]);
  const [
    displayedMonsters,
    setDisplayedMonsters,
  ] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<TMonster[]>(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter(
      (monster) => {
        return monster.name
          .toLocaleLowerCase()
          .includes(searchInput);
      }
    );

    setDisplayedMonsters(filteredMonsters);
  }, [monsters, searchInput]);

  const onSearchChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const searchInputValue =
      event.target.value.toLocaleLowerCase();
    setSearchInput(searchInputValue);
  };

  return (
    <div className="App">
      <h1 className="app-title">
        Monsters Rolodex
      </h1>

      <SearchBox
        className="search-box"
        placeholder="search monster(s)"
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={displayedMonsters} />
    </div>
  );
};

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

export default App;
