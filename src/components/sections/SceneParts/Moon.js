import React, { Component } from "react";
import styled from "styled-components";

const StyledMoon = styled.div`
  position: absolute;
  top: 25rem;
  left: 30rem;
  width: 10rem;
  height: 10rem;
  transition: all 1.75s ease;
  z-index: 100;
  opacity: 0;

  &.night {
    transform: translateY(-7.5rem);
    opacity: 1;
  }

  svg {
    width: 100%;
  }
`;

class Moon extends Component {
  render() {
    const moonActiveClass = this.props.time === 3 ? "night" : "";
    return (
      <StyledMoon className={moonActiveClass}>
        <svg width="35" viewBox="0 0 15.59 19.28">
          <path
            opacity="0.8"
            fill="#FFF"
            d="M13.718,16.993c-5.085,0-9.208-4.122-9.208-9.208c0-2.97,1.407-5.608,3.589-7.292 C3.722,1.205,0.381,5,0.381,9.579c0,5.086,4.123,9.208,9.209,9.208c2.116,0,4.063-0.716,5.619-1.916 C14.722,16.95,14.226,16.993,13.718,16.993z"
          />
        </svg>
      </StyledMoon>
    );
  }
}

export default Moon;
