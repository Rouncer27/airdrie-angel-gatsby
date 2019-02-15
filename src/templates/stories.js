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
  constructor(props) {
    super(props);

    this.loadMoreStoresOnPage = this.loadMoreStoresOnPage.bind(this);

    this.state = {
      posts: [],
      currentOnPage: 10
    };
  }

  componentDidMount() {
    const firstTen = this.props.data.allWordpressWpStory.edges.slice(
      0,
      this.state.currentOnPage
    );

    this.setState(prevState => {
      return {
        ...prevState,
        posts: firstTen
      };
    });
  }

  loadMoreStoresOnPage() {
    const nextTen = this.props.data.allWordpressWpStory.edges.slice(
      this.state.currentOnPage,
      this.state.currentOnPage + 10
    );

    this.setState(prevState => {
      return {
        ...prevState,
        posts: prevState.posts.concat(nextTen),
        currentOnPage: prevState.currentOnPage + 10
      };
    });
  }

  render() {
    const noMorePosts =
      this.props.data.allWordpressWpStory.edges.length <=
      this.state.currentOnPage;
    return (
      <Layout>
        <SEO title="Recent Stories" />
        <StandardWrapper>
          <h1>Recent Stories</h1>
          <StoriesContainer>
            {this.state.posts.map((story, index) => {
              return (
                <StoryCard key={story.node.wordpress_id}>
                  <Link to={`/stories/${story.node.slug}`}>
                    {story.node.title}
                  </Link>
                </StoryCard>
              );
            })}
          </StoriesContainer>
          <div>
            <button disabled={noMorePosts} onClick={this.loadMoreStoresOnPage}>
              Load More Stories
            </button>
          </div>
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
