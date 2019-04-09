import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import Img from "gatsby-image";
import moment from "moment";

import { StandardWrapper } from "../components/styles/Commons/Wrappers";

const InitiativeStyled = styled.article`
  .aapost__title {
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    text-align: center;

    h1 {
      margin: 0;
      color: ${props => props.theme.navyBlue};

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 3rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 5rem;
      }
    }
  }

  .aapost__image {
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    img {
      width: auto;
    }
  }

  .aapost__content {
    width: 100%;
    @media (min-width: ${props => props.theme.bpDesksm}) {
      padding: 1rem 10rem;
    }

    &--meta {
      p {
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.2rem;
        }
      }
    }

    &--wysiwyg {
      img {
        display: inline-block;
        width: auto;
        max-width: 100%;
        padding: 0.5rem;
      }
    }
  }
`;

class Initiative extends Component {
  render() {
    const metaTitle = this.props.data.wordpressWpInitiatives.yoast.title;
    const metaDescription = this.props.data.wordpressWpInitiatives.yoast
      .metadesc;
    return (
      <Layout>
        <SEO title={metaTitle} description={metaDescription} />
        <div>
          <StandardWrapper>
            <InitiativeStyled className="aapost">
              <div className="aapost__title">
                <h1>{this.props.data.wordpressWpInitiatives.title}</h1>
              </div>

              <div className="aapost__image">
                <Img
                  fluid={
                    this.props.data.wordpressWpInitiatives.acf
                      ._app_init_featured_image.localFile.childImageSharp.fluid
                  }
                  alt={
                    this.props.data.wordpressWpInitiatives.acf._app_init_title
                  }
                />
              </div>
              <div className="aapost__content">
                <div className="aapost__content--meta">
                  <p>
                    <span>
                      {
                        this.props.data.wordpressWpInitiatives.acf
                          ._app_init_location
                      }{" "}
                      |{" "}
                    </span>
                    <span>
                      {moment(
                        this.props.data.wordpressWpInitiatives.acf
                          ._app_init_date
                      ).format("dddd, MMMM Do, YYYY")}
                    </span>
                  </p>
                </div>
                <div
                  className="aapost__content--wysiwyg"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.wordpressWpInitiatives.acf
                      ._aap_main_content
                  }}
                />
              </div>
            </InitiativeStyled>
          </StandardWrapper>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query Initiative($slug: String!) {
    wordpressWpInitiatives(slug: { eq: $slug }) {
      yoast {
        title
        metadesc
      }
      title
      slug
      date
      acf {
        _app_init_title
        _app_init_date
        _app_init_location
        _aap_main_content
        _app_init_featured_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Initiative;
