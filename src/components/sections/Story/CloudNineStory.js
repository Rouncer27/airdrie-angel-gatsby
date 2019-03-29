import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledCloudNineLogo = styled.a`
  display: block;
  width: 100%;
  max-width: 35rem;
  margin: auto;
  padding: 3rem;
  box-shadow: 0rem 0rem 3rem ${props => props.theme.deepYellow};

  @media (min-width: ${props => props.theme.bpDesksm}) {
    display: flex;
    align-items: center;
    width: calc(50% - 4rem);
    margin: 2rem;
  }

  .gatsby-image-wrapper {
    width: 100% !important;
  }

  img {
    width: 100% !important;
    height: 100% !important;
  }
`;

class CloudNineStory extends Component {
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
                  return (
                    <StyledCloudNineLogo
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
                    </StyledCloudNineLogo>
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

export default CloudNineStory;
