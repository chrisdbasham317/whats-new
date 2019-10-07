import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js';
import SearchForm from '../SearchForm/SearchForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: ['local', 'technology', 'entertainment', 'science', 'health'],
      dataRepo: {},
      currentCategory: {},
      data: {},
      loading: true
    }
  }

  componentWillMount() {
    fetch("https://whats-new-api.herokuapp.com/api/v1/news")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return this.setState({
          loading: false,
          dataRepo: data,
          currentCategory: data.local,
          data: data.local,
        });
      });
  }

  updateData = dataSet => {
    this.setState({
      currentCategory: dataSet,
      data: dataSet
    })
  }

  searchArticles = (searchTerm, event) => {
    event.preventDefault();
    let casedSearch = searchTerm.toUpperCase();
    let results = this.state.currentCategory.filter(article => {
      let title = article.headline.toUpperCase();
      let body = article.description.toUpperCase();
      return (title.includes(casedSearch) || body.includes(casedSearch)) ? true : false;
    })
    this.setState({ data: results });
  }

  render() {
    const { categories, dataRepo, currentCategory, data, loading } = this.state;
    const menuButtons = this.state.categories.map(category => <Menu key={category} text={category} dataSets={this.state.dataRepo} updateData={this.updateData} />);
    return (
      <div>
        {!loading ? (
          <div className='div  div--app'>
            <aside className='aside aside--menu'>
              <ul className='ul ul--menu'>
                {menuButtons}
              </ul>
            </aside>
            <nav className='nav nav--search'>
              <h1 className='h1 h1--app-title'>What's <span className='span span--title'>New?</span></h1>
              <SearchForm searchArticles={this.searchArticles} />
            </nav>
            <main className='main main--news-container'>
              <NewsContainer data={this.state.data} />
          </main>
        </div>) : <div>'Loading'</div>
        }
      </div> 
    );
  }
}

export default App;
