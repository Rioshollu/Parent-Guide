import React from 'react';
import { Container, Card } from 'react-bootstrap';

function CardDetailTemplate({ article }) {
//   console.log(article);
  return (
    <>
      <Container>
        <section>
          <p className="text-danger text-center m-4">{article[0].article_category}</p>
          <p className="detail-title text-center fw-bold">{article[0].article_title}</p>
          <img className="detail-img rounded d-block" alt="Judul Artikel" src={article[0].article_image_url}/>
        </section>

        <section>
          <div className="detail-overview">
            <p className='detail-content'> {article[0].article_content}</p>
          </div>
          <Card className="detail-credit">
            <Card.Body>
              <Card.Title className="text-start">Sumber Artikel</Card.Title>
              <Card.Text className='text-left'>
                {article[0].article_source}
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </>
  );
}

export default CardDetailTemplate;
