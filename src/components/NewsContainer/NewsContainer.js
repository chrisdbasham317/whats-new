import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import './NewsContainer.css'

const NewsContainer = (data) => {
  const articleData = data.data.map(info => <NewsArticle key={info.id} headline={info.headline} img={info.img} description={info.description} url={info.url}/>)
  return <main className='main main--card-container'>
    {articleData}
  </main>
}

export default NewsContainer;