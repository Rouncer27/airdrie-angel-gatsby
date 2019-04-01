import React, { Component } from "react";
import styled from "styled-components";

const SceneSky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background 0.5s ease;
  background: linear-gradient(0, #131862 0%, #2e4482 90%);
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
    background: linear-gradient(0, #131862 0%, #2e4482 90%);
    opacity: 0;
  }

  &.dusk {
    background: linear-gradient(110deg, #e5c9d7 0%, #fff4bc 50%);

    &::after {
      opacity: 0;
    }

    &::before {
      background: linear-gradient(110deg, #e5c9d7 0%, #fff4bc 50%);
      opacity: 1;
    }
  }

  &.daytime {
    background: linear-gradient(15deg, #fff 0%, #d1f9ff 90%);

    &::before {
      opacity: 0;
    }

    &::after {
      background: linear-gradient(15deg, #fff 0%, #d1f9ff 90%);
      opacity: 1;
    }
  }

  &.sunset {
    background: linear-gradient(35deg, #ffe577 0%, #e79414 90%);

    &::after {
      opacity: 0;
    }

    &::before {
      background: linear-gradient(35deg, #ffe577 0%, #e79414 90%);
      opacity: 1;
    }
  }

  &.night {
    background: linear-gradient(0, #131862 0%, #2e4482 90%);

    &::before {
      opacity: 0;
    }

    &::after {
      background: linear-gradient(0, #131862 0%, #2e4482 90%);
      opacity: 1;
    }
  }
`;

const ChangeTheSky = styled.button`
  display: none;
  position: relative;
  z-index: 5000;
  color: #fff;
  border: 0;
  padding: 1rem 2rem;
  background: #7b6e66;

  &:hover {
    cursor: pointer;
  }
`;

class Sky extends Component {
  render() {
    const classNameSky =
      (this.props.time === 0 ? "dusk" : "") ||
      (this.props.time === 1 ? "dusk daytime" : "") ||
      (this.props.time === 2 ? "dusk daytime sunset" : "") ||
      (this.props.time === 3 ? "dusk daytime sunset night" : "");
    return (
      <div>
        <ChangeTheSky onClick={this.props.changeTheTime}>
          Change The Time of Day
        </ChangeTheSky>
        <SceneSky className={classNameSky} />
      </div>
    );
  }
}

export default Sky;
