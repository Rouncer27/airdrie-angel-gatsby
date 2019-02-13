import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { StandardWrapper } from "../styles/Commons/Wrappers";
import { BigTealButton, BigTealLink } from "../styles/Commons/Buttons";

const StyledIntroSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(
    to right,
    ${props => props.theme.teal} 0%,
    ${props => props.theme.navyBlue} 100%
  );
`;

const IntroTitle = styled.div`
  width: 100%;

  h2,
  p {
    color: ${props => props.theme.white};
    font-weight: 300;
    text-align: center;
  }

  h2 {
    margin: 0;
    font-size: 4rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 1.8rem;
    text-transform: uppercase;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2.2rem;
    }
  }
`;

const IntroSections = styled.div`
  width: 100%;

  div:nth-child(2) {
    flex-direction: row-reverse;
  }
`;

const IntroSec = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    position: relative;
    max-width: 70rem;
    margin: 5rem auto;
  }

  .intro-title {
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      position: relative;
      padding: 7.5rem 10rem;
      z-index: 500;
    }

    h3,
    p,
    a {
      position: relative;
      color: ${props => props.theme.white};
      z-index: 500;
    }

    a {
      margin-bottom: 5rem;
      @media (min-width: ${props => props.theme.bpTablet}) {
        margin-bottom: 0;
      }
    }

    &__overlay {
      display: none;
      @media (min-width: ${props => props.theme.bpTablet}) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.black};
        opacity: 0.5;
        z-index: 1;
      }
    }
  }

  .intro-image {
    width: 25rem;
    height: 25rem;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;

    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 0%;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }
`;

class IntroSection extends Component {
  render() {
    console.log(this.props);
    return (
      <StyledIntroSection>
        <StandardWrapper>
          <IntroTitle>
            <h2>{this.props.data.introTitle}</h2>
            <p>{this.props.data.introSubTitle}</p>
          </IntroTitle>
          <IntroSections>
            {this.props.data.introInfoSections.map((section, index) => {
              const linkRequ = section.link_required;
              let link = false;

              if (linkRequ !== "none") {
                link =
                  linkRequ === "internal" ? (
                    <BigTealLink to={section.inter_slug}>
                      {section.link_text}
                    </BigTealLink>
                  ) : (
                    <BigTealButton target="_blank" href="https://youtube.com">
                      {section.link_text}
                    </BigTealButton>
                  );
              }

              return (
                <IntroSec key={index} className={`intro-${index}`}>
                  <div className="intro-title">
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                    {link}
                    <div className="intro-title__overlay" />
                  </div>
                  <div className="intro-image">
                    <Img
                      fluid={section.image.localFile.childImageSharp.fluid}
                      alt={section.image.alt_text}
                    />
                  </div>
                </IntroSec>
              );
            })}
          </IntroSections>
        </StandardWrapper>
      </StyledIntroSection>
    );
  }
}

export default IntroSection;
