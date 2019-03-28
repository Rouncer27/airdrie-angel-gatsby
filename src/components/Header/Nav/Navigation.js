import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  background: ${props => props.theme.grey};
  transition: all 0.3s ease;
  transform: ${props =>
    props.isOpen ? "translateX(0)" : "translateX(calc(-100% - 2rem))"};
  overflow-y: scroll;
  z-index: 9999999;

  @media (min-width: ${props => props.theme.bpTablet}) {
    position: relative;
    margin-left: 3rem;
    height: auto;
    background: transparent;
    border-top: 0.25rem solid ${props => props.theme.lightBrown};
    transform: translateX(0%);
    overflow-y: hidden;
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 10rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    height: auto;
  }

  a {
    width: 100%;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid ${props => props.theme.white};
    color: ${props => props.theme.navyBlue};
    font-size: 3rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: auto;
      margin: 0;
      padding: 1rem 2rem;
      border-bottom: 0 solid ${props => props.theme.white};
      font-size: 1.6rem;
    }

    &:hover {
      color: ${props => props.theme.white};
    }

    &:last-of-type {
      border-bottom: 0 solid transparent !important;
    }
  }

  [aria-current="page"] {
    color: ${props => props.theme.white};
    background: ${props => props.theme.navyBlue};
  }
`;

class Navigation extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
              name
              items {
                wordpress_id
                title
                object_slug
              }
            }
          }
        `}
        render={data => {
          const menuItems = data.wordpressWpApiMenusMenusItems.items;

          return (
            <StyledNav isOpen={this.props.isOpen}>
              <NavWrapper>
                {menuItems.map(item => {
                  return (
                    <Link
                      key={item.wordpress_id}
                      to={
                        item.object_slug === "home"
                          ? "/"
                          : `/${item.object_slug}`
                      }
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </NavWrapper>
            </StyledNav>
          );
        }}
      />
    );
  }
}

export default Navigation;
