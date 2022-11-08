import React from 'react'
import './index.scss';
import Header from './components/Header/Header';
import Destination from './components/Destination/Destination'
import Nav from './components/Nav/Nav';
import Crew from './components/Crew/Crew';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Destination />
      <Crew />
    </div>
  );
}

export default App;
