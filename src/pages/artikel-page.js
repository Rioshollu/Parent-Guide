import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SearchBar from "../component/search-bar";
import CardList from "../component/card-list";
import { getAllArticles } from "../utils/data";


function ArtikelPage() {
  const [allArticles, setAllArticles] = React.useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const allContent = await getAllArticles();
      setAllArticles(allContent);
    }
    fetchArticles();
  }, [])
  return (
    <>
      <Container>
        <SearchBar />
        <Row className="p-3">
          <h1 className="content-header">Artikel</h1>
          <hr></hr>
          <CardList articles={allArticles}/>
        </Row>
      </Container>
    </>
  );
}

export default ArtikelPage;
