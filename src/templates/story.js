import React, { Component } from "react";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import styled from "styled-components";

import { StandardWrapper } from "../components/styles/Commons/Wrappers";

class Story extends Component {
  render() {
    const storyTitle = this.props.data.wordpressWpStory.title;
    return (
      <Layout>
        <SEO />
        <StandardWrapper>
          <h1>{storyTitle}</h1>
        </StandardWrapper>
      </Layout>
    );
  }
}

export const query = graphql`
  query Story($slug: String!) {
    wordpressWpStory(slug: { eq: $slug }) {
      title
    }
  }
`;

export default Story;
