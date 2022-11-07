import React from 'react'
import './index.scss';
import Header from './components/Header/Header';
import Destination from './components/Destination/Destination'
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Destination />
    </div>
  );
}

export default App;
