import React, { Component } from "react";
import styled from "styled-components";

const SceneSky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background 0.5s ease;
  background: linear-gradient(0, #1e2b58 0%, #253569 90%);
  z-index: 1;

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: opacity 1.75s linear;
    opacity: 0;
  }

  &.dusk {
    &::before {
      background: linear-gradient(90deg, #45385b 0%, #fff4bc 90%);
      opacity: 1;
    }
  }

  &.daytime {
    &::after {
      background: linear-gradient(15deg, #fff 0%, #d1f9ff 90%);
      opacity: 1;
    }
  }

  &.sunset {
    &::before {
      background: linear-gradient(35deg, #ffe577 0%, #e79414 90%);
      opacity: 1;
    }
  }

  &.night {
    &::after {
      background: linear-gradient(0, #131862 0%, #2e4482 90%);
      opacity: 1;
    }
  }
`;

const ChangeTheSky = styled.button`
  position: relative;
  z-index: 5000;
  color: #000;
`;

class Sky extends Component {
  render() {
    const classNameSky =
      (this.props.time === 0 && "dusk") ||
      (this.props.time === 1 && "daytime") ||
      (this.props.time === 2 && "sunset") ||
      (this.props.time === 3 && "night");
    console.log(this.props);
    return (
      <div>
        <ChangeTheSky onClick={this.props.changeTheTime}>
          Change The Sky!
        </ChangeTheSky>
        <SceneSky className={classNameSky} />
      </div>
    );
  }
}

export default Sky;
