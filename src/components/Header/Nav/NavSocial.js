import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const SocialWrapper = styled.div`
  width: 100%;
`;

const StyledSocialContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    justify-content: flex-end;
  }

  li {
    margin: 0 2rem;
    font-family: ${props => props.theme.fontAwesome};

    a {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 0.1rem solid ${props => props.theme.navyBlue};

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        align-self: center;
        transform: translate(-50%, -50%);
        font-family: ${props => props.theme.fontAwesome};
        font-size: 2.2rem;
      }

      &:hover {
        color: ${props => props.theme.white};
        border-color: ${props => props.theme.white};
      }
    }
  }

  li:last-of-type {
    margin-right: 0;
  }

  li.aap-twitter a::before {
    content: "\f099";
  }

  li.aap-facebook a::before {
    content: "\f09a";
  }

  li.aap-instagram a::before {
    content: "\f16d";
  }

  li.aap-youtube a::before {
    content: "\f167";
  }
`;

class NavSocial extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SocialMedia {
            wordpressAcfOptions {
              options {
                aap_twitter
                aap_youtube
                aap_facebook
                aap_instagram
              }
            }
          }
        `}
        render={data => {
          const socialTypes = data.wordpressAcfOptions.options;
          const twitter = socialTypes.aap_twitter;
          const facebook = socialTypes.aap_facebook;
          const instagram = socialTypes.aap_instagram;
          const youtube = socialTypes.aap_youtube;
          return (
            <SocialWrapper>
              <StyledSocialContainer>
                {twitter !== "" ? (
                  <li className="aap-twitter">
                    <a target="_blank" href={twitter} />
                  </li>
                ) : (
                  false
                )}
                {facebook !== "" ? (
                  <li className="aap-facebook">
                    <a target="_blank" href={facebook} />
                  </li>
                ) : (
                  false
                )}
                {instagram !== "" ? (
                  <li className="aap-instagram">
                    <a target="_blank" href={instagram} />
                  </li>
                ) : (
                  false
                )}
                {youtube !== "" ? (
                  <li className="aap-youtube">
                    <a target="_blank" href={youtube} />
                  </li>
                ) : (
                  false
                )}
              </StyledSocialContainer>
            </SocialWrapper>
          );
        }}
      />
    );
  }
}

export default NavSocial;
