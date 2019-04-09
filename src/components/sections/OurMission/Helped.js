import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import Trees from "../SceneParts/Trees";

const StyledHelped = styled.div`
  position: relative;

  .helped-trees {
    top: -5rem;
    bottom: auto;
    right: auto;
    left: -20rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: -12.5rem;
      left: -30rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      top: -12.5rem;
      left: -17.5%;
    }
  }
`;

const HelpedIntro = styled.div`
  padding: 8rem 2rem;
  background: ${props => props.theme.teal};

  p {
    width: 100%;
    max-width: 70rem;
    margin: 2rem auto;
    color: ${props => props.theme.greyLight};
    font-size: 1.8rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2.2rem;
    }
  }
`;

const QouteSection = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 5rem 2rem;

  .quotesec__title {
    text-align: center;
    color: ${props => props.theme.navyBlue};
  }

  .quotesec__bubbles {
    position: relative;
    width: 100%;
    max-width: 75rem;
    min-height: 75rem;
    margin: 5rem auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      height: 70rem;
      min-height: 70rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 85rem;
    }

    &--item {
      position: relative;
      width: 22rem;
      margin: 0 auto;

      @media (min-width: ${props => props.theme.bpTablet}) {
        position: absolute;
        width: 22rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 25rem;
      }
    }

    .quote-one {
      @media (min-width: ${props => props.theme.bpTablet}) {
        top: 0;
        left: 10rem;
      }
    }

    .quote-two {
      @media (min-width: ${props => props.theme.bpTablet}) {
        top: 0;
        right: 10rem;
      }
    }

    .quote-three {
      @media (min-width: ${props => props.theme.bpTablet}) {
        top: 25rem;
        left: 0;
      }
    }

    .quote-four {
      @media (min-width: ${props => props.theme.bpTablet}) {
        top: 25rem;
        right: 0;
      }
    }

    .quote-five {
      @media (min-width: ${props => props.theme.bpTablet}) {
        top: 50rem;
        left: 10rem;
      }
    }

    .quote-six {
      @media (min-width: ${props => props.theme.bpTablet}) {
        top: 50rem;
        right: 10rem;
      }
    }

    .quote-seven {
      display: none;

      @media (min-width: ${props => props.theme.bpTablet}) {
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

class Helped extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            bubbleOne: file(relativePath: { eq: "Speech-bubbles-01.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            bubbleTwo: file(relativePath: { eq: "Speech-bubbles-02.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            bubbleThree: file(relativePath: { eq: "Speech-bubbles-03.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            bubbleFour: file(relativePath: { eq: "Speech-bubbles-04.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            bubbleFive: file(relativePath: { eq: "Speech-bubbles-05.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            bubbleSix: file(relativePath: { eq: "Speech-bubbles-06.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            middleImage: file(
              relativePath: { eq: "Speech-bubbles-centre-08.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          console.log(data);
          return (
            <StyledHelped>
              <HelpedIntro
                dangerouslySetInnerHTML={{
                  __html: this.props.data.helpedIntro
                }}
              />
              <Trees location="helped-trees" />
              <StandardWrapper>
                <QouteSection>
                  <div className="quotesec__title">
                    <h2>
                      Here are just a few of the situations that people in the
                      Airdrie Angel Program have faced...
                    </h2>
                  </div>
                  <div className="quotesec__bubbles">
                    <div className="quotesec__bubbles--item quote-one">
                      <Img
                        fluid={data.bubbleOne.childImageSharp.fluid}
                        alt="The Airdrie Angel Program. A Father of two starting over after an abusive relationship."
                      />
                    </div>
                    <div className="quotesec__bubbles--item quote-two">
                      <Img
                        fluid={data.bubbleTwo.childImageSharp.fluid}
                        alt="The Airdrie Angel Program. A girl's best friend whose father had a heart attack and could't work.."
                      />
                    </div>
                    <div className="quotesec__bubbles--item quote-three">
                      <Img
                        fluid={data.bubbleThree.childImageSharp.fluid}
                        alt="The Airdrie Angel Program. An unborn baby with a major heart defect."
                      />
                    </div>
                    <div className="quotesec__bubbles--item quote-four">
                      <Img
                        fluid={data.bubbleFour.childImageSharp.fluid}
                        alt="The Airdrie Angel Program. A Mother of siz in hiding from her ausive husband."
                      />
                    </div>
                    <div className="quotesec__bubbles--item quote-five">
                      <Img
                        fluid={data.bubbleFive.childImageSharp.fluid}
                        alt="The Airdrie Angel Program. Stories are shared on Facebook and published on Thursdays!."
                      />
                    </div>
                    <div className="quotesec__bubbles--item quote-six">
                      <Img
                        fluid={data.bubbleSix.childImageSharp.fluid}
                        alt="The Airdrie Angel Program. A Woman that went in for laser eye surgery and they found a brain tumor."
                      />
                    </div>

                    <div className="quotesec__bubbles--item quote-seven">
                      <Img
                        fluid={data.middleImage.childImageSharp.fluid}
                        alt="The Airdrie Angel Program. Man never made any material as resilient as the human spirit."
                      />
                    </div>
                  </div>
                </QouteSection>
              </StandardWrapper>
            </StyledHelped>
          );
        }}
      />
    );
  }
}

export default Helped;
