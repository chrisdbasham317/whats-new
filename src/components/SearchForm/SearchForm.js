import React, { Component }from 'react';
import './SearchForm.css';

class SearchForm extends Component{
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    }
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search for news articles here'
          name='searchBar'
          value={this.state.searchTerm}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.props.searchArticles(this.state.searchTerm, event)}>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;