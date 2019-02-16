import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import moment from "moment";

import { StandardWrapper } from "../components/styles/Commons/Wrappers";
import { StandardParagraph } from "../components/styles/Commons/Paragraphs";
import CloudNineStory from "../components/sections/Story/CloudNineStory";
import SoaringSpirit from "../components/sections/Story/SoaringSpirit";
import EarnYourWings from "../components/sections/Story/EarnYourWings";
import AngelsAmongUs from "../components/sections/Story/AngelsAmongUs";

import Hills from "../components/sections/SceneParts/Hills";
import Sign from "../components/sections/SceneParts/Sign";
import Trees from "../components/sections/SceneParts/Trees";
import Bike from "../components/sections/SceneParts/Bike";

const StoryTitle = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    position: relative;
    font-family: ${props => props.theme.fontSec};
    font-weight: 700;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 4rem;
    }

    &::before {
      position: absolute;
      bottom: -1.1rem;
      right: 0;
      left: 0;
      width: 7.5rem;
      height: 0.25rem;
      margin: 0 auto;
      transition: all 0.5s linear;
      background: ${props => props.theme.black};
      border-radius: 0.5rem;
      content: "";
    }
  }

  p {
    font-weight: 700;
    font-family: ${props => props.theme.fontSec};

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 4rem;
    }
  }
`;

const StoryContent = styled(StandardParagraph)`
  width: 100%;
  max-width: 60rem;
  margin: 4rem auto;
`;

const StoryVideoBackground = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 5rem;
  background: linear-gradient(
    to top,
    ${props => props.theme.teal} 15rem,
    ${props => props.theme.white} 15rem,
    ${props => props.theme.white} 100%
  );

  .bike-story-page {
    width: 12rem;
    right: 12%;
    bottom: 5rem;
    z-index: 6001;
    transform: rotate(-1deg);
  }

  .story-page {
    bottom: 0;
    z-index: 1;

    svg {
      path {
        fill: ${props => props.theme.teal};
      }
    }
  }
`;

const StoryVideo = styled.div`
  position: relative;
  width: 100%;
  max-width: 55rem;
  margin: 4rem auto 0;
  transform: translateY(-6rem);
  z-index: 2;

  iframe {
    max-width: 100% !important;

    body {
      background-color: ${props => props.theme.teal} !important;
    }
  }
`;

const CloudNineSponsorStyled = styled.div`
  width: 100%;
  margin: 4rem auto;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(100% - 50%);
    margin: 4rem 25%;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(100% - 50%);
    margin: 4rem 25%;
  }

  h2 {
    margin-bottom: 5rem;
    text-align: center;
    color: ${props => props.theme.teal};
    font-family: ${props => props.theme.fontSec};
    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 5rem;
    }
  }
`;

const StoryThankYou = styled.div`
  width: 100%;
  margin-top: 5rem;
  text-align: center;

  p {
    margin: 0;
    color: ${props => props.theme.navyBlue};
    font-family: ${props => props.theme.fontSec};

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 3rem;
    }
  }
`;

const LogosSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem auto;
  width: 100%;
`;

const LogosTitle = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem auto 0;

  .soaring-title {
    margin: 0;
    color: ${props => props.theme.teal};
    font-family: ${props => props.theme.fontSec};

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 4rem;
    }
  }

  .earn-title {
    margin: 0;
    color: ${props => props.theme.teal};
    font-family: ${props => props.theme.fontSec};

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 3rem;
    }
  }

  .angels-title {
    margin: 0;
    color: ${props => props.theme.teal};
    font-family: ${props => props.theme.fontSec};

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 2.5rem;
    }
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;
`;

class Story extends Component {
  render() {
    const storyTitle = this.props.data.wordpressWpStory.title;
    const storyDate = this.props.data.wordpressWpStory.date;
    const storyContent = this.props.data.wordpressWpStory.acf._aap_story;
    const storyVideo = this.props.data.wordpressWpStory.acf._app_video_link;
    const cloudNineSponsorIds = this.props.data.wordpressWpStory.acf
      ._aap_cloud_9_sponsor;
    const soaringSpirits = this.props.data.wordpressWpStory.acf
      ._aap_soaring_spirits;

    const earnYourWings = this.props.data.wordpressWpStory.acf
      ._aap_earn_your_wings;

    const angelsAmong = this.props.data.wordpressWpStory.acf
      ._aap_angels_among_us;

    return (
      <Layout>
        <SEO />
        <div>
          <StandardWrapper>
            <StoryTitle>
              <h1 dangerouslySetInnerHTML={{ __html: storyTitle }} />
              <p>{moment(storyDate).format("MMMM D YYYY")}</p>
            </StoryTitle>
            <StoryContent dangerouslySetInnerHTML={{ __html: storyContent }} />
          </StandardWrapper>
          <StoryVideoBackground>
            <StoryVideo dangerouslySetInnerHTML={{ __html: storyVideo }} />
            <Sign />
            <Bike location="bike-story-page" />
            <Trees location="trees-story-page" />
            <Hills location="story-page" />
          </StoryVideoBackground>
          <StandardWrapper>
            <StoryThankYou>
              <p>
                To our amazing sponsors, we say <span>Thank You!</span>
              </p>
              <p>Without you, this would not be possible.</p>
            </StoryThankYou>
            <CloudNineSponsorStyled>
              <div>
                <h2>Cloud Nine Sponsor</h2>
              </div>
              <div>
                {cloudNineSponsorIds &&
                  cloudNineSponsorIds.map(cloudNine => {
                    return (
                      <CloudNineStory
                        key={cloudNine}
                        id={cloudNine}
                        className="logo-item"
                      />
                    );
                  })}
              </div>
            </CloudNineSponsorStyled>

            <LogosSections>
              <LogosTitle>
                <h3 className="soaring-title">Soaring Spirits Sponsors</h3>
              </LogosTitle>
              <LogosWrapper>
                {soaringSpirits &&
                  soaringSpirits.map((soaring, index) => {
                    return <SoaringSpirit data={soaring} key={index} />;
                  })}
              </LogosWrapper>
            </LogosSections>

            <LogosSections>
              <LogosTitle>
                <h3 className="earn-title">Earn Your Wings Sponsors</h3>
              </LogosTitle>
              <LogosWrapper>
                {earnYourWings &&
                  earnYourWings.map((wing, index) => {
                    return <EarnYourWings data={wing} key={index} />;
                  })}
              </LogosWrapper>
            </LogosSections>

            <LogosSections>
              <LogosTitle>
                <h3 className="angels-title">Angels Among Us Sponsors</h3>
              </LogosTitle>
              <LogosWrapper>
                {angelsAmong &&
                  angelsAmong.map((angel, index) => {
                    return <AngelsAmongUs data={angel} key={index} />;
                  })}
              </LogosWrapper>
            </LogosSections>
          </StandardWrapper>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query Story($slug: String!) {
    wordpressWpStory(slug: { eq: $slug }) {
      title
      date
      acf {
        _aap_story
        _app_video_link
        _aap_cloud_9_sponsor {
          sponsor {
            wordpress_id
          }
        }
        _aap_soaring_spirits {
          logo {
            source_url
          }
          link
        }

        _aap_earn_your_wings {
          logo {
            source_url
          }
          link
        }

        _aap_angels_among_us {
          logo {
            source_url
          }
        }
      }
    }
  }
`;

export default Story;
