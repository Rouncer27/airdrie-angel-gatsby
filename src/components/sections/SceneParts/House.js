import React, { Component } from "react";
import styled from "styled-components";

const HouseStyled = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 8%;
  width: 20rem;
  opacity: 0;
  z-index: 3000;

  @media (min-width: ${props => props.theme.bpTablet}) {
    opacity: 1;
  }

  #house {
    #side {
      fill: #fff1d9;
    }

    #roofside {
      fill: #b78a84;
    }

    #roofpeak {
      fill: #99797c;
    }

    #front {
      fill: #e0cfae;
    }

    #window1 {
      path.cls-5 {
        transition: all 1.75s ease;
        fill: #2aaae2;
      }
    }

    #window2,
    #window3 {
      rect {
        transition: all 1.75s ease;
        fill: #2aaae2;
      }
    }

    #roof {
      .cls-5 {
        transition: all 1.75s ease;
        fill: #2aaae2;
      }

      .cls-6 {
        transition: all 1.75s ease;
        fill: #fff;
      }
      .cls-7 {
        fill: #fff1d9;
      }

      .cls-8 {
        fill: #9a7e80;
      }
    }

    path {
      transition: all 1.75s ease;
      fill: #fff1d9;
    }
  }

  &.night {
    #house {
      #roof {
        .cls-6 {
          fill: #000;
        }

        .cls-5 {
          fill: #ffdb00;
        }
      }

      #window1 {
        path.cls-5 {
          fill: #ffdb00;
        }
      }

      #window2,
      #window3 {
        rect {
          fill: #ffdb00;
        }
      }

      path {
        fill: #000;
      }
    }
  }
`;

class House extends Component {
  render() {
    const houseActiveClass = this.props.time === 3 ? "night" : "";
    return (
      <HouseStyled className={houseActiveClass}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 408.87 248.22"
        >
          <defs>
            <linearGradient
              id="New_Gradient_Swatch_9"
              x1="-1525.43"
              y1="79.92"
              x2="-1487.73"
              y2="-41.97"
              gradientTransform="matrix(-1 0 0 1 -1367.42 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#b78a84" />
              <stop offset="1" stopColor="#a798a0" />
            </linearGradient>
          </defs>
          <g id="house">
            <g id="house-2" data-name="house">
              <polygon
                id="side"
                className="cls-1"
                points="15.37 244.75 207.8 248.22 207.8 92.56 15.92 91.58 15.37 244.75"
              />
              <polygon
                id="roofside"
                className="cls-2"
                points="298.7 0.92 107.78 8.6 0 102.92 207.46 102.93 298.7 0.92"
              />
              <polygon
                id="roofpeak"
                className="cls-3"
                points="298.7 0.92 408.87 104.89 189.03 103 298.7 0.92"
              />
              <polygon
                id="front"
                className="cls-4"
                points="389.44 104.45 298.7 19.25 207.43 103.16 207.42 103.8 207.27 103.8 207 247.81 389.93 247.81 389.93 104.45 389.44 104.45"
              />
              <g id="window3">
                <rect
                  className="cls-5"
                  x="327.29"
                  y="139.76"
                  width="27.39"
                  height="50.08"
                />
                <path
                  className="cls-6"
                  d="M325.69,138.08V191.5h30.6V138.08Zm27.4,3.34V163.1h-24.2V141.42Zm-24.2,46.72V166.43h24.2v21.71Z"
                />
              </g>
              <g id="window2">
                <rect
                  className="cls-5"
                  x="250.5"
                  y="137.35"
                  width="27.4"
                  height="50.1"
                />
                <path
                  className="cls-6"
                  d="M248.89,135.7v53.42h30.6V135.7ZM276.31,139v21.56H252.09V139Zm-24.22,46.77V163.89h24.22v21.89Z"
                />
              </g>
              <g id="window1">
                <path
                  className="cls-5"
                  d="M282.62,93.05h35.92s-3.63-26.84-17.69-27.32S282.62,93.05,282.62,93.05Z"
                />
                <path
                  className="cls-6"
                  d="M300.88,64.37c15,.51,18.82,27.35,19,28.47l.22,1.56h-39l.24-1.58C281.51,91.64,285.84,63.82,300.88,64.37Zm-.06,2.73c-11-.41-15.53,19-16.61,24.59H317C316,86.19,311.8,67.49,300.82,67.1Z"
                />
              </g>
              <g id="roof">
                <polygon
                  className="cls-7"
                  points="140.88 0.07 185.31 55.83 98.18 55.59 140.88 0.07"
                />
                <path
                  className="cls-5"
                  d="M126.48,44.4h30s-3-22.42-14.77-22.81S126.48,44.4,126.48,44.4Z"
                />
                <path
                  className="cls-6"
                  d="M141.76,20.44c12.52.43,15.69,22.84,15.82,23.8l.18,1.28H125.19l.22-1.3C125.55,43.24,129.18,20,141.76,20.44Zm-.09,2.27c-9.15-.31-12.95,15.86-13.85,20.55h27.35C154.35,38.68,150.87,23.05,141.67,22.71Z"
                />
                <polygon
                  className="cls-8"
                  points="217.62 6.18 141.18 0.01 141.18 0.01 141.17 0.01 141 0 141.09 0.12 95.55 55.67 100.28 55.71 143.34 2.97 185.2 56.13 217.62 6.18"
                />
              </g>
            </g>
          </g>
        </svg>
      </HouseStyled>
    );
  }
}

export default House;
