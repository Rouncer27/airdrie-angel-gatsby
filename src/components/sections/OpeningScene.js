import React, { Component } from "react";
import styled from "styled-components";

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

const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 75rem;
  overflow: hidden;
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
      <Stage>
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
          <Bike />
        </div>
        <div>
          <WaterTower time={this.state.currentPosition} />
        </div>
      </Stage>
    );
  }
}

export default OpeningScene;
