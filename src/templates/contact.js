import React, { Component } from "react";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import EmailContent from "../components/sections/ContactPage/EmailContent";
import ContactForm from "../components/sections/ContactPage/ContactForm";

class Contact extends Component {
  render() {
    const metaTitle = this.props.data.wordpressPage.yoast.title;
    const metaDescription = this.props.data.wordpressPage.yoast.metadesc;
    const emailUs = this.props.data.wordpressPage.acf._aap_email_us;
    const sponsorship = this.props.data.wordpressPage.acf._aap_sponsorship;
    return (
      <Layout>
        <SEO title={metaTitle} description={metaDescription} />
        <EmailContent data={{ emailUs, sponsorship }} />
        <ContactForm />
      </Layout>
    );
  }
}

export const query = graphql`
  query ContactPage($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      yoast {
        title
        metadesc
      }
      acf {
        _aap_email_us
        _aap_sponsorship
      }
    }
  }
`;

export default Contact;
