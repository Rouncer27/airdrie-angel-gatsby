import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { StandardWrapper } from "../styles/Commons/Wrappers";
import CloudNineLogo from "./CloudNineLogo";

const CloudNineSection = styled.section`
  .cloud-nine-wrapper {
    justify-content: space-around;
  }

  .cloud-nine-headline {
    color: ${props => props.theme.teal};
    font-weight: 300;
  }
`;

class CloudNine extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressWpCloudNineSponsor {
              edges {
                node {
                  id
                  title
                  acf {
                    _aap_link
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
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <CloudNineSection>
              <StandardWrapper>
                <h2 className="cloud-nine-headline">
                  Our Amazing Cloud Nine Sponsors
                </h2>
              </StandardWrapper>
              <StandardWrapper className="cloud-nine-wrapper">
                {data.allWordpressWpCloudNineSponsor.edges.map(sponsor => {
                  const id = sponsor.node.id;
                  const link = sponsor.node.acf._aap_link;
                  const imgUrl =
                    sponsor.node.acf._aap_logo.localFile.childImageSharp.fluid;
                  const imgAlt = sponsor.node.acf._aap_logo.alt_text;

                  return (
                    <CloudNineLogo
                      key={id}
                      link={link}
                      imgUrl={imgUrl}
                      imgAlt={imgAlt}
                    />
                  );
                })}
              </StandardWrapper>
            </CloudNineSection>
          );
        }}
      />
    );
  }
}

export default CloudNine;
