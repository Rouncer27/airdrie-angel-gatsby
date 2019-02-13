import React, { Component } from "react";
import styled from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const MainFooter = styled.footer`
  padding: 5rem 2rem;
  background: rgba(255, 219, 0, 0.5);
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: center;

  p {
    font-weight: 300;

    span {
      display: block;
    }

    a {
      color: ${props => props.theme.black};
      font-weight: 300;

      &:hover {
        color: ${props => props.theme.navyBlue};
      }
    }
  }
`;

const FooterNav = styled.div`
  margin: 2rem auto;

  a {
    display: block;
    width: 100%;
    max-width: 25rem;
    margin: 0 auto;
    padding: 1rem 0;
    border-bottom: 0.1rem solid ${props => props.theme.lightBrown};
    text-align: center;
    color: ${props => props.theme.lightBrown};
    font-weight: 300;
    font-size: 1.8rem;

    &:hover {
      color: ${props => props.theme.navyBlue};
    }

    &:last-of-type {
      border-bottom: 0rem solid ${props => props.theme.lightBrown};
    }
  }
`;

const FooterSpreadWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;

  h3 {
    color: ${props => props.theme.teal};
    font-family: ${props => props.theme.fontPrim};
    font-weight: 300;
  }
`;

const FooterLogoWrapper = styled.div`
  width: 50%;
  align-self: center;
  max-width: 25rem;
  margin: 2rem 4rem;
`;

class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            wordpressAcfOptions {
              options {
                aap_main_site_logo {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const logoImg =
            data.wordpressAcfOptions.options.aap_main_site_logo.localFile
              .childImageSharp.fluid;
          return (
            <MainFooter>
              <FooterWrapper>
                <FooterSpreadWrapper>
                  <FooterLogoWrapper>
                    <Img fluid={logoImg} alt="The Airdrie Angel Program" />
                  </FooterLogoWrapper>

                  <div>
                    <h3>Spread the word</h3>
                  </div>
                </FooterSpreadWrapper>
                <FooterNav>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/disclaimer">Disclaimer</Link>
                </FooterNav>
                <div>
                  <p>
                    <span>
                      © {new Date().getFullYear()} The Airdrie Angel Program.
                    </span>{" "}
                    Designed and developed by{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://switchbackcreative.ca/"
                    >
                      Switchback Creative
                    </a>{" "}
                    Built with
                    {` `}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.gatsbyjs.org"
                    >
                      Gatsby
                    </a>
                  </p>
                </div>
              </FooterWrapper>
            </MainFooter>
          );
        }}
      />
    );
  }
}

export default Footer;
