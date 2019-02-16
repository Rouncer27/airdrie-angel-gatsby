import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const EarnYourWingsLogo = styled.a`
  display: block;
  width: 50%;
  box-shadow: 0rem 0rem 0.1rem ${props => props.theme.lightBrown};

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 33.33%;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(25% - 4rem);
    margin: 2rem;
    padding: 2rem;
  }
`;

class EarnYourWings extends Component {
  render() {
    const logo = this.props.data.logo.localFile.childImageSharp.fluid;
    const link = this.props.data.link;
    return (
      <EarnYourWingsLogo target="_blank" rel="noopener noreferrer" href={link}>
        <Img fluid={logo} alt="Earn Your Wings" />
      </EarnYourWingsLogo>
    );
  }
}

export default EarnYourWings;
