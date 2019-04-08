import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { BigTealButton, BigTealLink } from "../../styles/Commons/Buttons";
import HandWings from "../../../images/handwings.png";

const SponsorshipSection = styled.section`
  .sponsorship__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    min-height: 60rem;
    padding: 10rem 0;
  }
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
  padding: 2rem;

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
    font-size: 1.8rem;

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
  margin-top: 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin-top: 10rem;
  }

  a {
    margin-bottom: 2rem;
    min-width: 30rem;
    text-align: center;
  }
`;

const ShareJoyTitle = styled.div`
  position: relative;
  width: 100%;
  max-width: 75rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto 5rem;
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

class Sponsorship extends Component {
  render() {
    return (
      <SponsorshipSection>
        <ShareJoyTitle>
          <h2>How To Help</h2>
        </ShareJoyTitle>

        <div className="sponsorship__container">
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
        </div>
      </SponsorshipSection>
    );
  }
}

export default Sponsorship;
