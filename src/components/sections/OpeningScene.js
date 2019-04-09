import React, { Component } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Sun from "./SceneParts/Sun";
import Moon from "./SceneParts/Moon";
import Cloud from "./SceneParts/Cloud";
import Clouds from "./SceneParts/Clouds";
import Sky from "./SceneParts/Sky";
import Hill from "./SceneParts/Hill";
import Hills from "./SceneParts/Hills";
import Mountains from "./SceneParts/Mountains";
import Stars from "./SceneParts/Stars";
import Tress from "./SceneParts/Trees";
import House from "./SceneParts/House";
import Sign from "./SceneParts/Sign";
import WaterTower from "./SceneParts/WaterTower";
import Bike from "./SceneParts/Bike";
import SignNominate from "./SceneParts/SignNominate";
import SignStories from "./SceneParts/SignStories";
import Plane from "./SceneParts/Plane";

const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 60rem;
  overflow: hidden;

  @media (min-width: ${props => props.theme.bpTablet}) {
    height: 70rem;
  }
`;

const StageStyledSign = styled.div`
  position: absolute;
  top: 7rem;
  left: 0;
  right: 0;
  width: 27.5rem;
  margin: auto;
  z-index: 7500;

  @media (min-width: ${props => props.theme.bpTablet}) {
    top: 20rem;
    width: 35rem;
  }

  img {
    width: 100%;
  }
`;

class OpeningScene extends Component {
  constructor(props) {
    super(props);

    this.changeTheSky = this.changeTheSky.bind(this);

    this.state = {
      timeOfDay: ["dusk", "daytime", "sunset", "night"],
      currentPosition: 0
    };
  }

  componentDidMount() {
    const date = new Date();
    const currentHour = date.getHours();
    if (currentHour <= 6) {
      this.setState(prevState => {
        return {
          ...prevState,
          currentPosition: 3
        };
      });
    } else if (currentHour <= 10) {
      this.setState(prevState => {
        return {
          ...prevState,
          currentPosition: 0
        };
      });
    } else if (currentHour <= 16) {
      this.setState(prevState => {
        return {
          ...prevState,
          currentPosition: 1
        };
      });
    } else if (currentHour <= 21) {
      this.setState(prevState => {
        return {
          ...prevState,
          currentPosition: 2
        };
      });
    } else if (currentHour > 21) {
      this.setState(prevState => {
        return {
          ...prevState,
          currentPosition: 3
        };
      });
    }
  }

  changeTheSky() {
    this.setState(prevState => {
      return {
        ...this.state,
        currentPosition:
          prevState.currentPosition < 3 ? prevState.currentPosition + 1 : 0
      };
    });
  }

  changeTheTimeOfDay() {}

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(
              relativePath: { eq: "animation-lifttospirit-min.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 425) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Stage>
              <StageStyledSign>
                <Img
                  fluid={data.placeholderImage.childImageSharp.fluid}
                  alt="The Airdrie Angel Program. Girt From The Heart, Lift To The Spirit."
                />
              </StageStyledSign>
              <div>
                <Sun time={this.state.currentPosition} />
              </div>
              <div>
                <Moon time={this.state.currentPosition} />
              </div>
              <div>
                <Clouds time={this.state.currentPosition} />
              </div>
              <div>
                <Cloud time={this.state.currentPosition} />
              </div>
              <div>
                <Sky
                  time={this.state.currentPosition}
                  changeTheTime={this.changeTheSky}
                />
              </div>
              <div>
                <Stars time={this.state.currentPosition} />
              </div>
              <div>
                <Tress time={this.state.currentPosition} />
              </div>
              <div>
                <Hill />
              </div>
              <div>
                <Hills />
              </div>
              <div>
                <Mountains />
              </div>
              <div>
                <House time={this.state.currentPosition} />
              </div>
              <div>
                <Sign />
              </div>
              <div>
                <Bike time={this.state.currentPosition} />
              </div>
              <div>
                <SignNominate />
              </div>
              <div>
                <SignStories />
              </div>
              <div>
                <WaterTower time={this.state.currentPosition} />
              </div>
              <div>
                <Plane direction="forwards" />
                <Plane direction="reverse" />
              </div>
            </Stage>
          );
        }}
      />
    );
  }
}

export default OpeningScene;
