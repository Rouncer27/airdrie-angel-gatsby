import React, { Component } from "react";
import styled from "styled-components";

const HillStyled = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 100%;
  transition: all 1.75s ease;
  z-index: 4000;

  svg {
    width: 100%;
    path {
      fill: #4c9a00;
    }
  }
`;

class Hills extends Component {
  render() {
    return (
      <HillStyled>
        <svg viewBox="0 0 2016.6 417">
          <defs />
          <path d="M2016.6,417H0V141.26c7.73,4.23,34.83-11.62,30.18,16.42,33.41.9,26.05,19.18,25.79,29.22,3.64-5.16,8.83-8.9,18.89-10-4-10.3,7.66-20.15.76-32.43-3.86-5,28.09-8.27,27.75,6.64,5.48-1.89,20.23-7,23.61,14.61,4.07,1.16,13.22-31.89,29.42-21.84,4.57-14.77,12-27,37.19-10.38,2-6.76,6.77-40.09,29.67-17.15,0,0,35.72-27.53,32.63-9.21-2.07,12.16,25.08,13.18,13.34,36.18,8.26,9.59,20.59,7,16.71,27.68,17.39,6.47,12,29.19,11.17,32.23,215.6-.38,423,44.74,568.21,118.67,190.16-74.86,337-80.19,470.62-53.05l.85-.41c-14.26-22.84-6-50.58,7.19-43.06,9.61-16.94-.19-26.09-4.23-33.86,18.35-12.25,30.29-7.92,41.44,3.15,38.41-28.86,42-4.38,45.79,5,8.4-3.24,15.49-2.69,21.25-.18-1.19-4-2.63-8.18-4.32-12.61-6.52-17.11,39.54,19.76,18.29-24.89-15.92-33.47,19.88-32,13.51-50.64s11.49-16,43.1,13.6c-12.14-30.45,13.68-46.75,23.15-27.47,35.3-63.75,28-1,32.85-4,27.2-21,44.39-22.15,52.11-4-37.46,2.06-6.56,32.7-36.8,33.52-3.95,10.82-7,26.44,8,34.85-.64-6.33,5.81-16.72,14.62-25.91-1.77-3.46-4-6.44-5.43-9.24,10.45-7,18.81-8.57,26.14-6.61,4.13-2,8.09-3.19,11.52-3.07a23.11,23.11,0,0,0-.71,8.81,55.05,55.05,0,0,1,4.5,4c38.4-28.86,42-4.38,45.78,5,8.4-3.24,15.49-2.69,21.25-.18-1.19-4-2.63-8.18-4.32-12.61-6.52-17.11,39.54,19.76,18.29-24.89-15.92-33.47,19.88-32,13.51-50.64s11.49-15.95,43.11,13.6C1774.21,25.73,1800,9.43,1809.5,28.71c35.31-63.75,28-1,32.85-4,27.2-20.95,44.39-22.15,52.11-4-37.46,2.06-6.56,32.7-36.8,33.52-4,10.82-7,26.44,8,34.85-1.38-13.51,29.48-45.45,46.84-44.83C1907,66,1928.91,62.13,1926,84.87c8.51-8,40.76-23.15,32.42,23.6,27.61.19,18.76,31.42,21,51.15,21.79-20.67,11.39,13.09,36.61,12.33Z" />
        </svg>
      </HillStyled>
    );
  }
}

export default Hills;