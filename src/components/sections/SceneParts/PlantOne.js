import React, { Component } from "react";
import styled from "styled-components";

const StyledPlant = styled.div`
  position: absolute;
  width: 100%;
  max-width: 10rem;
  margin: 0 auto;
`;

class PlantOne extends Component {
  render() {
    const plantLocationClass =
      this.props.location !== "" ? this.props.location : false;
    return (
      <StyledPlant className={plantLocationClass}>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120.2 114"
        >
          <g id="plant-blue">
            <path
              id="green3"
              d="M41.9,47.4c-2.5-3.5-5.6-8.6-6.3-13c-0.4-2.3-1.2-3.6-2-5.9c-1-2.9-2-5.9-2.6-8.9 c-1.3-6.1-2.5-13.3-0.7-19.3c0.3,2.7,3.3,7,5,9.2c2.4,3.1,5.1,6,7.2,9.3c3.9,6.3,7.2,13,9,20.2c0.8,3.1,3.4,13.7-2.3,13 C46.1,51.7,43.7,49.9,41.9,47.4z"
              fill="#53896b"
            />
            <path
              id="pot2_1_"
              d="M24.4,47.5c-3.7,1.8-6.9,4.4-7.5,8.3c-0.9,6.1,0,12.5,1.3,18.5 c1.9,8.6,5.2,16.9,9.5,24.5c2.9,5.1,10,11.8,12.6,12.7c10.6,3.7,28.9,3.5,39.7-0.6c2.2-0.8,7-6.7,9.4-10.5 c4.2-6.7,8.4-11.6,12.1-29.3c1-4.8,1.4-12.1,0.4-16.9c-1.1-5-6.4-5.8-12.8-7.7c-11.1-3.3-18.1-2.9-29.7-3.9 C52.2,42,32.5,43.6,24.4,47.5z"
              fill="#525c8c"
            />
            <path
              id="pot1_1_"
              d="M102.1,54.6c0-0.2-0.1-0.3-0.1-0.5c-1.1-5-6.4-6.9-12.8-8.8 c-11.1-3.3-20.9-2.9-33.7-2.9c-7.3,0-23,1.2-31.1,5.1c-3.6,1.8-6.8,4.3-7.4,8.1C17.9,68.2,92,76.1,102.1,54.6z"
              fill="#00205c"
            />
            <path
              id="dirt_2_"
              d="M96.1,54.6c0.4-0.9,0.3-1.8-0.3-2.9c-0.6-0.9-1.6-1.6-2.5-2.1c-2.5-1.5-5.4-2.2-8.2-3 c-9.6-2.8-18-2.5-29.1-2.5c-6.3,0-19.8,1-26.8,4.4c-3.1,1.5-7.8,3.4-6.4,7c1.4,3.8,7.8,5,11.1,5.8c7.4,1.8,15.2,2.5,22.8,2.7 c8.2,0.2,16.6-0.2,24.7-2C84.2,61.4,94.5,58.7,96.1,54.6z"
              fill="#7a6e66"
            />
            <path
              id="green2_2_"
              d="M42,55.2c-2.6-0.3-6,0.1-8.3-0.9c-2.5-1.1-4.4-3.5-6.6-5c-3.8-2.7-7-6.1-11.1-8.5 c-3.2-1.9-8.1-6.4-16-8.2c2.6-1.4,13.2-2.3,21.9-0.4c3.1,0.7,6,3.5,8.8,4.9c5.6,2.9,12.5,10.9,17.1,14.9c0.4-4.2-1.1-7.8-0.2-15.5 C50,15.7,58.4,6.6,59.8,3.9c-0.9,2.7,6,18.4,7.1,22.1c0.9,2.9,1.8,5.9,1.8,8.9c0,1.3-1.3,5.1,0.2,5.6c10.5-11,26.4-16.4,34.1-29.9 c0.8,5.8,1,11.4-1.5,16.9c-2.3,5.1-5.8,10.1-9.4,14.4c-2.3,2.7-5.5,4.5-7.8,7.2c-2.6,3.1-7.6,4.8-11.8,4.9c-1.8,0-3.1-0.9-5.1-0.8 c-2.5,0.2-4.9,0.8-7.3,1.5c-2.8,0.8-5.7,1.8-8.7,1.7C48.3,56.4,45.1,55.6,42,55.2z"
              fill="#009444"
            />
            <path
              id="green1_2_"
              d="M36,56.9c-2.9-0.8-3.4-3-4.8-5.7c-0.9-1.8-1.9-3.6-2.9-5.4 c-3.7-6.6-8.1-12.5-13.5-17.9C13,26.1,7,18.8,6.2,17.1c0,0,12.2,0.6,23.7,7.3C42.9,32,47.1,42,49.3,48.6c0.7,2,1.9,5.2,2,7.3 c1.7-9.4,11.8-20.3,19.4-27.7c4.3-4.2,19.3-14.4,23.7-16.9c-1.2,0.7-8,20.8-9.6,25.8c-1.7,5.4-4.3,12.7-7.9,17.1 c5.8-10.5,15.3-14.5,17.9-16c5.6-3.4,22.8-9,25.4-10.7c-1.6,0.6-7.2,8.5-9.4,10.7c-3.8,3.9-8.4,6.2-13,9c-3.1,1.9-5.7,4.1-8.3,6.6 c-2.6,2.4-5.3,3.4-8.8,4C77.3,58.3,55.5,62.4,36,56.9z"
              fill="#3db54a"
            />
            <path
              id="pot3_1_"
              d="M98.2,83.7c1-3,2.1-6.6,3-11c-10.9,12.4-69.7,19.8-82.9,2.2c0.8,3.6,1.9,7.1,3.2,10.6 C38.9,96.4,84,93.4,98.2,83.7z"
              fill="#00205c"
            />
          </g>
        </svg>
      </StyledPlant>
    );
  }
}

export default PlantOne;