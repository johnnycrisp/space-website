import React from 'react'
import Container from 'react-bootstrap/Container'
import './destination.scss'
import IMG from '../../assets/destination/image-moon.png'
import Nav from 'react-bootstrap/Nav'
// import IMG from ''

const Destination = () => {
  return (
    <div className="destination__wrapper">
        <Container>
            <h5 className="destination__header"><span>01</span>PICK YOUR DESTINATION</h5>
            <div className="image__container">
                <img src={IMG} alt="IMG Moon" />
            </div>
            <Nav className="nav__links">
                  <Nav.Link className="nav__link" href="#action1">MOON</Nav.Link>
                  <Nav.Link className="nav__link" href="#action2">MARS</Nav.Link>
                  <Nav.Link className="nav__link" href="#action3">EUROPA</Nav.Link>
                  <Nav.Link className="nav__link" href="#action4">TITAN</Nav.Link>
                </Nav>
            <h2>MOON</h2>
            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <hr className="my-4"/>
            <p className="sub-head-1">AVG. DISTANCE</p>
            <p className="sub-head-2">384,400 KM</p>
            <p className="sub-head-1">EST. TRAVEL TIME</p>
            <p className="sub-head-2">3 DAYS</p>
        </Container>
    </div>
  )
}

export default Destination