import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ id, headline, img, description, url }) => {
  console.log()
  return <section>
    <img data={id} src={img} />
    <h2>{headline}</h2>
    <article>{description}</article>
    <footer data={url}>Link to Article</footer>
  </section>
}

export default NewsArticle;