// import { Component } from "react";
import "./search-box.styles.css";

// APP FUNCTIONAL COMPONENT
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// APP CLASS COMPONENT
// class SearchBox extends Component {
//   render() {
//     const { props } = this;

//     return (
//       <input
//         className={`search-box ${props.className}`}
//         type="search"
//         placeholder={props.placeholder}
//         onChange={props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
