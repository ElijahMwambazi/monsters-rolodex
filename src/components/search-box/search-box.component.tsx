// import { Component } from "react";
import { ChangeEvent } from "react";
import "./search-box.styles.css";

type TSearchBoxPros = {
  className: string;
  placeholder?: string;
  onChangeHandler: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};

// ! APP FUNCTIONAL COMPONENT
const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: TSearchBoxPros): JSX.Element => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// ! APP CLASS COMPONENT
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
