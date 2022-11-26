/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

function CardTemplate({ article }) {
  return (
    <>
      <Col className="card-container">
        <Link to={`/article/test/detail/${article.article_id}`}>
          <Card style={{ width: '18rem' }}>
            <Card.Header className="article-header">
              Kategori: {article.article_category}
            </Card.Header>
            <Card.Img variant="top" src={article.article_image_url} className="article-image" />
            <Card.Body>
              <Card.Title className="article-title">{article.article_title}</Card.Title>
              <Card.Subtitle className="article-date mb-2 text-muted">
                {article.article_release_date}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
}

export default CardTemplate;
