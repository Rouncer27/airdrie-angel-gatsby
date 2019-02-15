import React, { Component } from "react";
import styled from "styled-components";

const CloudsStyled = styled.div`
  position: absolute;

  width: 15rem;
  height: 15rem;
  transition: all 1.75s ease;
  z-index: 500;

  path {
    transition: all 1.75s ease;
  }

  &.dusk {
    bottom: 25rem;
    right: 5%;

    path.first-cloud {
      fill: #e5c9d7;
    }

    path.last-cloud {
      fill: #e5c9d7;
      opacity: 0.95;
    }
  }

  &.dusk.daytime {
    bottom: 42.5rem;
    right: 45%;

    path.first-cloud {
      fill: #fcfcfc;
    }

    path.last-cloud {
      fill: #fcfcfc;
      opacity: 0.95;
    }
  }

  &.dusk.daytime.sunset {
    bottom: 30.5rem;
    right: 25%;

    path.first-cloud {
      fill: #aec8e3;
    }

    path.last-cloud {
      fill: #aec8e3;
      opacity: 0.95;
    }
  }
  &.dusk.daytime.sunset.night {
    bottom: 30.5rem;
    right: 15%;

    path.first-cloud {
      fill: #a1a8b0;
    }

    path.last-cloud {
      fill: #a1a8b0;
      opacity: 0.95;
    }
  }

  svg {
    width: 100%;
  }
`;

class Clouds extends Component {
  render() {
    const cloudsActiveClass =
      (this.props.time === 0 && "dusk") ||
      (this.props.time === 1 && "dusk daytime") ||
      (this.props.time === 2 && "dusk daytime sunset") ||
      (this.props.time === 3 && "dusk daytime sunset night");
    return (
      <CloudsStyled className={cloudsActiveClass}>
        <svg width="80" viewBox="0 0 42.52 19.84">
          <path
            className="first-cloud"
            fill="#fff"
            d="M38.582,8.005c1.865,0,3.393,1.673,3.393,3.717l0,0c0,2.042-1.527,3.716-3.393,3.716H24.039h-0.484 c-2.676,0-4.847-2.378-4.847-5.309c0-2.932,2.17-5.309,4.847-5.309c0,0,2.242-4.247,7.756-4.247c3.453,0,6.787,1.925,6.787,7.432 H38.582z"
          />
          <path
            className="last-cloud"
            fill="#FCFCFC"
            d="M20.863,11.667c1.908,0,3.471,1.71,3.471,3.8l0,0c0,2.09-1.563,3.8-3.471,3.8H5.998H5.501 c-2.736,0-4.956-2.431-4.956-5.428s2.219-5.428,4.956-5.428c0,0,2.292-4.342,7.929-4.342c3.532,0,6.939,1.968,6.939,7.598H20.863z"
          />
        </svg>
      </CloudsStyled>
    );
  }
}

export default Clouds;
