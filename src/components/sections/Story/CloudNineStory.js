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
`;

class CloudNineStory extends Component {
  render() {
    const CloudNineId = this.props.id.sponsor.wordpress_id;
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressWpCloudNineSponsor {
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
            <div>
              {data.allWordpressWpCloudNineSponsor.edges.map(logo => {
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
            </div>
          );
        }}
      />
    );
  }
}

export default CloudNineStory;
