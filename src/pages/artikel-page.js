import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SearchBar from "../component/search-bar";
import artikelImage from "../assets/artikel-image.png";

function ArtikelPage() {
  return (
    <>
      <Container>
        <SearchBar />
        <Row className="p-3">
          <h1 className="content-header">Artikel</h1>
          <hr></hr>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="p-3">
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ArtikelPage;
