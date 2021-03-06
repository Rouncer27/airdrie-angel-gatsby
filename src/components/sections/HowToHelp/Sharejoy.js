import React, { Component } from "react";
import styled from "styled-components";
import HandWings from "../../../images/handwings.png";
import Trees from "../SceneParts/Trees";
import Tree from "../SceneParts/Tree";
import Sun from "../SceneParts/Sun";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { BigTealLink } from "../../styles/Commons/Buttons";

const ShareJoyStyled = styled.div`
  position: relative;
  margin-top: 5rem;
  padding: 0 2rem 30rem;
  background: linear-gradient(
    to top,
    ${props => props.theme.green} 0%,
    ${props => props.theme.green} 15rem,
    ${props => props.theme.white} 15rem,
    ${props => props.theme.white} 100%
  );

  .sharejoy__wrapper {
    align-items: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      justify-content: space-between;
      max-width: 70rem;
    }
  }

  .our-sun {
    display: none;
    top: 15rem;
    right: 30rem;
    bottom: auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      display: block;
      top: 15rem;
      right: 20rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      top: 15rem;
      right: 30rem;
    }
  }

  .our-mission-trees {
    bottom: 5rem;
    right: 0;
    transition: all 0s linear;

    @media (min-width: ${props => props.theme.bpTablet}) {
      right: 15rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      right: 25rem;
    }
  }

  .our-tree {
    position: absolute;
    bottom: 5rem;
    left: 0rem;
    width: 7.5rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      left: 10rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      left: 25rem;
    }
  }

  .intro-social {
    position: relative;
    width: 100%;
    margin: 1rem auto 0;
    z-index: 500;

    &__list {
      display: flex;
      justify-content: center;

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
          color: ${props => props.theme.teal};
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

const ShareJoyTitle = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 45%;
    margin-bottom: 0;
  }

  h2 {
    color: ${props => props.theme.navyBlue};
  }
`;

const ShareJoyHashTag = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 40%;
  }

  h3 {
    margin: 0;
    color: ${props => props.theme.teal};
    text-align: center;
    line-height: 1;
  }

  ul {
    text-align: center;
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
        <StandardWrapper className="sharejoy__wrapper">
          <ShareJoyTitle>
            <h2>News &amp; Events</h2>
            <BigTealLink to="/news-events/">Read the Latest</BigTealLink>
          </ShareJoyTitle>
          <ShareJoyHashTag>
            <h3>&#35;sharejoy</h3>
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
          </ShareJoyHashTag>
        </StandardWrapper>

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
