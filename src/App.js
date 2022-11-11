import React from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Destination from './components/Destination/Destination'
import Nav from './components/Nav/Nav'
import Crew from './components/Crew/Crew'
import Technology from './components/Technology/Technology'
import IMGMOON from './assets/destination/image-moon.png'
import IMGMARS from './assets/destination/image-mars.png'
import IMGEUROPA from './assets/destination/image-europa.png'
import IMGTITAN from './assets/destination/image-titan.png'
import IMGMARK from './assets/crew/image-mark-shuttleworth.png'
import IMGVICTOR from './assets/crew/image-victor-glover.png'
import IMGANOUSHEH from './assets/crew/image-anousheh-ansari.png'
import IMG1L from './assets/technology/image-launch-vehicle-landscape.jpg'
import IMG1P from './assets/technology/image-launch-vehicle-portrait.jpg'
import IMG2L from './assets/technology/image-space-capsule-landscape.jpg'
import IMG2P from './assets/technology/image-space-capsule-portrait.jpg'
import IMG3L from './assets/technology/image-spaceport-landscape.jpg'
import IMG3P from './assets/technology/image-spaceport-portrait.jpg'


const PLANETS = [
    {
      name: 'MOON',
      id: 1,
      img: IMGMOON,
      text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 KM',
      travelTime: '3 DAYS'
    },
    {
      name: 'MARS',
      id: 2,
      img: IMGMARS,
      text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 MIL. KM',
      travelTime: '9 MONTHS'
    },
    {
      name: 'EUROPA',
      id: 3,
      img: IMGEUROPA,
      text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 MIL. KM',
      travelTime: '3 YEARS'
    },
    {
      name: 'TITAN',
      id: 4,
      img: IMGTITAN,
      text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 BIL. KM',
      travelTime: '7 YEARS'
    }
  ];
  
  const CREW = [
    {
      role: 'MISSION SPECIALIST',
      id: 1,
      name: 'MARK SHUTTLEWORTH',
      img: IMGMARK,
      text: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    },
    {
      role: 'PILOT',
      id: 2,
      name: 'VICTOR GLOVER',
      img: IMGVICTOR,
      text: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
    },
    {
      role: 'FLIGHT ENGINEER',
      id: 3,
      name: 'ANOUSHEH ANSARI',
      img: IMGANOUSHEH,
      text: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
    },
  ];

  const TECH = [
    {
      name: 'LAUNCH VEHICLE',
      text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
      imgL: IMG1L,
      imgP: IMG1P
    },
    {
      name: 'SPACE PORT',
      text: `A space port or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
      imgL: IMG3L,
      imgP: IMG3P
    },
    {
      name: 'SPACE CAPSULE',
      text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
      imgL: IMG2L,
      imgP: IMG2P
    }
  ];
function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Destination planets={PLANETS} />
      <Crew crew={CREW} />
      <Technology tech={TECH}/>
    </div>
  );
}

export default App;
