import { Container, Card } from 'react-bootstrap';
import parser from 'html-react-parser';

function CardDetailTemplate({ article }) {
  console.log(article);
  return (
    <>
      <Container>
        <section>
          <p className="text-danger text-center m-4">{article.article_category}</p>
          <p className="detail-title text-center fw-bold">{article.article_title}</p>
          <img className="detail-img rounded d-block" alt="Judul Artikel" src={article.article_image_url}/>
        </section>

        <section>
          <div className="detail-overview">
            <div className='detail-content'> {parser(article.article_content)}</div>
          </div>
          <Card className="detail-credit">
            <Card.Body>
              <Card.Title className="text-start">Sumber Artikel</Card.Title>
              <Card.Text className='text-left'>{article.article_source}</Card.Text>
              <hr />
              <Card.Title className="text-start">Sumber Gambar</Card.Title>
              <Card.Text className='text-left'>{article.article_image_url}</Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </>
  );
}

export default CardDetailTemplate;
