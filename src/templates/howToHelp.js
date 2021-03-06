import React, { Component } from "react";
import { graphql } from "gatsby";

import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import ShareJoy from "../components/sections/HowToHelp/Sharejoy";
import Sponsorship from "../components/sections/HowToHelp/Sponsorship";
import BeAnAngel from "../components/sections/HowToHelp/BeAnAngel";
import Initiative from "../components/sections/HowToHelp/Initiative";

class HowToHelp extends Component {
  render() {
    const metaTitle = this.props.data.wordpressPage.yoast.title;
    const metaDescription = this.props.data.wordpressPage.yoast.metadesc;
    const socialMedia = this.props.data.allWordpressAcfOptions.edges[0].node
      .options;
    const sponsorhipTitleTop = this.props.data.wordpressPage.acf
      ._aap_spon_title_top;
    const sponsorhipTitleBottom = this.props.data.wordpressPage.acf
      ._aap_spon_title_bot;
    const sponsorhipContent = this.props.data.wordpressPage.acf
      ._aap_spon_content;
    const sponsorhipPackage = this.props.data.wordpressPage.acf
      ._aap_spon_package.source_url;
    const sponsorhipBGImage = this.props.data.wordpressPage.acf._aap_spon_bg
      .localFile.childImageSharp.fluid;

    const initiatives = this.props.data.allWordpressWpInitiatives.edges;
    return (
      <Layout>
        <SEO title={metaTitle} description={metaDescription} />
        <Sponsorship
          data={{
            sponsorhipTitleTop,
            sponsorhipTitleBottom,
            sponsorhipContent,
            sponsorhipPackage,
            sponsorhipBGImage
          }}
        />
        <BeAnAngel />
        <Initiative data={initiatives} />
        <ShareJoy socialMedia={socialMedia} />
      </Layout>
    );
  }
}

export const query = graphql`
  query HowToHelp($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      yoast {
        title
        metadesc
      }
      acf {
        _aap_spon_title_top
        _aap_spon_title_bot
        _aap_spon_content
        _aap_spon_package {
          source_url
        }
        _aap_spon_bg {
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

    allWordpressWpInitiatives {
      edges {
        node {
          wordpress_id
          slug
          acf {
            _app_init_title
            _app_init_date
            _app_init_location
            _app_init_excerpt
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
    }

    allWordpressAcfOptions {
      edges {
        node {
          options {
            aap_facebook
            aap_instagram
            aap_twitter
            aap_youtube
          }
        }
      }
    }
  }
`;

export default HowToHelp;
