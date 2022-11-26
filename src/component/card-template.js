/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';

function CardTemplate({ article }) {
  return (
    <>
      <Col>
        <Link to={`/article/test/detail/${article.article_id}`}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={article.article_image_url} className="article-image"/>
            <Card.Body>
              <Card.Title>{article.article_title}</Card.Title>
              <Card.Text className='article-category'>{article.article_category}</Card.Text>
              <Card.Text className='article-date'>{article.article_release_date}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
}

export default CardTemplate;
