import React, { useEffect } from 'react';
import { Row, Col, Container, Spinner } from "react-bootstrap";
import bannerImage from "../assets/banner1.png";
import supportImage from "../assets/support.jpg";
import people from "../assets/people.png";

function AboutPage() {
  const [initializing, setInitializing] = React.useState(true);
  
  useEffect(() => {
    setInitializing(false);
  }, []);

  if (initializing === true) {
    return (
      <div className="indicator">
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <>
        {/* Header */}
      <Container fluid>
        <Row className="about-header">
          <Col className="about-title">
            <h1>Parent Guide</h1>
          </Col>
          <Col className="about-tagline">
            <div>
              <p>
              <strong>Parent Guide</strong> adalah platform digital untuk orang tua di Indonesia yang berisikan informasi, tips, dan trik dalam mengasuh anak. <br />Visi dari Parent Guide adalah menjadi portal berita parenting yang paling mengerti kebutuhan orang tua dalam menjalani kehidupannya sebagai aspek yang berperan penting dalam pertumbuhan anak.
              </p>
            </div>
          </Col>
        </Row>

        {/* Banner */}
        <Row className="about-banner">
          <Col>
            <img src={bannerImage} alt="bannerimage" />
          </Col>
          <Col>
            <h1>We Love Parent Guide</h1>
          </Col>
        </Row>

        {/* Visi Misi */}
        <Row className="about-vm">
          <Col>
            <div>
              <h3>Mudah Digunakan</h3>
              <p>
                Parent Guide dirancang semaksimal mungkin agar dapat diakses oleh berbagai kalangan dan sangat mudah digunakan.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <h3>Terpercaya</h3>
              <p>
              Kekuatan Parent Guide yang menjadi sumber terpercaya informasi mengenai pola asuh pada anak yang bersumber dari jurnal - jurnal terpercaya.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <h3>Bebas Akses Kapan Saja</h3>
              <p>
              Parent Guide dapat diakses melalui berbagai device, sehingga sangat memudahkan orang tua untuk tetap mendapatkan informasi mengenai pola asuh dimanapun dan kapanpun.
              </p>
            </div>
          </Col>
        </Row>

        {/* Support */}
        <div className="support-wrapper">
          <Row className="about-support">
            <Col>
              <div className="p-5">
                <h2>Parent Guide</h2>
                <p>
                Semua orang tua tentunya berharap bahwa anak-anak mereka akan tumbuh menjadi manusia yang penuh perhatian dan menyenangkan yang membuat pilihan-pilihan hebat. Tentunya untuk meraih hal seperti itu diperlukan pola asuh yang sesuai.
                <br />Kami tahu bahwa mengasuh anak adalah pekerjaan tersulit yang pernah dilakukan, dan kami hadir di sini untuk memastikan bahwa orang tua di Indonesia memiliki pengetahuan yang lebih mengenai pola asuh pada anak. 
                </p>
              </div>
            </Col>
            <Col>
              <img src={supportImage} alt="supportimage" />
            </Col>
          </Row>
        </div>

        {/* Creator */}
        <Row className="creator-title-wrapper py-5">
          <h1>Creator</h1>
        </Row>
        <Row className="about-creator">
          <Col md={3}>
            <div className="creator-image">
              <img src={people} alt="people"></img>
            </div>
          </Col>
          <Col md={3}>
            <div className="creator-desc">
              <h3>Jesslyn Lim</h3>
              <h5>The Developer</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="creator-image">
              <img src={people} alt="people"></img>
            </div>
          </Col>
          <Col md={3}>
            <div className="creator-desc">
              <h3>Nyayu Maharani</h3>
              <h5>The Researcher</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum</p>
            </div>
          </Col>
        </Row>
        <Row className="about-creator pt-4">
          <Col md={3}>
            <div className="creator-desc">
              <h3>Ghalib Hani Pratama</h3>
              <h5>The Developer</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="creator-image">
              <img src={people} alt="people"></img>
            </div>
          </Col>
          <Col md={3}>
            <div className="creator-desc">
              <h3>Rio Shollu Saputra</h3>
              <h5>The Developer</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="creator-image">
              <img src={people} alt="people"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
