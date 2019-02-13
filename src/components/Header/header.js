import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Nav/NavLogo";
import NavSocial from "./Nav/NavSocial";
import Navigation from "./Nav/Navigation";

import { StandardWrapper } from "../styles/Commons/Wrappers";

const StyledHeader = styled.header`
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(
    to right,
    ${props => props.theme.white} 0%,
    ${props => props.theme.teal} 100%
  );

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 3rem 0 2rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 100%;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 100%;
    margin-top: 2.5rem;
  }
`;

const MenuBtn = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0.25rem;
  left: 0.25rem;
  width: 7rem;
  height: 7rem;
  margin: 0 auto;
  padding: 0;
  background: ${props => props.theme.navyBlue};
  border: 0.1rem solid ${props => props.theme.white};
  box-shadow: 0.25rem 0.25rem 0.25rem ${props => props.theme.black};
  color: ${props => props.theme.white};
  text-align: center;
  z-index: 99999;

  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.bpTablet}) {
    display: none;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.state = {
      navOpen: false
    };
  }

  toggleMobileNav() {
    this.setState(prevState => {
      return {
        navOpen: !prevState.navOpen
      };
    });
  }

  render() {
    return (
      <StyledHeader>
        <StandardWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <NavWrapper
            className={
              this.state.navOpen ? "mobile-acive-open" : "mobile-acive-closed"
            }
          >
            <MenuBtn onClick={this.toggleMobileNav}>Menu</MenuBtn>
            {/* <NavSocial /> */}
            <Navigation isOpen={this.state.navOpen} />
          </NavWrapper>
        </StandardWrapper>
      </StyledHeader>
    );
  }
}

export default Header;
