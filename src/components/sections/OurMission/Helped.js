import React, { Component } from "react";
import styled from "styled-components";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import Trees from "../SceneParts/Trees";
import PlantOne from "../SceneParts/PlantOne";
import PlantTwo from "../SceneParts/PlantTwo";
import PlantThree from "../SceneParts/PlantThree";

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

  .helped-plant-one {
    top: -5rem;
    bottom: auto;
    right: 0;
    left: 0;
    margin: auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: auto;
      bottom: 3rem;
      left: auto;
      right: 2rem;
    }
  }

  .helped-plant-two {
    top: -5rem;
    bottom: auto;
    right: 0;
    left: 0;
    margin: auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: auto;
      bottom: 3rem;
      right: auto;
      left: 3rem;
    }
  }

  .helped-plant-three {
    top: -5rem;
    bottom: auto;
    right: 0;
    left: 0;
    margin: auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: auto;
      bottom: 3rem;
      right: auto;
      left: 3rem;
    }
  }

  .quoteItem {
    position: relative;
    margin-bottom: 2rem;
    padding: 8rem 0;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 4rem 12rem;
    }

    &__top {
      p {
        margin: 0;
        font-size: 2.8rem;
        font-family: ${props => props.theme.fontSec};

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 3rem;
        }
      }
    }

    &__bot {
      p {
        margin: 0;
        font-size: 1.8rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2rem;
        }
      }
    }
  }
`;

class Helped extends Component {
  render() {
    return (
      <StyledHelped>
        <HelpedIntro
          dangerouslySetInnerHTML={{ __html: this.props.data.helpedIntro }}
        />
        <Trees location="helped-trees" />
        <StandardWrapper>
          <QouteSection>
            {this.props.data.helpedPeople.map((people, index) => {
              let plantIcon = false;
              if ((index + 1) % 2 === 0) {
                plantIcon = <PlantOne location="helped-plant-one" />;
              } else if ((index + 1) % 3 === 0) {
                plantIcon = <PlantTwo location="helped-plant-two" />;
              } else {
                plantIcon = <PlantThree location="helped-plant-three" />;
              }
              return (
                <div key={index} className="quoteItem">
                  <div
                    className="quoteItem__top"
                    dangerouslySetInnerHTML={{ __html: people.big_quote }}
                  />
                  <div
                    className="quoteItem__bot"
                    dangerouslySetInnerHTML={{ __html: people.small_quote }}
                  />
                </div>
              );
            })}
          </QouteSection>
        </StandardWrapper>
      </StyledHelped>
    );
  }
}

export default Helped;
