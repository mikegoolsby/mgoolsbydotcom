import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "fontsource-oswald";

const StyledHeader = styled.header`
  width: 99%;
  height: 100%;
  padding: 8px;
  border-radius: 7px;
  background: #EDF5E1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 200px) {
    width: 99%;
    height: 100%;
  }`

const StyledNav = styled.nav`
width: 100%;
height: 100%;
padding: 14px;
background: #EDF5E1;
color: #05386B;
display: flex;
flex-direction: row;
justify-content: flex-end;
@media (min-width: 200px) {
  width: 99%;
  height: 100%;
}`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #05386B;
  font-family: 'Oswald';
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" aria-label="home">
        <StyledLogo>mike goolsby</StyledLogo>
      </Link>
    <StyledNav>
        <div id="return-home">
           <a href="#about">about me</a>
           <a href="#experience">work experience</a> 
           <a href="#projects">projects</a> 
           <a href="#photos">photography</a>
           <a href="#contact">contact</a>   
        </div>
    </StyledNav>
    </StyledHeader>
  )
}

export default Header