import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 99%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: #05386B;
  border-radius: 7px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  letter-spacing: +1px;
  font-weight: 700;
`

const Footer = () => (
  <StyledFooter>
    <a
      href="https://github.com/mikegoolsby"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >&copy; m. goolsby 2020
    </a>
    <span id="style-me">|</span>
    <a
      href="#return-home"
    >home</a>
  </StyledFooter>
)

export default Footer