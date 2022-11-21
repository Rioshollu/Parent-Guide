/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Row, Col, Card } from "react-bootstrap";
import artikelImage from "../assets/artikel-image.png";
import { BsTelephone, BsChatLeftText } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

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
          <div className="p-5 mt-3 content-pengaduan">
            <div className="title-contact">
              <h4>Komnas Perlindungan Anak</h4>
              <p>Jl. Teuku Umar No. 10 Gondangdia Menteng Jakarta Pusat DKI Jakarta, Indonesia</p>
            </div>
            <hr></hr>
            <div className="contact-list">
              <div className="contact-wrapper">
                <div>
                  <BsTelephone size={25}></BsTelephone>
                </div>
                <div className="contact-content">
                  <h4>Telepon</h4>
                  <p>021 31900659</p>
                </div>
              </div>
              <div className="contact-wrapper">
                <div>
                  <TfiEmail size={30}></TfiEmail>
                </div>
                <div className="contact-content">
                  <h4>Email</h4>
                  <p>pengaduan@kpai.go.id</p>
                </div>
              </div>
              <div className="contact-wrapper">
                <div>
                  <BsChatLeftText size={25}></BsChatLeftText>
                </div>
                <div className="contact-content">
                  <h4>FAX</h4>
                  <p>021 3900833</p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
