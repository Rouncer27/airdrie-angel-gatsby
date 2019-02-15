import React, { Component } from "react";

import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import ShareJoy from "../components/sections/HowToHelp/Sharejoy";
import Sponsorship from "../components/sections/HowToHelp/Sponsorship";

class HowToHelp extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <ShareJoy />
        <Sponsorship />
      </Layout>
    );
  }
}

export default HowToHelp;
