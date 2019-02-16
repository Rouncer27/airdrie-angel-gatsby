import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import moment from "moment";

import { Link } from "gatsby";
import { StandardWrapper } from "../components/styles/Commons/Wrappers";
import { BigTealButton2 } from "../components/styles/Commons/Buttons";
import Plane from "../components/sections/SceneParts/Plane";

const StoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const StoryCard = styled(Link)`
  position: relative;
  width: 100%;
  padding: 2rem;
  transition: all 0.5s linear;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 0 1rem ${props => props.theme.greyLight};
  overflow: hidden;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(33% - 4rem);
    margin: 2rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    margin: 2rem;
    padding: 5rem;
  }

  &:hover:nth-of-type(4n + 1) {
    box-shadow: 0 0 3rem 0.5rem ${props => props.theme.teal};
  }

  &:hover:nth-of-type(4n + 2) {
    box-shadow: 0 0 3rem 0.5rem ${props => props.theme.deepYellow};
  }

  &:hover:nth-of-type(4n + 3) {
    box-shadow: 0 0 3rem 0.5rem ${props => props.theme.navyBlue};
  }

  &:hover:nth-of-type(4n + 4) {
    box-shadow: 0 0 3rem 0.5rem ${props => props.theme.lightBrown};
  }
`;

const CardTitle = styled.div`
  position: relative;
  z-index: 5;
  h3 {
    position: relative;
    margin: 0;
    margin-top: 1rem;
    color: ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpTablet}) {
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 1.4rem;
    }

    &::before {
      position: absolute;
      top: -0.75rem;
      right: 0;
      left: 0;
      width: 2rem;
      height: 0.25rem;
      margin: 0 auto;
      transition: all 0.5s linear;
      background: ${props => props.theme.black};
      border-radius: 0.5rem;
      content: "";
    }
  }
`;

const CardDate = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 5;

  p {
    margin: 0;
    color: ${props => props.theme.navyBlue};
    font-family: ${props => props.theme.fontSec};
    font-weight: 700;
    text-transform: uppercase;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 3rem;
    }

    &:last-of-type {
      margin: 0;
    }
  }
`;

const CardExcerpt = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
  z-index: 5;

  p {
    color: ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 1.4rem;
    }

    &:last-of-type {
      margin: 0;
    }
  }
`;

const StoriesMainTitle = styled.div`
  position: relative;
  margin: 2rem auto 10rem;
  text-align: center;

  h1 {
    margin-bottom: 2.5rem;
    color: ${props => props.theme.teal};
    font-weight: 700;
    font-family: ${props => props.theme.fontSec};
  }

  .stoires-plane {
    top: auto;
    bottom: -9rem;
  }
`;

const StoriesButton = styled.div`
  width: 100%;
  margin-top: 5rem;
  text-align: center;
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
          <StoriesMainTitle>
            <h1>Recent Stories</h1>
            <Plane location="stoires-plane" />
          </StoriesMainTitle>

          <StoriesContainer>
            {this.state.posts.map(story => {
              return (
                <StoryCard
                  key={story.node.wordpress_id}
                  to={`/stories/${story.node.slug}`}
                >
                  <CardDate>
                    <p>{moment(story.node.date).format("MMM.D.YY")}</p>
                  </CardDate>
                  <CardTitle>
                    <h3
                      dangerouslySetInnerHTML={{ __html: story.node.title }}
                    />
                  </CardTitle>
                  <CardExcerpt
                    dangerouslySetInnerHTML={{
                      __html: story.node.acf._aap_story_excerpt
                    }}
                  />
                </StoryCard>
              );
            })}
          </StoriesContainer>
          <StoriesButton>
            <BigTealButton2
              disabled={noMorePosts}
              onClick={this.loadMoreStoresOnPage}
            >
              Load More Stories
            </BigTealButton2>
          </StoriesButton>
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
          date
          acf {
            _aap_story_excerpt
          }
        }
      }
    }
  }
`;

export default Stories;
