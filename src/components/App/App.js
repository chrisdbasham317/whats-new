import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology'
import entertainment from '../../data/entertainment'
import science from '../../data/science'
import health from '../../data/health'
import './App.css';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      dataRepo: {
        local: local,
        technology: technology,
        entertainment: entertainment,
        science: science,
        health: health
      },
      data: local
    }
  }
  updateData = (dataSet) => {
    this.setState({ data: dataSet })
  }

  handleClick(event) {
    this.updateData(event.target.dataset.set);
    console.log(event.target.dataset.set);
  }

  render() {
    return (
      <div className="div div--app">
        <Menu dataSets={this.state.dataRepo} method={this.updateData}/>
        <NewsContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
