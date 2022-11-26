import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
        <Navbar className="navigation-container" expand="sm">
        <Container className="navigation-text-container">
            <Navbar.Brand href="/" className="navigation-brand">
            <img
                alt="Brand Logo"
                src="/logo.svg"
                width="50"
                height="50"
                className="d-inline-block align-top"
            />{' '}
            Parent Guide
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Beranda</Nav.Link>
                    <Nav.Link href="/article">Artikel</Nav.Link>
                    <Nav.Link href="/about-us">Tentang Kami</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );
}

export default NavBar;
