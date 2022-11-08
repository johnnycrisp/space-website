import React from 'react';
import './technology.scss';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import IMG from '../../assets/technology/image-launch-vehicle-landscape.jpg';

const Technology = () => {
  return (
    <div className="tech__wrapper">
        <Container>
            <h5 className="crew__header"><span>03</span>SPACE LAUNCH 101</h5>
            <div className="image__container">
                <img src={IMG} alt="IMG NAME" />
            </div>
            <div className="nav-btn-list-lg">
                <Button className="nav-btn-lg">1</Button>
                <Button className="nav-btn-lg">2</Button>
                <Button className="nav-btn-lg">3</Button>
            </div>
            <div className="tech__info">
                <p className="sub-head-1">THE TERMINOLOGY...</p>
                <p className="sub-head-2">LAUNCH VEHICLE</p>
                <p className="tech__text">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
                
        </Container>
    </div>
  )
}

export default Technology