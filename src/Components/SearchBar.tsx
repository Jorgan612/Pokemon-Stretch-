import React from "react";
import '../CSS/SearchBar.css';

type state = {
  value: string
}

class SearchBar extends React.Component <state, {props}> {
  state = {
    value: '',
  }

  handleChange = async(event) => {
    await this.setState({value: event.target.value});
    this.props.searchPokemon(this.state.value);
  }

  render() {
    return (
      <form className="search-bar">
        <input 
          className="search-input"
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Search Pokemon by Name'
        />
      </form>
    )
  }
}

export default SearchBar;