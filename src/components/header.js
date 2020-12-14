import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "fontsource-oswald";

const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 8px;
  background: #EDF5E1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledNav = styled.nav`
width: 100%;
height: 100%;
margin: 0 auto;
padding: 14px;
background: #EDF5E1;
color: #05386B;
display: flex;
flex-direction: row;
justify-content: flex-end;
`

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