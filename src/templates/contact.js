import React, { Component } from "react";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import EmailContent from "../components/sections/ContactPage/EmailContent";
import ContactForm from "../components/sections/ContactPage/ContactForm";

class Contact extends Component {
  render() {
    const emailUs = this.props.data.wordpressPage.acf._aap_email_us;
    const sponsorship = this.props.data.wordpressPage.acf._aap_sponsorship;
    return (
      <Layout>
        <SEO title="Contact The Airdrie Angel - Airdrie Angel Program" />
        <EmailContent data={{ emailUs, sponsorship }} />
        <ContactForm />
      </Layout>
    );
  }
}

export const query = graphql`
  query ContactPage($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _aap_email_us
        _aap_sponsorship
      }
    }
  }
`;

export default Contact;
