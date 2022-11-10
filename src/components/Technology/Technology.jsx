import React, {useState, useEffect} from 'react';
import './technology.scss';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Technology = ({tech}) => {

    const [terminology, setTerminology] = useState('0');

    const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div id="technology" className="tech__wrapper">
        <div className="tech__header-container">
            <h5 className="tech__header"><span>03</span>SPACE LAUNCH 101</h5>
            <div className="image__container">
                <img src={matches ? tech[terminology].imgP : tech[terminology].imgL }
                alt={tech[terminology].name} />
            </div>
        </div>
            
        <Container>
           
            <div className="tech__info mb-4"> 
            <div className="nav-btn-list-lg">
                <Button onClick={() => setTerminology('0')} variant="outline-light" className="nav-btn-lg">1</Button>
                <Button onClick={() => setTerminology('1')}  variant="outline-light" className="nav-btn-lg">2</Button>
                <Button onClick={() => setTerminology('2')}   variant="outline-light" className="nav-btn-lg">3</Button>
            </div>
            <div className="tech__info-inner">
                <p className="sub-head-1">THE TERMINOLOGY...</p>
                <p className="sub-head-2">{tech[terminology].name}</p>
                <p className="tech__text">{tech[terminology].text}</p>


            </div>
               
            </div>
                
        </Container>
    </div>
  )
}

export default Technology