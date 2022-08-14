import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { props } = this;

    return (
      <input
        className={`search-box ${props.className}`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
