import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const LogoContainer = styled.div`
  width: 100%;
  max-width: 25rem;
`;

class NavLogo extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query MainLogo {
            wordpressAcfOptions {
              options {
                aap_twitter
                aap_youtube
                aap_facebook
                aap_instagram
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
          console.log(data);
          return (
            <LogoContainer>
              <Link to="/">
                <Img
                  fluid={
                    data.wordpressAcfOptions.options.aap_main_site_logo
                      .localFile.childImageSharp.fluid
                  }
                  alt="Airdrie Angel"
                />
              </Link>
            </LogoContainer>
          );
        }}
      />
    );
  }
}

export default NavLogo;
