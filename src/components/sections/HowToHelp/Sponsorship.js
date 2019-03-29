import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { BigTealButton, BigTealLink } from "../../styles/Commons/Buttons";

const SponsorshipSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 60rem;
  padding: 10rem 0;
`;

const SponsorshipBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    object-position: cover;
  }
`;

const SponsorshipContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  h2,
  h3,
  p {
    color: ${props => props.theme.deepYellow};
    text-align: center;
  }

  h2 {
    margin: 0;
    font-family: ${props => props.theme.fontSec};
    font-weight: 300;
    line-height: 1;
  }

  h3 {
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    font-weight: 300;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2rem;
    }
  }
`;

const SponsorshipButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10rem;

  a {
    min-width: 30rem;
    text-align: center;
  }
`;

class Sponsorship extends Component {
  render() {
    return (
      <SponsorshipSection>
        <SponsorshipContent>
          <div>
            <h2>{this.props.data.sponsorhipTitleTop}</h2>
            <h3>{this.props.data.sponsorhipTitleBottom}</h3>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.data.sponsorhipContent
            }}
          />
          <SponsorshipButtons>
            <BigTealButton
              target="_blank"
              href={this.props.data.sponsorhipPackage}
            >
              Sponsorship Pack
            </BigTealButton>
            <BigTealLink to="/contact">Contact Us</BigTealLink>
          </SponsorshipButtons>
        </SponsorshipContent>
        <SponsorshipBackground>
          <Img
            fluid={this.props.data.sponsorhipBGImage}
            alt="The Sponsorship"
          />
        </SponsorshipBackground>
      </SponsorshipSection>
    );
  }
}

export default Sponsorship;
