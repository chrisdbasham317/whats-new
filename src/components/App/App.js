import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment'
import science from '../../data/science'
import health from '../../data/health'
import './App.css';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js';
import SearchForm from '../SearchForm/SearchForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: ['local', 'technology', 'entertainment', 'science', 'health'],
      dataRepo: {
        local: local,
        technology: technology,
        entertainment: entertainment,
        science: science,
        health: health
      },
      currentCategory: local,
      data: local
    }
  }
  updateData = dataSet => {
    this.setState({
      currentCategory: dataSet,
      data: dataSet
    })
  }

  handleClick = event => {
    this.updateData(event.target.dataset.set);
  }

  searchArticles = (searchTerm, event) => {
    event.preventDefault();
    let revert = this.state.currentCategory
    let casedSearch = searchTerm.toUpperCase();
    let results = this.state.data.filter(article => {
      let title = article.headline.toUpperCase();
      let body = article.description.toUpperCase();
      return (title.includes(casedSearch) || body.includes(casedSearch)) ? true : false;
    })
    return searchTerm === 'revertArticles' ? this.setState({ data: revert }) : this.setState({ data: results });
  }

  render() {
    const menuButtons = this.state.categories.map(category => <Menu key={category} text={category} dataSets={this.state.dataRepo} updateData={this.updateData}/>)
    return (
      <div className='div div--app'>
        <aside className='aside aside--menu'>
          <ul className='ul ul--menu'>
          {menuButtons}
          </ul>
        </aside>
        <nav className='nav nav--search'>
          <h1 className='h1 h1--app-title'>What's <span className='span span--title'>New?</span></h1>
          <SearchForm searchArticles={this.searchArticles}/>
        </nav>
        <main className='main main--news-container'>
          <NewsContainer data={this.state.data} />
        </main>  
      </div>
    );
  }
}

export default App;
