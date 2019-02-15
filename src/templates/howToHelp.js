import React, { Component } from "react";
import { graphql } from "gatsby";

import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import ShareJoy from "../components/sections/HowToHelp/Sharejoy";
import Sponsorship from "../components/sections/HowToHelp/Sponsorship";
import BeAnAngel from "../components/sections/HowToHelp/BeAnAngel";
import AngelSign from "../components/sections/HowToHelp/AngelSign";

class HowToHelp extends Component {
  render() {
    // console.log(this.props.data.wordpressPage.acf);
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

    const AngelSignPoster = this.props.data.wordpressPage.acf._aap_angel_sign
      .localFile.childImageSharp.fluid;

    const AngelSignBG = this.props.data.wordpressPage.acf._aap_angel_sign_bg
      .localFile.childImageSharp.fluid;

    return (
      <Layout>
        <SEO />
        <ShareJoy />
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
        <AngelSign data={{ AngelSignPoster, AngelSignBG }} />
      </Layout>
    );
  }
}

export const query = graphql`
  query HowToHelp($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
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

        _aap_angel_sign {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _aap_angel_sign_bg {
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

export default HowToHelp;
