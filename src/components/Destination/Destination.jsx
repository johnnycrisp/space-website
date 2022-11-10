import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import './destination.scss'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
// import IMG from ''

const Destination = ({planets}) => {

  const [planet, setPlanet] = useState(0);

  return (
    <div id="destination" className="destination__wrapper">
        
            <h5 className="destination__header"><span>01</span>PICK YOUR DESTINATION</h5>
            <Container>
            <div className="image__container">
                <img src={planets[planet].img} alt={planet} />
            </div>
             <div className="planet__info-all"><div className="planet__info">
                <Nav className="nav__links">
                  <Button variant="btn-outline" className="nav__link nav-link" onClick={() => setPlanet(0)} >MOON</Button>
                  <Button variant="btn-outline" className="nav__link nav-link" onClick={() => setPlanet(1)} >MARS</Button>
                  <Button variant="btn-outline" className="nav__link nav-link" onClick={() => setPlanet(2)} >EUROPA</Button>
                  <Button variant="btn-outline" className="nav__link nav-link" onClick={() => setPlanet(3)} >TITAN</Button>
                </Nav>
            <h2 className="planet__header">{planets[planet].name}</h2>
            <p className="planet__text">{planets[planet].text}</p>
            </div> 
            <hr className="my-4"/>
            <div className="dest__info"> 
           
                <div className="distance__info">
                    <p className="sub-head-1">AVG. DISTANCE</p>
                    <p className="sub-head-2">{planets[planet].distance}</p>
                </div>
                <div className="travel__info">
                    <p className="sub-head-1">EST. TRAVEL TIME</p>
                    <p className="sub-head-2">{planets[planet].travelTime}</p>
                </div></div>
                
            </div>
            </Container>
        
    </div>
  )
}

export default Destination