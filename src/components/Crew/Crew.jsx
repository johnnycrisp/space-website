import React, {useState} from 'react';
import './crew.scss'
import Container from 'react-bootstrap/Container';
import IMG from '../../assets/crew/image-douglas-hurley.png'

const Crew = ({crew}) => {
  
  const [crewmember, setCrewmember] = useState(0);
  
   const checkMember = (number) => { 
    if(crewmember === number){
      return "nav-btn-sm active";
    } else {
      return "nav-btn-sm";
    }
   }
  

  return (
    <div id='crew' className="crew__wrapper">
        
         <h5 className="crew__header"><span>02</span>MEET YOUR CREW</h5>
        <Container className="mb-0">
           
            <div className="image__container mb-0">
                <img src={crew[crewmember].img} alt={crew[crewmember].name} /> 
                
            </div>
           <hr className="mt-0 mb-4" />
            
            <div className="crew__info mb-4">
            <ul className="nav-btn-list-sm">
                <li className={checkMember(0)} onClick={()=> setCrewmember(0)}></li>
                <li className={checkMember(1)} onClick={()=> setCrewmember(1)}></li>
                <li className={checkMember(2)} onClick={()=> setCrewmember(2)}></li>
            </ul>
            <div className="crew__member-info"> <p className="sub-head-1">{crew[crewmember].role}</p>
            <p className="sub-head-2">{crew[crewmember].name}</p>
            <p className="crew__text">{crew[crewmember].text}</p>
            </div>
               
            </div>
            
        </Container>

    </div>
  )
}

export default Crew