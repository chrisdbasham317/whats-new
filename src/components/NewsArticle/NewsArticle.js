import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ id, headline, img, description, url }) => {
  return <section className='section section--news-cards'>
    <img alt='' className='img img--card-pic' data={id} src={img} />
    <h2>{headline}</h2>
    <article>{description}</article>
    <footer data={url}>Link to Article</footer>
  </section>
}

export default NewsArticle;