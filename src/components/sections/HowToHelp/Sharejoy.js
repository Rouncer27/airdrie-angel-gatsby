import React, { Component } from "react";
import styled from "styled-components";
import HandWings from "../../../images/handwings.png";
import Trees from "../SceneParts/Trees";
import Tree from "../SceneParts/Tree";
import Sun from "../SceneParts/Sun";

const ShareJoyStyled = styled.div`
  position: relative;
  padding: 0 2rem 35rem;
  background: linear-gradient(
    to top,
    ${props => props.theme.green} 0%,
    ${props => props.theme.green} 15rem,
    ${props => props.theme.white} 15rem,
    ${props => props.theme.white} 100%
  );

  .our-sun {
    top: 15rem;
    right: 30rem;
    bottom: auto;
  }

  .our-mission-trees {
    bottom: 5rem;
    right: 25rem;
  }

  .our-tree {
    position: absolute;
    bottom: 5rem;
    left: 25rem;
    width: 7.5rem;
  }
`;

const ShareJoyTitle = styled.div`
  position: relative;
  width: 100%;
  max-width: 75rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto;
  text-align: center;
  h2 {
    text-align: center;
    margin: 0;
    color: ${props => props.theme.navyBlue};
  }

  &::before {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 6.9rem;
    height: 5rem;
    margin: auto;
    background-image: url(${HandWings});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 500;
    content: "";
  }

  &::after {
    position: absolute;
    bottom: 1rem;
    right: 0;
    left: 0;
    width: 70rem;
    height: 0.25rem;
    margin: auto;
    background: ${props => props.theme.teal};
    content: "";
  }
`;

const ShareJoyHashTag = styled.div`
  position: absolute;
  top: 25rem;
  left: 50%;
  transform: translateX(-50%);

  h3 {
    margin: 0;
    color: ${props => props.theme.teal};
    line-height: 1;
  }
`;

const ShareJoySubscribe = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  p {
    color: ${props => props.theme.white};
  }
`;

class Sharejoy extends Component {
  render() {
    return (
      <ShareJoyStyled>
        <ShareJoyTitle>
          <h2>How To Help</h2>
        </ShareJoyTitle>
        <ShareJoyHashTag>
          <h3>&#35;sharejoy</h3>
        </ShareJoyHashTag>
        <ShareJoySubscribe>
          <p>Subscribe to our YouTube Channel or Like Us on Facebook</p>
        </ShareJoySubscribe>
        <Sun location="our-sun" />
        <Trees location="our-mission-trees" />
        <Tree location="our-tree" />
      </ShareJoyStyled>
    );
  }
}

export default Sharejoy;
