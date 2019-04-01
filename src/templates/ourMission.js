import React, { Component } from "react";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import What from "../components/sections/OurMission/What";
import Carre from "../components/sections/OurMission/Carre";
import Helped from "../components/sections/OurMission/Helped";
import Team from "../components/sections/OurMission/Team";

class OurMission extends Component {
  render() {
    const metaTitle = this.props.data.wordpressPage.yoast.title;
    const metaDescription = this.props.data.wordpressPage.yoast.metadesc;

    const whatTitle = this.props.data.wordpressPage.acf._aap_what_is_title;
    const whatContent = this.props.data.wordpressPage.acf._aap_what_is_content;
    const whatImage = this.props.data.wordpressPage.acf._aap_what_is_image
      .localFile.childImageSharp.fluid;
    const carreLogo = this.props.data.wordpressPage.acf._aap_the_carre_logo
      .localFile.childImageSharp.fluid;
    const carreImage = this.props.data.wordpressPage.acf._aap_the_carre_image
      .localFile.childImageSharp.fluid;
    const carreStory = this.props.data.wordpressPage.acf._aap_the_carre_story;
    const carreQuote = this.props.data.wordpressPage.acf._aap_the_carre_quote;
    const helpedIntro = this.props.data.wordpressPage.acf._aap_helped_intro;
    const helpedPeople = this.props.data.wordpressPage.acf._aap_who_was_helped;
    const supportTeam = this.props.data.wordpressPage.acf._aap_support_team;
    return (
      <Layout>
        <SEO title={metaTitle} description={metaDescription} />
        <What data={{ whatTitle, whatContent, whatImage }} />
        <Carre data={{ carreLogo, carreImage, carreStory, carreQuote }} />
        <Helped data={{ helpedIntro, helpedPeople }} />
        <Team data={supportTeam} />
      </Layout>
    );
  }
}

export const query = graphql`
  query OurMission($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      yoast {
        title
        metadesc
      }

      acf {
        _aap_what_is_content
        _aap_what_is_title
        _aap_what_is_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _aap_the_carre_story
        _aap_the_carre_quote
        _aap_the_carre_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _aap_the_carre_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _aap_helped_intro
        _aap_who_was_helped {
          big_quote
          small_quote
        }
        _aap_support_team {
          name
          title
          bio
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default OurMission;
