import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { props } = this;

    return (
      <input
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
