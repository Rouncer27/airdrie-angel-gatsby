import React, { Component } from "react";
import styled from "styled-components";

const SunShine = styled.div`
  position: absolute;
  bottom: 10rem;
  right: 5rem;
  width: 15rem;
  height: 15rem;
  transition: all 1.75s ease;
  z-index: 100;

  #sun-ring-out,
  #sun-ring-in,
  #sun {
    transition: all 1.75s ease;
  }

  &.dusk {
    bottom: 20rem;
    right: 5rem;
    #sun {
      fill: #ffbc57;
    }
    #sun-ring-in {
      fill: #ffdead;
    }
    #sun-ring-out {
      fill: #ffdead;
    }
  }

  &.dusk.daytime {
    bottom: 50rem;
    right: 50%;

    #sun {
      fill: #f9ffa0;
    }
    #sun-ring-in {
      fill: #f7ff71;
    }
    #sun-ring-out {
      fill: #f7ff71;
    }
  }

  &.dusk.daytime.sunset {
    right: 80%;
    bottom: 10rem;
    #sun {
      fill: #fe5b35;
    }
    #sun-ring-in {
      fill: #dc6d20;
    }
    #sun-ring-out {
      fill: #dc6d20;
    }
  }

  &.dusk.daytime.sunset.night {
    bottom: -100rem;
    right: 110%;
    opacity: 0;
  }
`;

class Sun extends Component {
  render() {
    const classNameSun =
      (this.props.time === 0 && "dusk") ||
      (this.props.time === 1 && "dusk daytime") ||
      (this.props.time === 2 && "dusk daytime sunset") ||
      (this.props.time === 3 && "dusk daytime sunset night");

    console.log(classNameSun);

    return (
      <SunShine className={classNameSun}>
        <svg width="150" viewBox="0 0 90.71 90.71">
          <circle
            id="sun-ring-out"
            opacity="0.1"
            fill="#FFECDC"
            cx="45.355"
            cy="45.354"
            r="43.212"
          />
          <circle
            id="sun-ring-in"
            opacity="0.3"
            fill="#FFEBDE"
            cx="45.355"
            cy="45.354"
            r="31.131"
          />
          <circle id="sun" fill="#f9db5a" cx="45.355" cy="45.354" r="21.374" />
        </svg>
      </SunShine>
    );
  }
}

export default Sun;
