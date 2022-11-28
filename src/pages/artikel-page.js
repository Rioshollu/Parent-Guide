import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../component/search-bar";
import CardList from "../component/card-list";
import { getAllArticles } from "../utils/data";

function ArtikelPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const [allArticles, setAllArticles] = React.useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const allContent = await getAllArticles();
      setAllArticles(allContent);
    }
    fetchArticles();
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredArticle = allArticles.filter((articel) => {
    return articel.article_title.toLowerCase().includes(keyword.toLowerCase());
  }); 

  return (
    <>
      <Container>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <Row className="p-3">
          <h1 className="content-header">Artikel</h1>
          <hr></hr>
          <CardList articles={filteredArticle} />
        </Row>
      </Container>
    </>
  );
}

export default ArtikelPage;
