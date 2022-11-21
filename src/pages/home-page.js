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
          <h1 className="content-header">Populer</h1>
          <hr></hr>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-4 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-4 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-4 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <h1 className="content-header">Rekomendasi</h1>
          <hr></hr>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-4 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-4 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam</Card.Text>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <img className="artikel-image" src={artikelImage} alt="Artikel Image" />
              <div className="p-4 m-1">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 pb-5 content-wrapper">
          <h1 className="content-header">Layanan Pengaduan</h1>
          <div className="p-5 content-pengaduan">
            <div>
              <h4>Telepon</h4>
              <p>110001111</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>ParentGuide@gmail.com</p>
            </div>
            <div>
              <h4>SMS</h4>
              <p>2211188</p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
