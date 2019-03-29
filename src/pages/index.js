import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/Header/seo";
import OpeningScene from "../components/sections/OpeningScene";
import IntroSection from "../components/sections/IntroSection";
import Family from "../components/sections/Family";
import CloudNine from "../components/sections/CloudNine";
import Succulent from "../components/sections/Succulent";
import GiftLift from "../components/sections/GiftLift";

class Index extends Component {
  render() {
    const socialMedia = this.props.data.allWordpressAcfOptions.edges[0].node
      .options;

    const acf = this.props.data.wordpressPage.acf;

    const introTitle = acf._aap_intro_main_title;
    const introSubTitle = acf._aap_intro_sub_title;
    const introInfoSections = acf._aap_intro_info_secs;

    const cloudNine = acf._att_cloud_nine_sponsors;

    const famHelpedTotal = acf._aap_fam_helped;
    const famHelpedContent = acf._aap_fam_helped_content;
    const famHelpedMoney = acf._aap_fam_helped_money;
    const famHelpedMoneyContent = acf._aap_fam_helped_money_content;

    const succulentTitle = acf._aap_why_succulent_title;
    const succulentContent = acf._app_why_succulent_content;
    const succulentLogo = acf._aap_why_succulent_logo;
    const succulentImage = acf._aap_succulent_image;

    const giftLiftImage = acf._aap_gift_lift;

    return (
      <Layout>
        <SEO
          title="Airdrie Angel - The Airdrie Angel Program."
          description="A gift from the heart, a lift to the spirit. Airdrie Angel is a grassroots organization that is completely community based."
          keywords={[`gatsby`, `application`, `react`]}
        />
        <OpeningScene />
        <IntroSection
          data={{ introTitle, introSubTitle, introInfoSections }}
          socialMedia={socialMedia}
        />
        <Family
          data={{
            famHelpedTotal,
            famHelpedContent,
            famHelpedMoney,
            famHelpedMoneyContent
          }}
        />
        <CloudNine cloudNine={cloudNine} />
        <Succulent
          data={{
            succulentTitle,
            succulentContent,
            succulentLogo,
            succulentImage
          }}
        />
        <GiftLift data={giftLiftImage} />
      </Layout>
    );
  }
}

export const homeQuery = graphql`
  {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        _aap_intro_main_title
        _aap_intro_sub_title
        _aap_intro_info_secs {
          title
          content
          link_required
          external
          inter_slug
          link_text
          image {
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

        _aap_fam_helped
        _aap_fam_helped_content
        _aap_fam_helped_money
        _aap_fam_helped_money_content

        _att_cloud_nine_sponsors {
          current {
            wordpress_id
          }
        }

        _aap_why_succulent_title
        _app_why_succulent_content
        _aap_why_succulent_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _aap_succulent_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _aap_gift_lift {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 641) {
                ...GatsbyImageSharpFluid
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

export default Index;
