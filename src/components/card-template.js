import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

function CardTemplate({ article }) {
  return (
    <>
      <Col className="card-container">
        <Card className="article-container">
          <Link to={`/article/detail/${article.article_id}`}>
            <Card.Img variant="top" src={article.article_image_url} className="article-image" />
            <Card.Header className="article-header">{article.article_category}</Card.Header>
            <Card.Body>
              <Card.Title className="article-title">{article.article_title}</Card.Title>
              <div className="article-content-container">
                <span className="article-rating mb-2 text-muted">⭐️{article.article_rating}</span>
                <span className="article-date mb-2 text-muted">{article.article_release_date}</span>
              </div>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </>
  );
}

export default CardTemplate;
