import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const AngelsAmongUsLogo = styled.div`
  display: block;
  width: 50%;
  box-shadow: 0rem 0rem 0.1rem ${props => props.theme.lightBrown};

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 33.33%;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(20% - 4rem);
    margin: 2rem;
    padding: 1rem;
  }
`;

class AngelsAmongUs extends Component {
  render() {
    const logo = this.props.data.logo.source_url;
    return (
      <AngelsAmongUsLogo>
        <img src={logo} alt="Earn Your Wings" />
      </AngelsAmongUsLogo>
    );
  }
}

export default AngelsAmongUs;
