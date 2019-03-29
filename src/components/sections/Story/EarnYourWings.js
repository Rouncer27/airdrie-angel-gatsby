import React, { Component } from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const EarnYourWingsLogo = styled.a`
  display: block;
  width: 50%;
  box-shadow: 0rem 0rem 0.1rem ${props => props.theme.lightBrown};

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 33.33%;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    display: flex;
    align-items: center;
    width: calc(25% - 4rem);
    margin: 2rem;
    padding: 2rem;
  }

  .gatsby-image-wrapper {
    width: 100% !important;
  }

  img {
    width: 100% !important;
    height: 100% !important;
  }
`;

class EarnYourWings extends Component {
  render() {
    const CloudNineId = this.props.id.wordpress_id;
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressWpStorySponsor {
              edges {
                node {
                  wordpress_id
                  title
                  acf {
                    _aap_logo {
                      alt_text
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                    _aap_link
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              {data.allWordpressWpStorySponsor.edges.map(logo => {
                if (logo.node.wordpress_id === CloudNineId) {
                  console.log(logo.node.acf._aap_logo.localFile);
                  return (
                    <EarnYourWingsLogo
                      key={logo.node.wordpress_id}
                      href={logo.node.acf._aap_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img
                        fluid={
                          logo.node.acf._aap_logo.localFile.childImageSharp
                            .fluid
                        }
                        alt={logo.node.title}
                      />
                    </EarnYourWingsLogo>
                  );
                }
              })}
            </>
          );
        }}
      />
    );
  }
}

export default EarnYourWings;
