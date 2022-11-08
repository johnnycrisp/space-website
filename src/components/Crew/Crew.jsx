import React from 'react';
import './crew.scss'
import Container from 'react-bootstrap/Container';
import IMG from '../../assets/crew/image-douglas-hurley.png'

const Crew = () => {
  return (
    <div className="crew__wrapper">
        <Container>
            <h5 className="crew__header"><span>02</span>MEET YOUR CREW</h5>
            <div className="image__container">
                <img src={IMG} alt="IMG NAME" /> 
                
            </div>
           <hr className="mb-4" />
            <ul className="nav-btn-list-sm">
                <li className="nav-btn-sm"></li>
                <li className="nav-btn-sm"></li>
                <li className="nav-btn-sm"></li>
                <li className="nav-btn-sm"></li>
            </ul>
            <div className="crew__info mb-4">
                <p className="sub-head-1">COMMANDER</p>
            <p className="sub-head-2">DOUGLAS HURLEY</p>
            <p className="crew__text">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            
        </Container>

    </div>
  )
}

export default Crew