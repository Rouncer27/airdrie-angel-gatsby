import React, { Component } from "react";
import styled from "styled-components";

const HillStyled = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  width: 50%;
  transition: all 1.75s ease;
  z-index: 5000;

  svg {
    width: 100%;
    path {
      fill: #56b000;
    }
  }
`;

class Hill extends Component {
  render() {
    const activeHillClass =
      this.props.location !== "" ? this.props.location : false;
    return (
      <HillStyled className={activeHillClass}>
        <svg viewBox="0 0 1374 233.63">
          <path
            id="hill1"
            d="M1189.72,233.63v-1H1374V0S1250,2.63,781.17,87C577,125.63,222,195.63,222,195.63l-222,38Z"
          />
        </svg>
      </HillStyled>
    );
  }
}

export default Hill;
