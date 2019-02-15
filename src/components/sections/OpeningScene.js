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
  height: 70rem;
  overflow: hidden;
`;

const StageStyledSign = styled.div`
  position: absolute;
  top: 20rem;
  left: 0;
  right: 0;
  width: 35rem;
  margin: auto;
  z-index: 7500;

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

  changeTheSky() {
    this.setState(prevState => {
      return {
        ...this.state,
        currentPosition:
          prevState.currentPosition < 3 ? prevState.currentPosition + 1 : 0
      };
    });
  }

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
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
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
