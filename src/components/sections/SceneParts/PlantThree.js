import React, { Component } from "react";
import styled from "styled-components";

const StyledPlant = styled.div`
  position: absolute;
  width: 100%;
  max-width: 8rem;
  margin: 0 auto;
`;

class PlantThree extends Component {
  render() {
    const plantLocationClass =
      this.props.location !== "" ? this.props.location : false;
    return (
      <StyledPlant className={plantLocationClass}>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 86.9 117.9"
        >
          <g id="plant-yellow">
            <path
              id="gren3"
              d="M51.5,3.3c0.2-0.4,0.7-0.6,1.1-0.5c0.4,0,0.8,0.3,1,0.7c2.2,4.7,3.4,9.2,4.4,13.5 c0.9,4.1,0.9,5.5,0.7,9.4l0,0.3c0,0.6-0.8,13.7-6.6,13.7c-1,0-2-0.4-3-1.1c-3.7-2.7-5-9.7-5.3-11.1C42.2,18.8,46.6,10.7,51.5,3.3z"
              fill="#53896b"
            />
            <path
              id="yellow3"
              d="M8.1,74.5c1.1,7.6,3.2,13.8,6.3,25.8c1.1,4.4,3.7,12.1,7.5,13.8 c12.1,5.3,27.4,4.2,35.4,1.6c13.6-4.3,12-6.9,17-26c3.8-14.7,6.6-23.7,7-31.8c-5.5,0.3-10.5,1.6-15.9,3C55,63.6,43.4,61.2,33,60 c-6.3-0.7-12.3-2.8-18.7-2.6c-2.6,0.1-6.5-3.5-8.4-1.3C3.8,58.5,7.6,71.7,8.1,74.5z"
              fill="#ffda00"
            />
            <path
              id="yellow2"
              d="M50.5,39.3c-7.5-0.8-21.1-1.6-28.3,0.2c-4.2,1.1-8,1-11.9,3.2 c-2.1,1.2-6.5,1.5-7.9,3.4C0.8,48.5,1.5,50,1.5,53c-0.1,5,0.7,7.1,2.4,8.3c5.6,4.1,15.3,6.3,26,6.8c16.4,0.8,32.8,1.6,48.7-4.9 c2.4-1,6.2-4.3,6.6-7.1c0.3-2.2,0.6-6.5,0-8.4c-1.7-5.5-11.9-5.7-17.2-6.7C59.7,39.5,58.8,40.2,50.5,39.3z"
              fill="#fff0a9"
            />
            <path
              id="yellow1"
              d="M9.7,42.1c4.2-1.5,8.4-1.5,12.6-2.6c7.2-1.8,20.8-1,28.3-0.2c8.3,0.9,9.2,0.2,17.4,1.7 c4.8,0.9,13.5,1.2,16.4,5.2c2.2,11.1-25.8,12.3-42.6,12.3c-23,0-39.2-5.7-40.3-9.9c0.1-0.8,0.4-1.6,1-2.6C3.8,44.2,7.1,43,9.7,42.1 z"
              fill="#ffda00"
            />
            <path
              id="dirt"
              d="M28.5,41.9c-4,0.3-10.5,1.3-14.3,2.6c-3,1-6.5,2.5-3.1,5.6c3.4,3.1,18.2,4.4,22.3,4.4 c12.7,0.2,24.3,0.6,37.8-2.7c2.3-0.6,7.4-2.4,5.2-5c-2.6-3.1-9.6-3.9-14.9-4.5C59.4,42.1,49.2,40.4,28.5,41.9z"
              fill="#7a6e66"
            />
            <path
              id="green2"
              d="M16,10.2c0.2-0.1,0.5-0.1,0.6,0.1c3.6,3.1,11.4,12.6,14.2,19.2c0.9-9.1,4-19.9,6.2-24.6 c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.4,0.1,0.5,0.2c4.5,5.8,7.1,10.7,8.7,16.6c0.6,2.3,1.1,4.2,1.5,6c0.9,3.6,1.6,6.7,3.2,10.7 C53,33,55.8,26.6,59.7,19c1.1-2.1,5-7.4,7.4-9.8C67.3,9.1,67.5,9,67.7,9c0.2,0,0.4,0.2,0.4,0.4c2.4,6.3,2.8,10.5,1.8,17.5 c-0.5,3.8-1.6,7.1-2.8,10.2c-0.9,2.4-2.1,5.7-4.5,7.6c-1.3,1-3.2,1.7-4.8,2.2c-1.7,0.4-3.4,0.7-5.2,0.7c-2.1,0.1-3.7,0.1-5.3,0 C41.5,47.4,37,46.5,33,44.5c-1.2-0.6-2.7-1.2-4.2-1.8c-4.4-1.7-9-3.5-10.2-6.8c-0.7-1.8-3-8-3.1-12.2c0-2.7,0-5.4,0.1-8 c0-1.7,0.1-3.3,0.1-5C15.6,10.5,15.8,10.3,16,10.2z"
              fill="#006838"
            />
            <path
              id="green1"
              d="M1.6,22.3c0.2-0.4,0.7-0.7,1.2-0.6c4.9,0.5,15.8,5.3,23.8,14.1c0.1,0.1,0.2,0.2,0.3,0.4 c-0.6-2.4-0.9-4.7-1-6.1c-0.5-6.4-0.2-10.5,0.2-15.7l0.1-1.7c0-0.5,0.3-0.9,0.8-1c0.4-0.2,0.9,0,1.3,0.3c3.7,3.9,7.3,9,10.8,15.2 c2.3,4.1,3.8,7.7,4.8,10.6c0.4-3,1-6.6,1.9-10.1c1-3.7,2.8-8.1,5.4-13.9c0.2-0.4,0.6-0.7,1-0.7c0.4,0,0.8,0.2,1.1,0.5 c6.8,9.9,8.6,18.7,8.7,24.7c0.9-1.4,1.9-2.6,3.1-4c2.8-3.2,14.3-14.9,17.4-16.6c0.4-0.2,0.8-0.2,1.2,0c0.4,0.2,0.6,0.6,0.6,1 c0.2,6.2-2.4,14-7,20.8c-5.2,7.7-11.3,9.9-15,11.3c-0.4,0.2-0.9,0.3-1.2,0.5c-4.5,1.8-13,1.8-17.6,1.7c-5.4-0.2-10.9-0.7-14.1-1.4 C17.5,48.7,12,40.9,11,39.3c-0.9-1.4-2.4-4.1-4.1-7c-2.1-3.6-4.4-7.8-5.2-8.7C1.5,23.3,1.4,22.7,1.6,22.3z"
              fill="#00a19b"
            />
            <path
              id="dots"
              d="M56.5,27.4c0,0.4,0,0.8,0,1.2c0,1.7-2.2,1.1-2.6,0c-0.5-1.3,0.5-3.5,2-2.3 C56.3,26.6,56.5,27,56.5,27.4z"
              fill="#b8d075"
            />
            <path
              id="dots2"
              d="M38.1,38.2c0.5-0.3,1.4-0.3,1.7,0.3c0.5,0.8,0.6,1.1,0.8,2c0.2,0.6-0.1,1.3-0.7,1.5 C38,42.7,37,38.9,38.1,38.2z"
              fill="#b8d075"
            />
            <path
              id="dots3"
              d="M75.2,32.4c-0.3,1,0.2,2.5,1.5,1.7c0.7-0.5,1-1.1,1-1.9c0.1-1.8-1.8-1.2-2.4,0 C75.3,32.3,75.3,32.4,75.2,32.4z"
              fill="#b8d075"
            />
            <path
              id="dots4"
              d="M14.9,35.6c1.5,1.1,0.2,3.8-1.1,2.4c-0.6-0.6-1.6-1.9-0.8-2.6 C13.5,34.9,14.4,35.2,14.9,35.6z"
              fill="#b8d075"
            />
            <path
              id="dots5"
              d="M14.4,29c0.1,0.2,0.2,0.4,0.2,0.7c0.1,1.1-1.3,1.8-2,1C10.6,28.6,13.5,27.7,14.4,29z"
              fill="#b8d075"
            />
            <path
              id="dots6"
              d="M60.8,44.5c0.8-0.9,2.3-1.5,2.9-0.4c0.4,0.6,0.1,1.3-0.4,1.6c-0.4,0.3-0.7,0.7-1.2,0.9 c-0.6,0.3-1.3,0.2-1.6-0.4C60.1,45.6,60.3,45,60.8,44.5z"
              fill="#b8d075"
            />
            <path
              id="dots7"
              d="M52.9,46.6c0.1,0,0.1-0.1,0.2-0.1c0.7-1.2,2.6-0.6,1.9,0.8c-0.2,0.5-0.6,0.8-1,1.1 C53,49.2,51.9,47.4,52.9,46.6z"
              fill="#b8d075"
            />
            <path
              id="dots8"
              d="M29.1,21c1.2-0.3,2.1,1.5,1.3,2.4c-0.4,0.4-1.2,0.5-1.5,0c-0.2-0.3-0.5-0.6-0.6-1 C28.2,21.7,28.5,21.1,29.1,21z"
              fill="#b8d075"
            />
            <path
              id="dots9"
              d="M37,13.9c1-2.6,3.3,1.6,1.3,2.1c-0.6,0.2-1.1-0.2-1.3-0.8C36.9,14.9,36.9,14.4,37,13.9z"
              fill="#90b558"
            />
          </g>
        </svg>
      </StyledPlant>
    );
  }
}

export default PlantThree;