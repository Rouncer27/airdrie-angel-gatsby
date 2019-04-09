import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import Img from "gatsby-image";
import moment from "moment";

import { StandardWrapper } from "../components/styles/Commons/Wrappers";

const PostStyled = styled.article`
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

class Post extends Component {
  render() {
    const metaTitle = this.props.data.wordpressPost.yoast.title;
    const metaDescription = this.props.data.wordpressPost.yoast.metadesc;
    return (
      <Layout>
        <SEO title={metaTitle} description={metaDescription} />
        <div>
          <StandardWrapper>
            <PostStyled className="aapost">
              <div className="aapost__title">
                <h1>{this.props.data.wordpressPost.title}</h1>
              </div>

              <div className="aapost__image">
                <Img
                  fluid={
                    this.props.data.wordpressPost.acf._aap_featured_image
                      .localFile.childImageSharp.fluid
                  }
                  alt={this.props.data.wordpressPost.title}
                />
              </div>
              <div className="aapost__content">
                <div className="aapost__content--meta">
                  <p>
                    <span>
                      By {this.props.data.wordpressPost.acf._aap_author} |{" "}
                    </span>
                    <span>
                      {moment(this.props.data.wordpressPost.date).format(
                        "MMM. D/YY"
                      )}
                    </span>
                  </p>
                </div>
                <div
                  className="aapost__content--wysiwyg"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.wordpressPost.acf._aap_main_content
                  }}
                />
              </div>
            </PostStyled>
          </StandardWrapper>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query Post($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      yoast {
        title
        metadesc
      }
      title
      slug
      date
      acf {
        _aap_author
        _aap_main_content
        _aap_featured_image {
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
    allWordpressPost {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export default Post;
