import React from 'react'
import './header.scss'
import Container from 'react-bootstrap/Container'
// import Nav from '../Nav/Nav'



const Header = () => {
  
  return (
    <div id="home" className="header__container">
        {/* <Nav /> */}
        <Container className="hero__wrapper">
        <div className="hero__info"><h5>SO YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p className="hero__text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p></div>
        <div className="btn__wrapper">
        <a href="#destination"><button className="btn-main">EXPLORE</button></a>
        </div>
        </Container>
    </div>
  )
}

// onClick={()=> ref.current?.scrollIntoView({behavior: 'smooth'}) }

export default Header