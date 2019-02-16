import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const SoaringSpiritsLogo = styled.a`
  display: block;
  width: 50%;
  box-shadow: 0rem 0rem 0.1rem ${props => props.theme.lightBrown};

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 33.33%;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(33.33% - 5rem);
    margin: 2.5rem;
    padding: 3rem;
  }
`;

class SoaringSpirit extends Component {
  render() {
    const logo = this.props.data.logo.source_url;
    const link = this.props.data.link;
    return (
      <SoaringSpiritsLogo target="_blank" rel="noopener noreferrer" href={link}>
        <img src={logo} alt="Earn Your Wings" />
      </SoaringSpiritsLogo>
    );
  }
}

export default SoaringSpirit;
