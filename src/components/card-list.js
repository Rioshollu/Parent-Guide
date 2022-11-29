import React from 'react';
import CardTemplate from './card-template';

function CardList({ articles }) {
  if(articles.length === 0 ) {
    return <p>Artikel tidak ditemukan</p>
  }
  let content = articles.map((article) => {
    return <CardTemplate key={article.article_id} article={article} />;
  });

  return content;
}

export default CardList;
