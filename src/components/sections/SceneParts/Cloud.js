import React, { Component } from "react";
import styled from "styled-components";

const CloudStyled = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  transition: all 1.75s ease;
  z-index: 500;

  path {
    transition: all 1.75s ease;
  }

  &.dusk {
    bottom: 27rem;
    left: 40%;

    path {
      fill: #e5c9d7;
    }
  }

  &.dusk.daytime {
    bottom: 52.5rem;
    left: 30%;

    path {
      fill: #fcfcfc;
    }
  }

  &.dusk.daytime.sunset {
    bottom: 30.5rem;
    left: 55%;

    path {
      fill: #aec8e3;
    }
  }
  &.dusk.daytime.sunset.night {
    bottom: 35rem;
    left: 15%;

    path {
      fill: #a1a8b0;
    }
  }

  svg {
    width: 100%;
  }
`;

class Cloud extends Component {
  render() {
    const cloudsActiveClass =
      (this.props.time === 0 && "dusk") ||
      (this.props.time === 1 && "dusk daytime") ||
      (this.props.time === 2 && "dusk daytime sunset") ||
      (this.props.time === 3 && "dusk daytime sunset night");
    return (
      <CloudStyled className={cloudsActiveClass}>
        <svg id="Layer_1" width="80" viewBox="0 0 287.89 172.44">
          <path
            fill="#fff"
            d="M49.27,172.44H258.66s43.11-24.64,24.63-67.75-55.43-43.11-55.43-43.11S221.71,0,154,0,67.74,55.43,67.74,55.43,0,55.43,0,110.85,49.27,172.44,49.27,172.44Z"
          />
        </svg>
      </CloudStyled>
    );
  }
}

export default Cloud;
