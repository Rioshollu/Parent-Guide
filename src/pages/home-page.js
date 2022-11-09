/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Row, Col, Card } from "react-bootstrap";
import artikelImage from "../assets/artikel-image.png";

function HomePage() {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Parenting Guide</h1>
          <p>Parenting ideas and strategies when you need them</p>
        </div>
      </div>

      <Container>
        <Row>
          <h1 className="title-populer">Populer Artikel</h1>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-2 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
