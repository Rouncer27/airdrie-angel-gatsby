import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const flyPlaneForwards = keyframes`
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-60vw, 7.5rem);
  }
  50% {
    transform: translate(-120vw, 0);
  }
  100% {
    transform: translate(-120vw, 0);
  }
`;

const flyPlaneBackwards = keyframes`
  0% {
    transform: rotateY(180deg) translate(0, 0);
  }
  25% {
    transform: rotateY(180deg) translate(-60vw, 7.5rem);
  }
  50% {
    transform: rotateY(180deg) translate(-120vw, 0);
  }
  100% {
    transform: rotateY(180deg) translate(-120vw, 0);
  }
`;

const StyledPlane = styled.div`
  position: absolute;
  top: 10rem;
  right: 10rem;
  width: 15rem;
  z-index: 6500;

  &.forwards {
    right: -15rem;
    animation: 20s ${flyPlaneForwards} linear forwards infinite;
  }

  &.reverse {
    right: auto;
    left: -15rem;
    animation: 20s ${flyPlaneBackwards} linear forwards infinite 10s;
  }
`;

class Plane extends Component {
  render() {
    return (
      <StyledPlane className={this.props.direction}>
        <svg
          id="planeall"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 74.6 45"
        >
          <g id="plane">
            <g id="guy">
              <path
                d="M40.5,13.8h-6.5c0,0-0.2,1.1-0.4,2.6L30.4,18l1.3,2.8l1.5-0.7c-0.2,3.2-0.2,6.6,0.8,7.6 c8.4,0,0,0,8.4,0C43.8,18.9,40.5,13.8,40.5,13.8z"
                fill="#00205c"
              />
              <path
                d="M42.3,10.3c0,2.4-2.2,4.1-5,4.3c-3.6,0.3-4.8-1.1-5-4.3c-0.2-2.4,2.2-4.3,5-4.3 C40.1,6,42.3,7.9,42.3,10.3z"
                fill="#f0d0b5"
              />
              <path
                d="M38.5,2.4c-3.1,0-5.7,2.5-5.8,5.5c0.6-0.3,1.3-0.5,2-0.5c2.7,0,4.9,2.4,4.9,5.3 c0,0.4,0,0.8-0.1,1.2c2.8-0.4,5-2.9,5-5.8C44.3,5,41.7,2.4,38.5,2.4z"
                fill="#00a19b"
              />
              <path
                d="M43.7,4.7c-0.3-0.1-0.7,0-0.8,0.4c-1.2,2.9-4.5,4-5.9,4.4c-0.3-1.1-1.3-1.8-2.5-1.8 c-1.4,0-2.6,1.2-2.6,2.6s1.2,2.6,2.6,2.6c1.2,0,2.3-0.9,2.5-2.1c1.4-0.3,5.5-1.5,7-5.2C44.2,5.2,44.1,4.8,43.7,4.7z M34.6,11.4 c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3S35.3,11.4,34.6,11.4z"
                fill="#00205c"
              />
            </g>
            <path
              id="propeller2"
              d="M3.1,14.3c0,3.8-0.6,6.9-1.3,6.9c-0.7,0-1.3-3.1-1.3-6.9c0-3.8,0.6-6.9,1.3-6.9 C2.5,7.4,3.1,10.5,3.1,14.3z"
              fill="#00a19b"
            />
            <path
              id="propeller1"
              d="M0.4,28.9c0,3.8,0.6,6.9,1.3,6.9c0.7,0,1.3-3.1,1.3-6.9c0-3.8-0.6-6.9-1.3-6.9 C1,22,0.4,25.1,0.4,28.9z"
              fill="#00a19b"
            />
            <path
              id="tail"
              d="M63.3,14.5l6.5-10.2c0.5-0.8,1.4-0.6,1.6,0.3l2.9,11.7L63.3,14.5z"
              fill="#69d4cd"
            />
            <path
              id="windshield"
              d="M25.2,11.1C25.2,11.1,25.1,11.1,25.2,11.1c-0.4-0.1-0.6-0.3-0.5-0.7 c0.1-0.4,1.6-8.9,5.7-10.4c0.3-0.1,0.6,0,0.7,0.3c0.1,0.3,0,0.6-0.3,0.7c-3.5,1.3-5,9.5-5,9.5C25.7,10.9,25.4,11.1,25.2,11.1z"
              fill="#69d4cd"
            />
            <g id="planebody">
              <path
                d="M15.5,10c-5.3,0-11.3,4.9-13.1,10.2c-0.2-0.1-0.4-0.1-0.6-0.1c-1,0-1.8,0.8-1.8,1.8v0.9 c0,1,0.8,1.8,1.8,1.8c0.2,0,0.3,0,0.4-0.1c1.3,2.7,5.8,10,14,10.2V10L15.5,10z"
                fill="#69d4cd"
              />
              <path
                d="M49.7,12.1c-1.3,3.6-6,6.2-11.5,6.2c-6.6,0-11.9-3.7-11.9-8.3c0,0,0-0.1,0-0.1L16.2,10v24.7 c0.1,0,0.3,0,0.4,0h42.3c6.4,0,15.3-12.1,15.3-18.5C74.2,16.4,49.7,12.1,49.7,12.1z"
                fill="#00a19b"
              />
            </g>
            <path
              id="wing"
              d="M41.2,45c4.5,0,8.4-5.3,5.1-18.6H30.1C30.1,35.6,36.7,45,41.2,45z"
              fill="#69d4cd"
            />
          </g>
        </svg>
      </StyledPlane>
    );
  }
}

export default Plane;
