import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const floatHearts = keyframes`
  0% {
      opacity: 1;
      transform: translateY(0);
     }
  24% {
      opacity: 1;
      transform: translateY(-50px);
      }
  70% {
      opacity: .7;
      transform: scale(0.8) translateY(-90px);
      }
  
  100% { 
        opacity: 0;
        transform: scale(0.6) translateY(-150px);
       }
`;

const StyledHouse = styled.div`
  width: 10rem;
  margin: 0 auto;
  overflow: visible;

  svg {
    position: relative;
    width: 100%;
    overflow: visible;
  }

  .heart {
    fill: red;
  }

  .heart-1 {
    animation: ${floatHearts} 1s linear infinite;
  }

  .heart-2 {
    animation: ${floatHearts} 1.5s linear infinite;
  }

  .heart-3 {
    animation: ${floatHearts} 1.8s linear infinite;
  }

  .heart-4 {
    animation: ${floatHearts} 1.3s linear infinite;
  }
`;

class House extends Component {
  render() {
    return (
      <StyledHouse>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 388.84 374.46"
        >
          <defs />
          <path
            className="heart heart-1"
            d="M93.45,84.3c-.11,14.6-29.2,38.83-29.2,38.83S35.16,98.9,35.06,84.3v-.61a15.21,15.21,0,0,1,29.19-6,15.21,15.21,0,0,1,29.2,6Z"
          />
          <path
            className="heart heart-2"
            d="M162.47,24.63c-.1,14.6-29.19,38.83-29.19,38.83s-29.1-24.23-29.2-38.83V24a15.21,15.21,0,0,1,29.2-6,15.21,15.21,0,0,1,29.19,6Z"
          />
          <path
            id="heart2"
            className="heart heart-3"
            d="M353.7,79.27c-.1,14.6-29.2,38.83-29.2,38.83s-29.09-24.23-29.19-38.83v-.61a15.2,15.2,0,0,1,29.19-6,15.21,15.21,0,0,1,29.2,6Z"
          />
          <path
            className="heart heart-4"
            d="M341.78,11.91c-.08,11-22,29.24-22,29.24s-21.91-18.25-22-29.24v-.46A11.45,11.45,0,0,1,319.8,7a11.45,11.45,0,0,1,22,4.49Z"
          />
          <path
            id="House"
            className="cls-1"
            d="M386.33,227.23Q362,207.66,337.75,188.08V147.65a4.77,4.77,0,0,0-4.64-4.88h-22a4.75,4.75,0,0,0-4.63,4.88v15.21l-40.94-33q-32.68-26.34-65.38-52.67a8.25,8.25,0,0,0-11.43,0L67.9,174.55Q35.21,200.88,2.52,227.23C-3.2,231.84,1.73,241,8.22,241H51.11V366.38a8.15,8.15,0,0,0,8.08,8.08H329.67a8.17,8.17,0,0,0,8.08-8.08V241h42.86C387.11,241,392,231.84,386.33,227.23ZM273.32,238c-.29,39.46-78.91,104.93-78.91,104.93S115.8,277.44,115.53,238v-1.64a41.09,41.09,0,0,1,78.88-16.12,41.1,41.1,0,0,1,78.91,16.12Z"
          />
        </svg>
      </StyledHouse>
    );
  }
}

export default House;
