import React from 'react'
import './header.scss'
import Nav from './Nav'
import Container from 'react-bootstrap/Container'

const Header = () => {
  return (
    <div className="header__container">
        <Nav />
    </div>
  )
}

export default Header