import React, { Component } from "react";
import styled from "styled-components";

const MountainStyled = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 25%;
  width: 75%;
  transition: all 1.75s ease;
  z-index: 3000;

  svg {
    width: 100%;
    path {
      fill: rgba(103, 139, 172, 0.75);
    }
  }
`;

class Mountains extends Component {
  render() {
    return (
      <MountainStyled>
        <svg viewBox="0 0 1403.01 475.38">
          <defs />
          <path d="M1369,21c-63.17,49.51-68,112.59-111.58,115.51-51.84,3.46-28.24-19.14-142-8.82-47.46,4.31-100.64,77.93-146.46,58.21-24.13-10.39-113.44-47.59-134.71-34.69-33.35,20.23-70.51-53.71-291.62,7.88C423.87,98.26,0,476.62,0,476.62s676.4-4.24,1403,.38L1401-1h0" />
        </svg>
      </MountainStyled>
    );
  }
}

export default Mountains;
