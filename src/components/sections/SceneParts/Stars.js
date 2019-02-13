import React, { Component } from "react";
import styled from "styled-components";

const StarsStyled = styled.div`
  position: absolute;
  top: 15rem;
  right: 0;
  left: 0;
  margin: auto;
  width: 50%;
  transition: all 1.75s ease;
  z-index: 1000;
  opacity: 0;

  &.night {
    top: 10rem;
    opacity: 1;
  }

  svg {
    width: 100%;
  }
`;

class Stars extends Component {
  render() {
    const starsActiveClass = this.props.time === 3 ? "night" : "";
    return (
      <StarsStyled className={starsActiveClass}>
        <svg width="210" viewBox="0 0 99.21 25.51">
          <g fill="#FFF">
            <ellipse
              opacity="0.6"
              cx="97.067"
              cy="11.361"
              rx="0.727"
              ry="0.832"
            />
            <ellipse opacity="1" cx="2.144" cy="3.901" rx="0.728" ry="0.831" />
            <ellipse
              opacity="0.75"
              cx="14.743"
              cy="10.455"
              rx="0.727"
              ry="0.831"
            />
            <ellipse
              opacity="0.3"
              cx="66.439"
              cy="9.407"
              rx="0.728"
              ry="0.831"
            />
            <ellipse
              opacity="0.7"
              cx="77.518"
              cy="1.332"
              rx="0.728"
              ry="0.831"
            />
            <ellipse
              opacity="0.55"
              cx="82.514"
              cy="13.459"
              rx="0.728"
              ry="0.831"
            />
          </g>
        </svg>
      </StarsStyled>
    );
  }
}

export default Stars;
