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
  text-align: center;
  z-index: 10000;

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
              <li className="intro-social__list--item intro-social__list--tw">
                <a
                  rel="noopener noreferrer"
                  title="Follow us on Twitter"
                  target="_blank"
                  href={this.props.socialMedia.aap_twitter}
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
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
