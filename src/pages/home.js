import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

class Home extends Component {
  render() {
    // console.log(this.props);
    const acf = this.props.data.wordpressPage.acf
      ? this.props.data.wordpressPage.acf
      : {};

    const introTitle = acf._aap_intro_main_title
      ? acf._aap_intro_main_title
      : false;
    const introSubTitle = acf._aap_intro_sub_title
      ? acf._aap_intro_sub_title
      : false;
    const introInfoSections = acf._aap_intro_info_secs
      ? acf._aap_intro_info_secs
      : [];

    return (
      <Layout>
        <SEO
          title="Airdrie Angel - The Airdrie Angel Program."
          description="A gift from the heart, a lift to the spirit. Airdrie Angel is a grassroots organization that is completely community based."
          keywords={[`gatsby`, `application`, `react`]}
        />
        <h1>{this.props.data.wordpressPage.title}</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <div>
          <h2>{introTitle}</h2>
          <p>{introSubTitle}</p>
        </div>
      </Layout>
    );
  }
}

export const homeQuery = graphql`
  query HomePageTemplateQuery($id: Int) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      wordpress_id
      acf {
        _aap_intro_main_title
        _aap_intro_sub_title
        _aap_intro_info_secs {
          title
          content
          link_required
          external
          link_text
          wordpress_internal
        }
      }
    }
  }
`;

export default Home;
