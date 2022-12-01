import React, { useEffect } from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import bannerImage from "../assets/banner1.png";
import supportImage from "../assets/support.jpg";
import imgNyayu from "../assets/imgNyayu.jpg";
import imgGhalib from "../assets/ghalib.jpg";
import imgJesslyn from "../assets/Jesslyn.jpg";
import imgRio from "../assets/ImgRio.jpg";

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
                <strong>Parent Guide</strong> adalah platform digital untuk orang tua di Indonesia yang berisikan informasi, tips, dan trik dalam mengasuh anak. <br />
                Visi dari Parent Guide adalah menjadi portal berita parenting yang paling mengerti kebutuhan orang tua dalam menjalani kehidupannya sebagai aspek yang berperan penting dalam pertumbuhan anak.
              </p>
            </div>
          </Col>
        </Row>

        {/* Banner */}
        <Row className="about-banner-container">
          <Col className="about-banner">
            <img src={bannerImage} alt="bannerimage" className="about-banner-image" />
          </Col>
          <Col className="about-banner-text">
            <h1>We Love Parent Guide</h1>
          </Col>
        </Row>

        {/* Visi Misi */}
        <Row className="about-vm">
          <Col>
            <div>
              <h3>Mudah Digunakan</h3>
              <p>Parent Guide dirancang semaksimal mungkin agar dapat diakses oleh berbagai kalangan dan sangat mudah digunakan.</p>
            </div>
          </Col>
          <Col>
            <div>
              <h3>Informasi Terpercaya</h3>
              <p>Kekuatan Parent Guide yang menjadi sumber terpercaya informasi mengenai pola asuh pada anak yang bersumber dari jurnal - jurnal terpercaya.</p>
            </div>
          </Col>
          <Col>
            <div>
              <h3>Bebas Akses Kapan Saja</h3>
              <p>Parent Guide dapat diakses melalui berbagai device, sehingga sangat memudahkan orang tua untuk tetap mendapatkan informasi mengenai pola asuh dimanapun dan kapanpun.</p>
            </div>
          </Col>
        </Row>

        {/* Support */}
        <Row className="about-banner-container">
          <Col className="about-banner-text">
            <div className="pg-container">
              <h2>We Love Parent Guide</h2>
              <p>
                Semua orang tua tentunya berharap bahwa anak-anak mereka akan tumbuh menjadi manusia yang penuh perhatian dan menyenangkan yang membuat pilihan-pilihan hebat. Tentunya untuk meraih hal seperti itu diperlukan pola asuh yang
                sesuai.
                <br />
                Kami tahu bahwa mengasuh anak adalah pekerjaan tersulit yang pernah dilakukan, dan kami hadir di sini untuk memastikan bahwa orang tua di Indonesia memiliki pengetahuan yang lebih mengenai pola asuh pada anak.
              </p>
            </div>
          </Col>
          <Col className="about-banner">
            <img src={supportImage} alt="supportImage" className="about-banner-image" />
          </Col>
        </Row>

        <Row className="creator-title-wrapper py-5">
          <h1>Creator</h1>
        </Row>
        <Row className="about-creator">
          <Col>
            <div className="creator-container">
              <div className="creator-image">
                <img src={imgGhalib} alt="ghalibImage"></img>
              </div>
              <div className="creator-desc">
                <h3>Ghalib Hani Pratama</h3>
                <h5>The Developer</h5>
                <p>Hallo saya Ghalib Hani, saya merupakan orang yang bertanggung jawab pada tampilan Front End website Parent Guide. Saya berharap Parent Guide bisa membantu orang tua di Indonesia dalam mendidik dan merawat anak.</p>
              </div>
            </div>

            <div className="creator-container">
              <div className="creator-image">
                <img src={imgJesslyn} alt="people"></img>
              </div>
              <div className="creator-desc">
                <h3>Jesslyn Lim</h3>
                <h5>The Developer</h5>
                <p>
                  Hallo saya Jesslyn, saya yang bertanggung jawab terhadap data Back End website Parent Guide dan turut membantu styling tampilan. Saya berharap Parent Guide bisa menjadi platform andalan ilmu parenting untuk orang tua di
                  luar sana.
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="creator-container">
              <div className="creator-image">
                <img src={imgNyayu} alt="people"></img>
              </div>
              <div className="creator-desc">
                <h3>Nyayu Maharani</h3>
                <h5>The Researcher</h5>
                <p>
                  Hallo saya Nyayu Maharani, saya merupakan researcher yang bertanggung jawab dalam isi konten dan juga riset mengenai website. Saya berharap Parent Guide dapat menjadi website yang berperan penting dalam pertumbuhan anak di
                  Indonesia.
                </p>
              </div>
            </div>

            <div className="creator-container">
              <div className="creator-image">
                <img src={imgRio} alt="people"></img>
              </div>
              <div className="creator-desc">
                <h3>Rio Shollu Saputra</h3>
                <h5>The Developer</h5>
                <p>
                  Hallo saya Rio Shollu, saya yang bertanggung jawab dalam pembuatan logo dari parent guide dan tampilan Front End website Parent Guide. Saya berharap Parent Guide menjadi platform yang nyaman digunakan oleh para orang tua
                  di indonesia.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
