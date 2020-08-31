import React from 'react';
import { Link } from "react-router-dom"
import { Nav } from "../../style/Nav";

const logo = require('../../../assets/Apple-Logo.png')

export const Navigation: React.FC = () => {
  return (
    <Nav.Container>
      <Nav.LeftSection>
      <Nav.Logo src={logo} alt=""/>
      <Nav.LogoText>iTunes</Nav.LogoText>
      </Nav.LeftSection>
      <Nav.MenuLinks>
        <Link to={'/'}>Home</Link>
        <Link to={'/top-list'}>Top100</Link>
      </Nav.MenuLinks>
    </Nav.Container>
  )
};
