import React, { Component } from "react";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import styled from "styled-components";

import { Link } from "gatsby";
import { StandardWrapper } from "../components/styles/Commons/Wrappers";

const StoriesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const StoryCard = styled.div`
  width: 100%;
  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(33% - 4rem);
    margin: 2rem;
  }
`;

class Stories extends Component {
  render() {
    const allStories = this.props.data.allWordpressWpStory.edges;
    return (
      <Layout>
        <SEO />
        <StandardWrapper>
          <h1>Recent Stories</h1>
          <StoriesContainer>
            {allStories.map(story => {
              return (
                <StoryCard key={story.node.wordpress_id}>
                  <Link to={`stories/${story.node.slug}`}>
                    {story.node.title}
                  </Link>
                </StoryCard>
              );
            })}
          </StoriesContainer>
        </StandardWrapper>
      </Layout>
    );
  }
}

export const query = graphql`
  query StoriesPage($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
    }
    allWordpressWpStory {
      edges {
        node {
          slug
          title
          wordpress_id
        }
      }
    }
  }
`;

export default Stories;
