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

  .mobile-toggle-button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0.25rem;
    left: 0.25rem;
    width: 7.5rem;
    height: 7.5rem;
    margin: 0 auto;
    padding: 0;
    background: ${props => props.theme.navyBlue};
    border: 0.1rem solid ${props => props.theme.white};
    box-shadow: 0.25rem 0.25rem 0.25rem ${props => props.theme.black};
    color: ${props => props.theme.white};
    text-align: center;
    z-index: 99999999;

    &::before,
    &::after {
      display: block;
      position: absolute;
      right: 0;
      left: 0;
      width: 80%;
      height: 0.2rem;
      margin: 0 auto;
      transform: rotate(0);
      transform-origin: center center;
      transition: all 0.2s ease;
      background-color: ${props => props.theme.white};
      content: "";
    }

    &::before {
      top: 1rem;
    }

    &::after {
      bottom: 1rem;
    }

    &:hover {
      cursor: pointer;
      &::before {
        top: 0.5rem;
      }

      &::after {
        bottom: 0.5rem;
      }
    }

    &:focus {
      outline: none;
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      display: none;
    }
  }

  &.mobile-acive-open {
    .mobile-toggle-button {
      background: ${props => props.theme.teal};
      color: ${props => props.theme.teal};
      &::before {
        top: 50%;
        transform: translateY(-50%) rotate(135deg);
      }

      &::after {
        bottom: 50%;
        transform: translateY(50%) rotate(-135deg);
      }
    }
  }
`;

const MenuBtn = styled.button``;

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
            <MenuBtn
              className="mobile-toggle-button"
              onClick={this.toggleMobileNav}
            >
              Menu
            </MenuBtn>
            {/* <NavSocial /> */}
            <Navigation isOpen={this.state.navOpen} />
          </NavWrapper>
        </StandardWrapper>
      </StyledHeader>
    );
  }
}

export default Header;
