import React, { Component } from "react";
import styled from "styled-components";

const WaterTowerStyled = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 30%;
  width: 10rem;
  z-index: 3000;

  #tower-full {
    .cls-1 {
      fill: #676767;
    }

    .cls-2 {
      fill: #676868;
    }

    .cls-3 {
      fill: #989898;
    }
  }

  #airdrietower-name {
    path {
      transition: all 1.75s ease;
      fill: #fff;
    }
  }

  &.night {
    #airdrietower-name {
      path:nth-of-type(2n + 2) {
        fill: #ffdb00;
      }

      path:nth-of-type(2n + 1) {
        fill: #001f5b;
      }
    }
  }
`;

class WaterTower extends Component {
  render() {
    const towerActiveClass = this.props.time === 3 ? "night" : "";
    return (
      <WaterTowerStyled className={towerActiveClass}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 165.38 587.06"
        >
          <defs />
          <g id="airdrietower">
            <g id="tower-full">
              <polyline
                className="cls-1"
                points="150.07 587.06 15.37 587.06 35.04 514.99 58.41 398.76 62.09 245.63 48.06 212.87 85.46 201.82 120.29 211.3 104.52 244.89 104.52 398.84 124.19 514.91"
              />
              <rect className="cls-2" x="81.69" width="6.41" height="62.66" />
              <path
                className="cls-3"
                d="M165.38,131.6c0,49.41-37,89.47-82.69,89.47a77.57,77.57,0,0,1-41.33-12C16.64,193.64,0,164.72,0,131.6,0,82.18,37,42.12,82.69,42.12S165.38,82.18,165.38,131.6Z"
              />
            </g>
            <g id="airdrietower-name">
              <path
                className="cls-4"
                d="M37.66,88.7l12.25,17.55-4.35,1.26-2.92-4.28L36.43,105l-.06,5.15-4.1,1.19.45-21.24Zm-1.31,4.61-.1,0-.11,8.19,4.71-1.37Z"
              />
              <path className="cls-4" d="M57,104.92l-4.05.82-4-19.88,4-.82Z" />
              <path
                className="cls-4"
                d="M76.49,102.52l-4.42.44-4.58-7.29-2.64.27.76,7.66-4.08.4-2-20.17,7.52-.75c2.24-.22,3.92.16,5,1.12A5.76,5.76,0,0,1,74,88.13q.41,4.19-2.76,6.1ZM66.62,92.36C69,92.12,70,91,69.82,89a2.38,2.38,0,0,0-1-2,4.2,4.2,0,0,0-2.57-.36L64,86.88l.57,5.68Z"
              />
              <path
                className="cls-4"
                d="M79.27,102.44l.42-20.27,6.8.14q4.91.1,7.21,2.72c1.54,1.74,2.27,4.18,2.21,7.31a11,11,0,0,1-2.68,7.59c-1.72,1.84-4.25,2.72-7.61,2.65ZM85.5,99.1c2.14,0,3.7-.5,4.66-1.62a7.84,7.84,0,0,0,1.51-5c0-2.45-.37-4.16-1.26-5.15a5.75,5.75,0,0,0-4.34-1.55l-2.33,0-.27,13.33Z"
              />
              <path
                className="cls-4"
                d="M113.9,106l-4.38-.79L107.12,97l-2.61-.48-1.37,7.58-4-.73,3.61-19.95,7.44,1.35q3.33.6,4.54,2.45a5.71,5.71,0,0,1,.77,4.31c-.49,2.76-1.94,4.46-4.33,5.11Zm-6.7-12.48q3.45.61,4-2.38a2.38,2.38,0,0,0-.46-2.16A4.23,4.23,0,0,0,108.37,88l-2.24-.4-1,5.62Z"
              />
              <path
                className="cls-4"
                d="M120.63,108.1l-4-1.12,5.47-19.52,4,1.12Z"
              />
              <path
                className="cls-4"
                d="M130.32,107.45l8.1,3-1.28,3.41-12-4.49,7.13-19,11.52,4.32-1.27,3.38-7.66-2.87-1.67,4.46,7.2,2.7-1.24,3.3L132,103Z"
              />
            </g>
          </g>
        </svg>
      </WaterTowerStyled>
    );
  }
}

export default WaterTower;
