import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/search-bar";
import CardList from "../components/card-list";
import { getAllArticles } from "../utils/data";
import CategoryButton from "../component/category-button";

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

  const [filterParams, setFilterParams] = useSearchParams();
  const [category, setCategory] = React.useState(() => {
    return filterParams.get("category") || '';
  });

  function onButtonClickedHandler(category) {
    setCategory(category);
    setFilterParams({ category });
  }

  const filteredArticle = allArticles.filter((articel) => {
    if (category === 'Semua') {
      return articel.article_title.toLowerCase().includes(keyword.toLowerCase())
    }
    if (category !== '') {
      return articel.article_category.includes(category);
    } 
    return articel.article_title.toLowerCase().includes(keyword.toLowerCase())
  }); 

  return (
    <>
      <Container>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <CategoryButton clicked={onButtonClickedHandler} />
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
