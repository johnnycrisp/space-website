import React from 'react'
import './index.scss';
import Header from './components/Header/Header';
import Destination from './components/Destination/Destination'
import Nav from './components/Nav/Nav';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import IMGMOON from './assets/destination/image-moon.png'
import IMGMARS from './assets/destination/image-mars.png'
import IMGEUROPA from './assets/destination/image-europa.png'
import IMGTITAN from './assets/destination/image-titan.png'

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

function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Destination planets={PLANETS} />
      <Crew />
      <Technology />
    </div>
  );
}

export default App;
