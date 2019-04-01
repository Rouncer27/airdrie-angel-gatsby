import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { StandardWrapper } from "../styles/Commons/Wrappers";
import { BigTealButton, BigTealLink } from "../styles/Commons/Buttons";

const StandardWrapperChanged = styled(StandardWrapper)`
  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    max-width: 125rem;
  }
`;

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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
    width: calc(50% - 4rem);
    max-width: 70rem;
    margin: 2rem;
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

      img {
        object-fit: cover;
      }
    }
  }

  .intro-social {
    &__list {
      &--item {
        display: inline-block;
        justify-content: center;
        margin-bottom: 0.5rem;
        text-align: center;
        overflow: hidden;
        font-size: 0;

        a {
          display: block;
          position: relative;
          align-self: center;
          width: 5rem;
          height: 5rem;
          margin: 0 0.5rem;
          transition: all 0.35s ease;
          color: ${props => props.theme.navyBlue};
          font-family: ${props => props.theme.fontAwesome};

          &:hover {
            color: ${props => props.theme.deepYellow};
          }

          &::before {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: 0 auto;
            transform: translate(-50%, -50%);
            font-size: 4rem;
          }
        }
      }

      &--fb a {
        &::before {
          content: "\f09a";
        }
      }

      &--ig a {
        &::before {
          content: "\f16d";
        }
      }

      &--tw a {
        &::before {
          content: "\f099";
        }
      }

      &--yt a {
        &::before {
          content: "\f167";
        }
      }
    }
  }
`;

class IntroSection extends Component {
  render() {
    return (
      <StyledIntroSection>
        <StandardWrapperChanged>
          <IntroTitle>
            <h2>{this.props.data.introTitle}</h2>
            <p>{this.props.data.introSubTitle}</p>
          </IntroTitle>
          <IntroSections>
            {this.props.data.introInfoSections.map((section, index) => {
              const linkRequ = section.link_required;
              let link = false;
              if (linkRequ !== "none") {
                if (linkRequ === "internal") {
                  link = (
                    <BigTealLink to={section.inter_slug}>
                      {section.link_text}
                    </BigTealLink>
                  );
                } else if (linkRequ === "external") {
                  link = (
                    <BigTealButton
                      rel="noopener noreferrer"
                      target="_blank"
                      href={section.external}
                    >
                      {section.link_text}
                    </BigTealButton>
                  );
                }
              } else {
                link = (
                  <div className="intro-social">
                    <ul className="intro-social__list">
                      <li className="intro-social__list--item intro-social__list--fb">
                        <a
                          rel="noopener noreferrer"
                          title="Follow us on Facebook"
                          target="_blank"
                          href={this.props.socialMedia.aap_facebook}
                        >
                          Facebook
                        </a>
                      </li>
                      <li className="intro-social__list--item intro-social__list--ig">
                        <a
                          rel="noopener noreferrer"
                          title="Follow us on Instagram"
                          target="_blank"
                          href={this.props.socialMedia.aap_instagram}
                        >
                          Instagram
                        </a>
                      </li>
                      <li className="intro-social__list--item intro-social__list--yt">
                        <a
                          rel="noopener noreferrer"
                          title="Follow us on Youtube"
                          target="_blank"
                          href={this.props.socialMedia.aap_youtube}
                        >
                          Youtube
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              }

              return (
                <IntroSec key={index} className={`intro-${index}`}>
                  <div className="intro-title">
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                    {link}
                  </div>
                  <div className="intro-image">
                    <Img
                      fluid={section.image.localFile.childImageSharp.fluid}
                      alt={section.image.alt_text}
                    />
                  </div>
                  <div className="intro-title__overlay" />
                </IntroSec>
              );
            })}
          </IntroSections>
        </StandardWrapperChanged>
      </StyledIntroSection>
    );
  }
}

export default IntroSection;
