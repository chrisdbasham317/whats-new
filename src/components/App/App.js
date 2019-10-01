import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: local
    }
  }

  render() {
    return (
      <div className="div div--app">
        <NewsContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
