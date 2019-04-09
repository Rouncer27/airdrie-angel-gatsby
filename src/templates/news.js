import React, { Component } from "react";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import moment from "moment";

import { StandardWrapper } from "../components/styles/Commons/Wrappers";
import HandWings from "../images/handwings.png";

const NewsEventsTitle = styled.div`
  position: relative;
  width: 100%;
  max-width: 75rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto 5rem;
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

const ModifiedStandardWrapper = styled(StandardWrapper)`
  justify-content: flex-start;
`;

const ArticleStyled = styled.article`
  background: ${props => props.theme.teal};
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(50% - 4rem);
  }

  .newsevent__image {
    position: relative;
    min-height: 35rem;

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        object-fit: cover;
        object-position: center center;
      }
    }
  }

  .newsevent__content {
    padding: 2rem;

    &--title {
      h2 {
        margin: 0;
        color: ${props => props.theme.deepYellow};
        line-height: 1.3;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2.4rem;
        }
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 3rem;
        }
      }
    }

    &--meta {
      margin-bottom: 2.5rem;

      p {
        margin: 0;
        color: ${props => props.theme.white};
      }
    }

    &--excerpt {
      margin-bottom: 2.5rem;

      p {
        color: ${props => props.theme.white};
      }
    }

    &--button {
      a {
        display: inline-block;
        padding: 1rem 5rem;
        background: ${props => props.theme.white};
        transition: all 0.3s ease;
        color: ${props => props.theme.navyBlue};

        &:hover {
          background: ${props => props.theme.deepYellow};
          color: ${props => props.theme.white};
        }
      }
    }
  }
`;

class News extends Component {
  render() {
    const metaTitle = this.props.data.wordpressPage.yoast.title;
    const metaDescription = this.props.data.wordpressPage.yoast.metadesc;
    return (
      <Layout>
        <SEO title={metaTitle} description={metaDescription} />
        <div>
          <NewsEventsTitle>
            <h2>News & Events</h2>
          </NewsEventsTitle>
          <ModifiedStandardWrapper>
            {this.props.data.allWordpressPost.edges.map((post, index) => {
              console.log(post);
              return (
                <ArticleStyled key={index} className="newsevent">
                  <div className="newsevent__image">
                    <Img
                      fluid={
                        post.node.acf._aap_featured_image.localFile
                          .childImageSharp.fluid
                      }
                      alt={post.node.title}
                    />
                  </div>
                  <div className="newsevent__content">
                    <div className="newsevent__content--title">
                      <h2>{post.node.title}</h2>
                    </div>
                    <div className="newsevent__content--meta">
                      <p>
                        <span>By {post.node.acf._aap_author} | </span>
                        <span>
                          {moment(post.node.date).format("MMM. D/YY")}
                        </span>
                      </p>
                    </div>
                    <div
                      className="newsevent__content--excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.node.acf._aap_excerpt
                      }}
                    />

                    <div className="newsevent__content--button">
                      <Link to={`/news-events/${post.node.slug}`}>Read</Link>
                    </div>
                  </div>
                </ArticleStyled>
              );
            })}
          </ModifiedStandardWrapper>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query NewsEvents($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      yoast {
        title
        metadesc
      }
    }

    allWordpressPost {
      edges {
        node {
          wordpress_id
          title
          slug
          date
          acf {
            _aap_excerpt
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
      }
    }
  }
`;

export default News;
