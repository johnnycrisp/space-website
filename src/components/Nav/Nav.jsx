import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../assets/shared/logo.svg'
import '../../index.scss'
import './nav.scss'

function OffcanvasExample() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar  collapseOnSelect
        as="nav" fixed="top" key={expand} bg="transparent" expand={expand} className="navbar-dark mb-3 pl-3 pt-0">
          <Container>
            <Navbar.Brand href="#home">
            <div className="logo__container">
                <img 
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Space Logo"
            />
            </div>
          </Navbar.Brand>            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              
                <Nav className="nav__links justify-content-end flex-grow-1 mt-0">
                  <Nav.Link className="nav__link" href="#home">00 HOME</Nav.Link>
                  <Nav.Link className="nav__link" href="#destination"> 01 DESTINATION</Nav.Link>
                  <Nav.Link className="nav__link" href="#crew">02 CREW</Nav.Link>
                  <Nav.Link className="nav__link" href="#technology">03 TECHNOLOGY</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
           
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;