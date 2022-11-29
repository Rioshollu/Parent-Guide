import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetailTemplate from '../components/card-detail-template';
import { Container, Spinner } from 'react-bootstrap';
import { getArticle } from '../utils/data';

function DetailPage() {
  const { id } = useParams();
  const [article, setArticle] = React.useState([]);
  const [initializing, setInitializing] = React.useState(true);

  useEffect(() => {
    async function fetchArticle() {
      const content = await getArticle(id);
      setArticle(content);
    }
    fetchArticle();
    setInitializing(false);
  }, [id]);
  
  if (initializing === true) {
    return <Spinner animation="border" role="status"></Spinner>;
  }

  if(article.length === 0) {
    return <Spinner animation="border" role="status"></Spinner>
  }

  return (
    <Container>
      <CardDetailTemplate article={article} />
    </Container>
  );
}

export default DetailPage;
