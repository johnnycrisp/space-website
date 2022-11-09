import React from 'react'
import Container from 'react-bootstrap/Container'
import './destination.scss'
import IMG from '../../assets/destination/image-moon.png'
import Nav from 'react-bootstrap/Nav'
// import IMG from ''

const Destination = () => {
  return (
    <div className="destination__wrapper">
        
            <h5 className="destination__header"><span>01</span>PICK YOUR DESTINATION</h5>
            <Container>
            <div className="image__container">
                <img src={IMG} alt="IMG Moon" />
            </div>
             <div className="planet__info-all"><div className="planet__info">
                <Nav className="nav__links">
                  <Nav.Link className="nav__link" href="#action1">MOON</Nav.Link>
                  <Nav.Link className="nav__link" href="#action2">MARS</Nav.Link>
                  <Nav.Link className="nav__link" href="#action3">EUROPA</Nav.Link>
                  <Nav.Link className="nav__link" href="#action4">TITAN</Nav.Link>
                </Nav>
            <h2 className="planet__header">MOON</h2>
            <p className="planet__text">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div> 
            <hr className="my-4"/>
            <div className="dest__info"> 
           
                <div className="distance__info">
                    <p className="sub-head-1">AVG. DISTANCE</p>
                    <p className="sub-head-2">384,400 KM</p>
                </div>
                <div className="travel__info">
                    <p className="sub-head-1">EST. TRAVEL TIME</p>
                    <p className="sub-head-2">3 DAYS</p>
                </div></div>
                
            </div>
            </Container>
        
    </div>
  )
}

export default Destination