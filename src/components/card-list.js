import React from 'react';
import CardTemplate from './card-template';
// import Spinner from 'react-bootstrap/Spinner';

function CardList({ articles }) {
  if(articles.length === 0 ) {
    return (
      <div className='indicator'>
        <p>Tidak Ditemukan ...</p>
        {/* <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" /> */}
      </div>
    )
  }
  let content = articles.map((article) => {
    return <CardTemplate key={article.article_id} article={article} />;
  });

  return content;
}

export default CardList;
