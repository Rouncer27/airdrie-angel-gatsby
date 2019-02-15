import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NominateSignStyled = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 40%;
  width: 7rem;
  z-index: 6000;
`;

class SignNominate extends Component {
  render() {
    const singExtraClass =
      this.props.location === "nominate-page" ? this.props.location : "";
    return (
      <NominateSignStyled className={singExtraClass}>
        <Link to="/nominate">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 69.5 129.7"
          >
            <g id="nominate-sign">
              <path
                id="greenbackground"
                d="M33.6,126.9c-0.9-1.3-2.3-2-3.6-2.7c-0.2-0.1-0.6,0-0.9,0 c-0.3,0-0.4-0.1-0.5-0.4c0-0.3,0.2-0.5,0.5-0.5c0.6,0,1.2,0.2,1.7,0.5c1.1,0.7,2.1,1.4,3.1,2.1c0.2,0.1,0.4,0.3,0.6,0.4 c0.2,0.1,0.4,0,0.4-0.2c0-0.1,0.1-0.2,0.1-0.3c-0.2-2.2-0.5-4.4-2.2-6c-0.1-0.1-0.1-0.2,0-0.3c0-0.1,0.2-0.1,0.3-0.1 c0.3,0.2,0.6,0.4,0.9,0.6c0.2,0.1,0.5,0,0.6-0.3c0-0.8,0.1-1.7,0.1-2.5c-0.2-2.7-0.3-5.5-0.5-8.2c-0.1-1.6-0.4-3.2-0.6-4.8 c-0.1-0.5-0.2-0.9-0.2-1.4c0-2.3-0.4-4.6-0.6-6.9c-0.1-0.8,0-1.7-0.1-2.5c-0.3-2.7-0.5-5.4-0.5-8.2c0-0.9-0.2-1.9-0.3-2.8 c-0.6-4.4-0.9-8.9-0.8-13.3c0-1.4-0.1-2.7-0.3-4.1c-0.1-0.7-0.4-1-1.1-1.2c-0.9-0.2-1.8-0.3-2.6-0.1c-0.9,0.2-1.8,0.2-2.7,0.2 c-1.2,0-2.4,0-3.5,0.3c-0.3,0.1-0.6,0.1-0.9,0.1c-1.6-0.2-3.2,0-4.8,0.1c-1.4,0.1-2.8,0.3-4.2,0.6c-2.4,0.6-4.9,0.9-7.4,1.3 c-1.3,0.2-2.6-1-2.6-2.3c0-0.2,0-0.5,0-0.7c0.2-1.3,0.1-2.6-0.1-3.9c-0.2-1.3-0.2-2.7-0.2-4.1c0-2.2-0.3-4.4-0.2-6.6 c0.2-4-0.2-8-0.2-11.9c0-0.4,0-0.7-0.1-1.1c-0.1-0.5-0.1-1,0.2-1.4c0.2-0.4,0.2-0.8,0-1.2c-0.2-0.4-0.2-0.8-0.2-1.2 c0.3-2.3,0.1-4.6,0-6.9c-0.1-1.5,0-3.1-0.3-4.6C0,20,0,19.7,0,19.4c0.1-1.5,0.2-3,0.1-4.5c0-0.6,0.1-1.1,0.7-1.5 c0.8-0.6,1.6-1.3,2-2.2c0.4-0.8,1-1,1.7-1c1.6-0.1,3.2-0.1,4.8-0.2c3.4-0.1,6.9,0,10.3,0.1c0.6,0,1.2,0,1.8,0c1.5,0,3,0,4.5-0.1 c0.4,0,0.8,0,1.2-0.1c0.5-0.1,0.7-0.4,0.8-0.8c0-0.7,0.1-1.3,0-2c-0.1-1.2-0.2-2.5-0.5-3.7c-0.1-0.4,0-0.7,0.2-1 c0.4-0.5,0.8-0.9,1.1-1.4c0.4-0.6,0.9-0.9,1.5-0.7c1,0.3,2,0,3-0.2c0.5-0.1,1-0.2,1.6-0.2c0.6,0.1,1,0.4,1.1,1 c0.2,1.4,0.5,2.8,0.2,4.3c-0.2,1.3,0.2,2.6,0.2,3.9c0,0.4,0.4,0.6,0.8,0.6c1.2,0.1,2.5,0.1,3.7,0.1c2.5,0,5-0.1,7.5-0.2 c1.8-0.1,3.7-0.3,5.5-0.5C55,9,56.1,9,57.3,9c2.9,0.2,5.8,0.2,8.7,0c1.2-0.1,1.8,0.4,2.1,1.7c0.4,1.5,0.5,3,0.5,4.6 c0,1,0.1,2,0.2,3c0.1,0.9,0.2,1.9,0.2,2.8c0.1,1.6,0,3.2,0.3,4.8c0.2,1.2-0.2,2.2-0.2,3.4c0,0.4-0.3,0.6-0.7,0.7 c-0.5,0.1-1,0-1.4,0.3c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.1,0.1,0.4,0.3,0.4c0.4,0.1,0.9,0.2,1.4,0.3c0.5,0.2,0.7,0.5,0.7,1.1 c0,2.6-0.1,5.2,0,7.8c0.3,6.2,0.2,12.3,0.4,18.5c0,0.7-0.1,0.9-0.8,0.9c-1.3,0-2.5,0.5-3.8,0.7c-1.1,0.2-2.2,0.4-3.3,0.5 c-3.6,0.3-7.2,0.5-10.8,0.6c-1.2,0-2.4,0.3-3.5,0.5c-0.8,0.2-1.6,0.3-2.5,0.3c-1.1,0-2.1,0-3.2,0.1c-0.4,0-0.8,0-1.2,0.1 c-0.6,0.1-0.8,0.4-0.8,1c0,0.1,0,0.2,0,0.4c0.3,2,0.2,4,0.3,6c0.2,2.6,0.3,5.2,0.5,7.8c0.1,1.1,0,2.1,0,3.2 c0.1,3.3,0.1,6.5,0.2,9.8c0,1.6,0.4,3.2,0.4,4.8c0.1,4.3,0.4,8.7,0.4,13c0,1.3,0.3,2.6,0.3,3.9c0,1.2-0.1,2.5,0,3.7 c0.1,1.4,0.3,2.7,0.4,4.1c0,0.2,0.2,0.5,0.3,0.6c0.8,0.5,1.1,1.4,1.2,2.3c0.9,0,1.8-0.1,2.4-0.5c1-0.7,2.2-0.8,3.3-1.4 c0.1,0,0.2-0.1,0.3,0c0.2,0.1,0.4,0.2,0.5,0.5c0,0.2-0.1,0.4-0.3,0.4c-1.5,0.2-2.6,1.1-3.9,1.7c-0.8,0.3-1.2,1-1.4,1.8 c-0.1,0.4,0.2,0.7,0.6,0.6c1.5-0.4,3-0.7,4.5-1.1c0.3-0.1,0.7-0.2,1,0c0.1,0.1,0.2,0.3,0.2,0.4c0,0.1-0.1,0.2-0.2,0.3 c-1,0.3-1.9,0.6-2.9,0.8c-1.8,0.4-3.5,1.1-5.1,2.1c-0.6,0.4-1.3,0.6-2,0.3c-0.4-0.2-1-0.2-1.4-0.4c-1-0.6-1.8-0.1-2.4,0.5 c-0.5,0.5-0.9,0.7-1.5,0.7c-0.6,0-1.2,0-1.8-0.2c-1.1-0.3-2.2-0.3-3.3-0.1c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.4-0.2-0.5-0.5 c-0.1-0.2,0.1-0.5,0.3-0.6c0.3-0.1,0.7-0.2,1-0.3c0.4-0.1,0.8-0.1,1.2-0.2c0.2,0,0.4-0.2,0.4-0.3c0-0.3-0.2-0.4-0.4-0.5 c-0.7-0.3-1.5-0.4-2.2-0.5c-0.6-0.1-1.3-0.2-1.7-0.7c-0.1-0.1-0.2-0.3-0.1-0.5c0.1-0.1,0.3-0.2,0.4-0.2c1.4,0.2,2.7,0.4,4,1 C32.3,126.7,32.9,127,33.6,126.9L33.6,126.9z"
                fill="#046937"
              />
              <path
                d="M17.7,11C17.7,11,17.7,11,17.7,11c-2.1-0.1-4.3-0.1-6.4-0.2c-1.9-0.1-3.8,0.4-5.7,0.6 c-0.3,0-0.6,0.1-0.7,0.4c-0.3,0.6-0.7,1.2-0.7,2c0.1,1.2,0.1,2.5,0.3,3.7c0.2,1.2,0.2,2.4,0.2,3.5c0,0.9,0.1,1.9,0.1,2.8 c0,0.4,0.1,0.8,0.1,1.2c-0.1,1.4,0.1,2.7,0.2,4.1c0.1,1.1,0.4,2,1.4,2.5c0.3,0.1,0.3,0.5,0,0.7c-0.2,0.2-0.5,0.4-0.7,0.6 c-0.9,0.7-1.2,1.7-1.1,2.9c0.1,1,0.2,2,0.3,3c0.1,1.4,0.1,2.7,0.2,4.1c0.2,2.5,0.4,5.1,0.5,7.6c0.1,3.1,0.1,6.2,0.2,9.3 c0,0.5,0,1.1,0.1,1.6c0.1,0.4,0.4,0.7,0.9,0.7c0.2,0,0.4,0,0.5,0c3.3-0.1,6.6-0.2,10-0.3c0.7,0,1.4,0,2.1-0.1 c1.2-0.2,2.5-0.2,3.7-0.2c2.1,0.1,4.1-0.1,6.2-0.4c1.5-0.2,2.9-0.4,4.4-0.5c4.2,0,8.3-0.3,12.4-0.5c2.8-0.1,5.6-0.2,8.4-0.4 c4.1-0.4,8.1-1,12.2-1c0.1,0,0.2,0,0.4,0c0.5-0.1,0.9-0.4,0.9-0.9c0.1-0.5,0.1-0.9,0.1-1.4c0-4.5-0.1-9-0.2-13.5 c0-3.1-0.1-6.2-0.3-9.3c-0.1-0.9-0.3-1.2-1.1-1.3c-0.8-0.1-1.5-0.4-2.1-0.8c-0.2-0.2-0.4-0.7-0.1-0.8c0.6-0.2,0.6-0.6,0.6-1.1 c0-0.4,0.3-0.5,0.6-0.5c0.3,0,0.6,0,0.9,0c0.7-0.1,1.1-0.4,1.2-1.1c0.2-1,0.2-2,0.1-3c-0.2-2-0.2-4-0.3-6c-0.2-2.2-0.4-4.4-0.6-6.5 c-0.2-2-0.5-2.2-2.4-2.2c-0.2,0-0.4,0-0.5,0c-1.5,0.2-3,0-4.4-0.1c-2.1-0.1-4.3-0.1-6.4,0.2c-1.2,0.2-2.4,0.4-3.5,0.3 c-2.2,0-4.4,0.1-6.6,0.2c-5.8,0.2-11.7,0.2-17.5,0.2C22.8,11,20.3,11,17.7,11z"
                fill="#fff"
              />
              <path
                d="M31,5.5C30.9,5.5,30.9,5.5,31,5.5c-0.1,0.8-0.1,1.7-0.1,2.5c0,0.1,0,0.1,0,0.2 c0,1.8,0.4,2.1,2.1,1.9c0.2,0,0.5-0.1,0.7-0.1c0.6-0.1,0.9-0.5,1-1.1c0-0.2,0-0.4,0-0.5c0-1.8,0-3.5,0-5.3c0-0.2,0-0.5-0.1-0.7 c-0.4-1-0.5-1.2-1.5-1c-0.5,0.1-0.9,0.2-1.4,0.3c-0.6,0.2-0.7,0.4-0.7,1C30.9,3.6,30.9,4.5,31,5.5z"
                fill="#fff"
              />
              <path
                d="M12.1,62.8c-2.1,0-4.2,0.3-6.3,0.6c-0.4,0.1-0.7,0.2-0.9,0.5c-0.1,0.2-0.3,0.4-0.2,0.7 c0.1,0.2,0.4,0.3,0.6,0.3c1.2-0.2,2.4-0.2,3.5-0.5c2-0.5,3.9-0.9,5.9-1c0.4,0,0.8-0.2,1.2-0.2c0,0,0.1-0.1,0.1-0.1 c0,0,0-0.1-0.1-0.1c-0.2,0-0.3-0.1-0.5-0.1C14.4,62.8,13.2,62.8,12.1,62.8z"
                fill="#fff"
              />
              <path
                d="M33.5,85.3c-0.3,0.2-0.2,0.5-0.2,0.7c-0.2,2.4,0.3,4.8-0.1,7.2c0,0.3,0.1,0.5,0.2,0.8 c0.2,1,0.4,2,0.6,3c0.1,0.5,0.2,1.1,0.3,1.6c0,0.1,0.2,0.3,0.3,0.3c0.3,0,0.4-0.2,0.4-0.4c0-0.5,0-0.9-0.1-1.4 c-0.1-1.1-0.2-2.1-0.3-3.2c-0.2-2.5-0.4-4.9-0.7-7.4C33.8,86,33.8,85.6,33.5,85.3z"
                fill="#fff"
              />
              <path
                d="M40.6,121.6l-2-60l-1.8,0c-0.4-0.1-1-0.1-1.7,0l-1.6,0l1.3,18.2l-0.1,0l0.1,0c0,0.1,0,0.1,0.1,0.2 l3,41.7l0.1,0c-0.1,0.9-0.2,1.8-0.2,2.7c0,0.3,0.3,0.5,0.6,0.6c0.3,0.1,0.4-0.2,0.4-0.4c0.1-0.6,0.2-1.3,0.3-1.6c0-0.6,0-1-0.1-1.4 L40.6,121.6z"
                fill="#fff"
              />
              <path
                d="M3.9,62.6l1.4-0.5l-1-29.3c0.3-0.4,0.4-0.7,0.2-1.3c-0.1-0.4-0.2-0.8-0.3-1.1l-0.6-18l-2.8,1.9 l1,27.6c0,1.7,0,3.5,0,5.2c0,0,0,0-0.1,0c0,2.4,0,4.7,0,7.1c0,2.6,0.3,5.2,0.8,7.7l0,1.1l0.6-0.2c0,0,0,0,0,0 C3.5,62.8,3.7,62.7,3.9,62.6z"
                fill="#fff"
              />
              <g id="nominate" fill="#00205c">
                <path d="M15.8,35.9c0,0.8,0.2,1.7,0.6,2.9c0,0.1,0,0.2,0,0.3c-0.3,0.1-0.8,0.3-0.9,0.3c-0.1,0-0.3,0-0.4,0 c-0.3-0.3-0.9-1.1-1.4-1.5c-0.5-0.4-1.1-0.7-1.6-1.1c-0.7-0.6-1.3-1.5-2.3-2.1c-0.1,0.1,0.2,0.9,0.3,1.2l0.7,3.1 c0,0.1,0,0.2,0,0.3c0,0.3,0.2,0.6,0.2,0.9c0,0.1,0,0.2,0,0.3c-0.2,0.3-0.7,0.2-1.1,0.4c-0.2-0.1-0.4-0.6-0.4-0.8 c0-0.1-0.1-0.8-0.2-1.2c-0.2-0.8-0.6-2.4-0.6-2.5l-0.4-1.6c0-0.1-0.3-1.3-0.4-1.9c0.3-0.1,0.9-0.3,1.4-0.4 c0.4,0.4,0.7,0.8,1.1,1.2c0.3,0.3,0.9,0.9,1.1,1.2c0.8,0.8,1.9,1.7,3,2.6c0-0.4-0.1-1.1-0.2-1.4c0-0.1-0.3-0.8-0.4-1.3 c-0.5-2.2-0.6-2.6-0.6-2.7c0-0.2-0.1-0.5,0.1-0.5c0.1,0,0.8-0.1,1.3-0.1L15.8,35.9z" />
                <path d="M20.7,38.2c-0.6,0.1-1.1,0.2-1.9-0.4c-0.1-0.1-0.3-0.1-0.4-0.1c-0.5-0.3-1-0.4-1.3-0.9 c-0.2-0.3-0.8-1.5-0.9-2c-0.1-0.5-0.1-0.9,0.1-1.7c0.1-0.5,0.4-1.5,1-1.9c0.5-0.4,1.3-1.1,2-1.3c0.1,0,0.9-0.1,1.2-0.1 c0.8,0.1,2.3,0.6,3,1.6c0.5,0.7,0.6,0.8,0.7,1.4C24.8,35.6,23.3,37.6,20.7,38.2z M22.6,32.7c-0.2-0.2-0.4-0.4-0.6-0.6 c-0.1-0.2-0.5-0.6-0.9-0.7c-0.2,0-0.4-0.1-0.6-0.1c-0.4,0-1.4,0.2-1.5,0.2c-0.1,0-0.4,0.1-0.5,0.2c-0.8,0.2-1.4,2.4-1.2,3 c0,0.2,0.6,0.8,0.6,0.9c0.9,1,2.4,1.2,3.1,1c1.3-0.3,2-2.2,1.8-3.2C22.9,33.4,22.7,32.9,22.6,32.7z" />
                <path d="M34.1,31.1c0.4,1.7,0.6,2.4,0.6,2.5c0,0.1,0.2,0.9,0.2,1.3c-0.1,0-0.3,0.1-0.4,0.1 c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0-0.3,0-0.5,0.1c-0.5-0.9-0.3-0.8-0.3-1.1l-0.3-1.3c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.4 c-0.1-0.5-0.3-1.4-0.3-1.5s0-0.1,0-0.1c-0.7,1.5-0.8,4.2-1.4,5.5l-1,0.2c-0.8-0.6-1-1.4-2-2.4c-0.1-0.2-0.5-0.3-0.6-0.5 c-0.3-0.3-0.7-0.9-1-1.4c0-0.1-0.1-0.1-0.2-0.2c-0.2,0.1,0.1,0.5,0.1,0.7l0.3,1.3c0,0.1,0,0.4,0,0.5c0,0.2,0.2,0.6,0.2,0.8 c0.2,0.5,0.3,1.1,0.4,1.7c-0.2,0.1-0.5,0.2-0.6,0.2c-0.1,0-0.4,0.1-0.6,0.1c-0.3,0-0.5-0.6-0.5-0.6l-0.3-1.4c0-0.1-0.3-1-0.4-1.1 c0-0.1-0.1-0.6-0.1-0.9c-0.2-1.3-0.4-2.7-0.6-4c0.2,0,0.4-0.1,0.5-0.1c0.2-0.1,0.4-0.2,0.5-0.3c0.1,0,0.4-0.1,0.6,0.1 c0.2,0.2,0.4,0.6,0.6,0.8c0.3,0.3,0.6,0.7,0.7,1c0.3,0.4,0.9,0.9,1.2,1.3c0.4,0.6,1,1.9,1.6,2.3c0,0,0,0,0.1-0.1 c0.4-2.2,0.9-4.4,1.3-6.5c0-0.1,0.2-0.3,0.3-0.3c0.1,0,1.2-0.1,1.3-0.1c0.3,0.3,0.5,1.3,0.6,1.8C33.8,28.9,34,30.3,34.1,31.1z" />
                <path d="M37.1,34.5c-0.2,0.1-0.5,0.2-0.6,0.2c-0.3,0.1-0.5,0.1-0.8,0c-0.1-0.3-0.1-0.7-0.2-0.9 c-0.1-0.3-0.3-0.8-0.3-0.9c0-0.1-0.1-0.9-0.1-1.3c0-0.2-0.2-0.5-0.2-0.7c-0.2-0.6-0.2-1.4-0.3-2c-0.1-0.7-0.4-1.3-0.5-2 c0,0,0-0.2,0.1-0.2c0.3,0,0.6-0.1,1.2-0.3c0,0.1,0.1,0.3,0.1,0.5c0,0.2,0.1,0.6,0.1,0.9c0,0.1,0.2,0.3,0.2,0.4l0.3,1.4 c0,0.1,0.8,3.2,0.9,3.3C36.8,32.8,37.1,33.9,37.1,34.5z" />
                <path d="M43.9,29.6c0,0.8,0.2,1.7,0.6,2.9c0,0.1,0,0.2,0,0.3c-0.3,0.1-0.8,0.3-0.9,0.3c-0.1,0-0.3,0-0.4,0 c-0.3-0.3-0.9-1.1-1.4-1.5c-0.5-0.4-1.1-0.7-1.6-1.1c-0.7-0.6-1.3-1.5-2.3-2.1c-0.1,0.1,0.2,0.9,0.3,1.2l0.7,3.1 c0,0.1,0,0.2,0,0.3c0,0.3,0.2,0.6,0.2,0.9c0,0.1,0,0.2,0,0.3c-0.2,0.3-0.7,0.2-1.1,0.4c-0.2-0.1-0.4-0.6-0.4-0.8 c0-0.1-0.1-0.8-0.2-1.2c-0.2-0.8-0.6-2.4-0.6-2.5l-0.4-1.6c0-0.1-0.3-1.3-0.4-1.9c0.3-0.1,0.9-0.3,1.4-0.4 c0.4,0.4,0.7,0.8,1.1,1.2c0.3,0.3,0.9,0.9,1.1,1.2c0.8,0.8,1.9,1.7,3,2.6c0-0.4-0.1-1.1-0.2-1.4c0-0.1-0.3-0.8-0.4-1.3 c-0.5-2.2-0.6-2.6-0.6-2.7c0-0.2-0.1-0.5,0.1-0.5c0.1,0,0.8-0.1,1.3-0.1L43.9,29.6z" />
                <path d="M50.2,31.5c-0.2-0.2-0.5-0.6-0.7-0.9C48,31,47.1,31,46.7,31.3c-0.2,0.2-0.1,0.7-0.2,1L45,32.7 c0.4-1.6,0.5-4,0.7-5.6c0-0.3,0.3-1.2,0.5-1.8c0.1-0.4,0.2-1,0.3-1.5c0.1,0,0.3,0.2,0.4,0.3c0.2,0.3,0.4,0.7,0.6,1 c0.2,0.3,0.7,0.9,1,1.3c1,1.5,1.9,3.1,3.2,4.8L50.2,31.5z M48,28.4c-0.2-0.3-0.5-0.7-0.7-1.1c-0.2,0.8,0,1.6-0.3,2.4 c0.4-0.1,1.2-0.2,1.7-0.3C48.4,29.1,48.1,28.7,48,28.4z" />
                <path d="M55.9,23.1c-0.1,0-1.1,0.2-1.2,0.2c-0.2,0-0.5,0.1-0.6,0.3c0.2,0.7,0.3,1.7,0.4,2.3 c0.1,0.3,0.3,0.9,0.3,1l0.6,2.6c0,0.2,0,0.8,0.2,0.9c-0.6,0.1-0.9,0.2-1.3,0.3c-0.2-0.3-0.2-0.8-0.4-1.3c0-0.1,0-0.3-0.2-0.9 c-0.7-2.5-0.4-2-0.6-3.1c0-0.1-0.3-1.1-0.5-1.5c-0.1-0.1-0.6,0-0.7,0c-0.1,0-0.7,0.3-0.8,0.3c-0.1,0-0.4,0-0.7,0l-0.2-0.9 c-0.1-0.3,0.3-0.6,0.5-0.6c0.1,0,2.9-0.5,3-0.6c0.1,0,1.3-0.3,1.9-0.5c0.1,0.2,0.3,0.6,0.3,0.8C56,22.6,56.1,23.1,55.9,23.1z" />
                <path d="M61.7,21.8l-2.3,0.5c-0.4,0.1-0.5,0.1-1.1,0.4c0,0.5,0.2,1.2,0.3,1.6c0,0.1,0,0.1,0,0.2 c0,0.1,0.3,0.2,0.3,0.2c0.1,0,0.9-0.3,1-0.3c0.1,0,1-0.2,1.1-0.2c0.1,0,0.8-0.2,1.8-0.5l0,0.1c0.1,0.2,0.2,0.5,0.2,0.6 c0,0.2,0.1,0.6,0,0.8l-1.1,0.3c-0.1,0-1.2,0.1-1.3,0.1c-1.9,0.4-1.3,0.1-1.1,2.4c0.2,0.1,1.1,0,1.2,0c0.1,0,0.8-0.3,2.5-0.6 c0.1,0,0.3,0,0.4,0c0.1,0.2,0.1,0.4,0.2,0.6c0,0.1,0.1,0.2,0.2,0.2l0,0.2l-5.5,1.2c-0.1,0-0.1-0.1-0.1-0.1 c-0.1-0.3-0.1-1.1-0.2-1.4c-0.4-1.8-1.3-5.2-1.3-5.3c0-0.1-0.1-0.8-0.2-1.1c0.9-0.3,2.6-0.9,2.7-0.9c0.1,0,1.9-0.3,2.9-0.5 C62.3,21.5,62.6,21.6,61.7,21.8z" />
              </g>
              <g id="others" fill="#00a19b">
                <path d="M32.3,47.3l0,0.2l-0.1,0.2L32.1,48L32,48.4l-0.1,0.2L31.7,49l-0.1,0.3l-0.1,0.2l-0.2,0.4l-0.1,0.2 l-0.1,0.2L31,50.5l-0.1,0.2l-0.1,0.2l-0.3,0.3l-0.2,0.2l-0.2,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1L29.1,52l-0.2,0l-0.2,0l-0.2,0l-0.2,0 l-0.2,0l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.2-0.2l-0.3-0.4l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.5l-0.1-0.7l0-0.2l0-0.7l0-0.2 l-0.1-0.9l0-0.5l0-0.2l0-0.2l0-0.3l0-0.3l0-0.2l0-0.2l-0.1-0.1l-0.2,0l-0.2,0l-0.2,0.1l-0.1,0.1l-0.2,0.3L25.1,46l-0.1,0.2 L25,46.5l-0.2,0.4l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.3,0.3l-0.2,0.2l-0.2,0.1l-0.4,0.2L23,48.8L22.9,49l-0.1,0.2 l-0.1,0.2l0,0.1l-0.1,0.2l0,0.2l-0.1,0.4l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2l0,0.1L22,51.6L21.7,52l-0.1,0.2l-0.1,0.2l-0.1,0.2 l-0.1,0.2l-0.1,0.1l-0.2,0.2l-0.1,0.1l-0.2,0.2l-0.2,0.1l-0.5,0.4L19.7,54l-0.4,0.2l-0.2,0.1l-0.3,0.1l-0.2,0l-0.2,0L18,54.4 l-0.2,0l-0.2,0l-0.2,0l-0.2,0l-0.2,0l-0.2,0l-0.2-0.1l-0.2-0.1L16,54.1L15.8,54l-0.2-0.1l-0.2-0.1l-0.2-0.1L15,53.4l-0.2-0.2 l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2L14,51.4l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.5l0-0.5l0-0.2l0-0.2 l0.1-0.4l0.1-0.2l0.1-0.2l0.1-0.2l0.2-0.1l0.2-0.1l0.2,0l0.2,0.1l0.2,0.1l0.2,0.1l0.1,0.2l0,0.2l0,0.2l0,0.2l0,0.2l0,0.9l0,0.2 l0,0.2l0,0.2l0.1,0.5l0.1,0.2l0.1,0.2l0.2,0.4l0.1,0.2l0.1,0.2l0.3,0.4l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0l0.2,0l0.5-0.1 l0.2,0l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.2l0.1-0.1l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.1l0.1-0.2l0.2-0.4l0.1-0.2 l0.1-0.3l0.1-0.3l0-0.2l0-0.2l-0.1-0.1l-0.2-0.1l-0.3,0l-0.2,0l-0.5,0l-0.3,0l-0.6-0.1L18.5,49l-0.2,0l-0.2-0.1l-0.2-0.1l-0.4-0.2 l-0.2-0.1L17,48.4l-0.2-0.1l-0.2-0.1l-0.6-0.4l-0.2-0.2l-0.2-0.2l-0.2-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.2-0.4l-0.1-0.2 l-0.1-0.2l-0.1-0.4l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0.1-0.4l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.2-0.2l0.3-0.3 l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2,0l0.2-0.1l0.6-0.1l0.2,0l0.2,0l0.2,0l0.2,0l0.2,0l0.4,0.1l0.2,0 l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.2l0.2,0.2l0.1,0.2l0.1,0.2l0.4,0.6l0.1,0.2l0.1,0.2l0.2,0.4l0.1,0.2 l0.1,0.2l0,0.2l0.1,0.2l0.1,0.4l0.1,0.7l0,0.2l0,0.5l0,0.2l0,0.2l0,0.2l0,0.2l0,0.2l0,0.2l0.1,0l0.1-0.1l0.2-0.1l0.2-0.2l0.1-0.1 l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.3l0-0.1l0-0.1l0-0.1l-0.1-0.2l-0.1-0.2l-0.1-0.2l0-0.2l0-0.2 l0.1-0.2l0.2-0.1l0.2-0.1l0.2,0l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0l0.2,0l0.2-0.1l0.1-0.1l0.1-0.2l0.1-0.9l0-0.2l0-0.4l0-0.2l0-0.5 l0-0.2l0-0.3l0-0.2l0-0.2l0.1-0.2l0.1-0.1l0.2-0.1l0.2-0.1l0.2,0l0.2,0l0.2,0l0.2,0l0.2,0.1l0.2,0.1l0.1,0.2l0,0.2l0,0.3l0,0.2 l0,0.2l0,0.3l0,0.5l0,0.3l-0.1,0.5l0,0.5l0,0.2l0.1,0.1l0.2,0l0.3-0.1l0.1-0.1l0.6-0.1l0.2,0l0.2,0.1l0.1,0.2l0.1,0.2l0,0.2l0,0.2 l0,0.2l-0.1,0.1L30,44.3l-0.3,0.1l-0.2,0.1l-0.2,0.1l-0.6,0.1l-0.2,0.1l-0.2,0.1l-0.1,0.1l-0.1,0.2l0,0.2l0,0.2l0,0.5l0,0.4l0,0.2 l0,0.2l0,0.5l0,0.2l0,0.4l0,0.7l0.1,0.7l0.1,0.5l0.1,0.2l0.1,0.2l0.2,0.2l0.2,0.1l0.2,0l0.2,0l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.2 l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.3l0.1-0.1l0.1-0.2l0.1-0.2l0.1-0.4l0.1-0.2l0.1-0.2 l0.1-0.1l0.2,0l0.2,0l0.2,0.1l0.1,0.1L32.3,47.3z M20.5,44.2L20.5,44l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2L19.9,43l-0.1-0.2 l-0.2-0.2l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.2,0l-0.2,0L18,42.4l-0.2,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1L17,43l-0.1,0.2 l-0.1,0.2l-0.1,0.5l0,0.2l0,0.2l0,0.5l0,0.2l0,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.2,0.2l0.2,0.2l0.2,0.1 l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.4,0.2l0.2,0.1l0.2,0.1l0.2,0l0.2,0.1l0.4,0.1l0.2,0l0.2,0l0.1-0.1l0.1-0.2l0-0.2l0-0.2l0-0.2 l0-0.2l0-0.2l0-0.2l-0.1-0.7l0-0.2l0-0.2l-0.2-0.9L20.5,44.2z" />
                <path d="M32.7,37.7l0.2-0.1l0.3-0.1l0.2,0l0.2,0l0.2,0l0.2,0.1l0.1,0.1l0,0.2l-0.1,0.4l0,0.2l-0.1,0.4 l0,0.2L34,40l0,0.2l0,0.2l0,0.2l0,0.4l0,0.4l0,0.2l0,0.3l-0.1,0.4l0,0.2l0,0.2l0,0.2l0,0.2l0,0.2l0,0.2l0,0.2l0,0.4l0,0l0.1-0.1 l0.1-0.2l0.1-0.2l0.3-0.4l0.1-0.2l0.1-0.2l0.1-0.2l0.2-0.2l0.2-0.2l0.4-0.3l0.2-0.1l0.2-0.1L36,42l0.3-0.1l0.3,0l0.1,0l0.2,0 l0.2,0l0.2,0.1l0.2,0.1l0.2,0.2l0.1,0.2l0.1,0.2L38,43l0.1,0.7l0,0.2l0,0.5l0,0.2l0,0.5l0,0.2l0,0.2l0,0.7l0,0.2l0,0.2l0,0.2 l0,0.2l0,0.2l0,0.2l0,0.2l0,0.2l0.1,0.2l0.1,0.2l0.2,0.1l0.2,0l0.2-0.1l0.2-0.2L39,48l0.1-0.2l0.1-0.2l0.2-0.4l0.1-0.2l0.1-0.2 l0.1-0.2l0.2-0.4l0-0.2l0.1-0.2l0.1-0.2l0-0.2l0.1-0.2l0.1-0.2l0.2,0l0.2,0.1l0.1,0.1l0,0.2l0,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2 l0,0.2l-0.1,0.2l-0.1,0.2L40.4,47l-0.1,0.2l-0.2,0.4l-0.1,0.2L40,48l-0.2,0.4l-0.3,0.4L39.4,49l-0.3,0.3l-0.2,0.2l-0.2,0.1 l-0.2,0.1l-0.4,0.2L37.7,50l-0.2,0l-0.2,0L37,50l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2L36,48.4l0-0.5 l0-0.2l0-0.2l0-0.2l0-0.2l0-0.7l0-0.4l0-0.2l0-0.4l0-0.2l0-0.2l0-0.2l0-0.2l0-0.3l-0.1-0.2l-0.2-0.2l-0.2,0l-0.2,0l-0.2,0.1L35,44 l-0.2,0.2l-0.2,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2L34.1,45L34,45.2l-0.2,0.4l-0.1,0.2L33.7,46l-0.1,0.4l0,0.2l0,0.2l0,0.7l0,0.2 l0,0.2l0,0.2l0,0.2l0,0.5l0,0.2l0,0.5l0,0.2l0,0.2l0,0.2l0,0.2l-0.1,0.2l-0.1,0.1l-0.2,0.1L32.9,51l-0.2,0.1l-0.2,0.1l-0.2,0 l-0.4,0l-0.2,0l-0.2-0.1L31.4,51l0-0.2l0-0.2l0-0.2l0-0.2l0-0.5l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2 l0-0.2l0-0.2l0-0.2l0-0.2l0-0.3l0-0.2l0-0.2l0-0.3l0.1-0.4l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0.1-0.4l0-0.2l0-0.2l0-0.2l0-0.2 l0-0.2l0-0.2l0-0.2l0.1-0.9l0-0.2l0.1-0.4l0-0.2l0-0.4l0-0.3l0-0.2l0-0.3l0-0.2l0-0.1l0.1-0.3l0-0.2l0.1-0.2l0.2-0.1L32.7,37.7z" />
                <path d="M40.3,43.9l0.1-0.3l0-0.1l0.1-0.2l0.2-0.4l0.1-0.2l0.2-0.4l0.1-0.2l0.1-0.2l0.2-0.2l0.2-0.2 l0.2-0.2l0.2-0.2l0.5-0.4l0.2-0.1l0.2-0.1l0.2-0.1l0.4-0.1l0.4-0.1l0.2,0l0.5,0l0.2,0l0.2,0l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1 l0.2,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0,0.2l0,0.5l0,0.2l0,0.2l-0.2,0.6l-0.1,0.2L46,44l-0.1,0.2l-0.2,0.2l-0.2,0.1l-0.2,0.1 L45,44.8l-0.2,0.1L44.6,45L44,45.2l-0.2,0l-0.2,0l-0.2,0l-0.4,0l-0.2,0l-0.2,0l-0.1,0l0,0.1l0,0.2l0.1,0.2l0.1,0.2l0.1,0.2 l0.1,0.2l0.1,0.2l0.2,0.1l0.2,0.1l0.4,0.2l0.2,0l0.2,0l0.2,0l0.4-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.2l0.2-0.2 l0.2-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.2-0.4l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.1l0.2,0 l0.2,0.1l0.1,0.1l0,0.2l0,0.2l0,0.2l-0.1,0.2l-0.1,0.2L48,44.7l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2l0,0.1l-0.1,0.2l-0.1,0.2 l-0.1,0.2l-0.1,0.1L47,46.6l-0.1,0.2L46.8,47l-0.2,0.2l-0.1,0.2l-0.2,0.2l-0.2,0.1L46,47.7l-0.2,0.1L45.6,48l-0.2,0.1l-0.2,0.1 L45,48.3l-0.6,0.2L44,48.6l-0.2,0l-0.2,0l-0.2,0l-0.2,0l-0.2,0l-0.2,0l-0.2-0.1l-0.1,0L42,48.4l-0.2-0.1l-0.2-0.1l-0.4-0.3 l-0.2-0.2l-0.3-0.4l-0.1-0.2L40.6,47l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.7l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2L40.3,43.9z M44.7,42.3l0-0.2l-0.1-0.2l-0.1-0.1l-0.2-0.1l-0.2,0l-0.2,0l-0.2,0.1l-0.2,0.1L43.3,42l-0.2,0.2l-0.3,0.4l-0.1,0.2l-0.1,0.2 l-0.1,0.2l-0.1,0.4l-0.1,0.2l0,0.2l0,0.2l0,0.2l0,0.1l0.1,0l0.2,0l0.2,0l0.3,0l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.2 l0.2-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2L44.7,42.3z" />
                <path d="M54.8,41.8l0.1,0.1l0,0.2l0,0.2l-0.1,0.2l-0.1,0.2L54.7,43l0,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2 L54.3,44l-0.1,0.2l-0.1,0.2l-0.1,0.2L54,44.8l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.2,0.2l-0.2,0.2l-0.3,0.2l-0.2,0.2 l-0.2,0.1l-0.2,0.1L52,46.7l-0.2,0.1l-0.5,0.1l-0.2,0l-0.2,0l-0.2,0l-0.2-0.1l-0.4-0.2l-0.2-0.2l-0.2-0.2l-0.1-0.2l-0.1-0.2 l-0.1-0.2l-0.1-0.2l-0.1-0.2l0-0.2l0-0.3l0-0.2l0-0.2l0-0.2l0-0.2l0.1-0.2l0.2-0.6l0.1-0.2l0-0.1l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2 l0.1-0.2l0.1-0.2l0-0.2l0-0.2l-0.1-0.2l-0.2-0.2l-0.1-0.1l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.1-0.1l-0.1,0l0,0.1l0,0.2l0,0.2l-0.1,0.9 l0,0.2l0,0.2l-0.1,0.3l0,0.2l-0.1,0.3l0,0.2l0,0.2l0,0.2l0,0.2l-0.1,0.2l-0.1,0.2L48,44.2l-0.2,0l-0.2,0l-0.1-0.1l0-0.2l0-0.2 l0-0.3l0-0.1l0.1-0.3l0-0.2l0.1-0.4l0.1-0.2l0-0.2l0.1-0.9l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l0-0.2l-0.1-0.2l-0.1-0.2l-0.1-0.2 L47.6,39l-0.1-0.2l-0.1-0.2l0-0.2l0-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.2-0.1l0.2-0.1l0.2,0l0.2,0l0.2,0.1l0.2,0.2l0.1,0.2l0.1,0.2 l0.1,0.2l0,0.2l0,0.2l0,0.1l0.1,0.1l0.4,0.2l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.4,0.2l0.2,0.1l0.3,0.3l0.1,0.2l0.2,0.2 l0.1,0.2l0.1,0.2l0,0.2l0,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.4,1.1l-0.1,0.5l-0.1,0.4l0,0.2l0,0.2l0,0.2l0,0.2l0.1,0.2l0.1,0.2 l0.1,0.2l0.2,0.1l0.2,0l0.2,0l0.2-0.1l0.2-0.1l0.2-0.1l0.1-0.1l0.2-0.2l0.1-0.1l0.1-0.2l0.1-0.2l0.2-0.4l0.1-0.2l0.1-0.1l0.1-0.2 l0.1-0.3l0.2-0.6l0.1-0.3l0.1-0.2l0.1-0.1l0.2,0L54.8,41.8z" />
                <path d="M56.4,36.9l0.2-0.2l0.2-0.1l0.2-0.1l0.2-0.1l0.4-0.1l0.2,0l0.2,0.1l0.2,0.1l0.1,0.2l0,0.2l0,0.2 l-0.1,0.2l0,0.1l0,0.1l0.1,0.2l0.1,0.2l0.1,0.2l0.3,0.6l0.1,0.2l0.1,0.2l0.5,0.7l0.1,0.2l0.4,0.6l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.2 l0.1,0.2l0,0.2l0.1,0.2l0,0.2l0,0.2l0.1,0.1l0.1,0l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.2l0.2-0.2l0.1-0.2l0.2-0.4l0.1-0.2 l0.1-0.2l0.2-0.4l0.1-0.2l0.1-0.2l0.1-0.2l0.2-0.1l0.2,0.1l0.1,0.1l0,0.2l0,0.2l-0.1,0.2l-0.1,0.2L63,41.3l-0.1,0.2l-0.1,0.2 l-0.1,0.2l-0.1,0.2l-0.2,0.2l-0.1,0.2l-0.1,0.1L62,42.8L61.9,43l-0.2,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1l-0.4,0.1l-0.1,0 l-0.1,0.1L60.1,44L60,44.3l-0.2,0.2l-0.2,0.2l-0.1,0.1L59.1,45l-0.3,0.1l-0.8,0.3l-0.2,0l-0.2,0l-0.2,0l-0.2,0l-0.2,0l-0.2,0 l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.3-0.3l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.2-0.4l0-0.2l0-0.2l0.1-0.2l0.1-0.2l0.2-0.1l0.2-0.1l0.2,0 l0.2,0.1l0.1,0.1l0.2,0.4l0.1,0.2l0.1,0.2l0.2,0.1L57,44l0.2,0.1l0.2,0.1l0.2,0l0.2,0L58,44l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1 l0-0.1l-0.1-0.1l-0.1-0.1L58,43.1l-0.1-0.2l0-0.2l0.1-0.2l0.1-0.2l0.1-0.1l0.1-0.1l0-0.1l-0.1-0.2l-0.1-0.2L58,41.4l-0.1-0.2 L57.8,41l-0.2-0.4l-0.1-0.2l-0.1-0.2l-0.2-0.4l-0.1-0.2L57,39.5l-0.1-0.2l-0.1-0.2l-0.1-0.2l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1,0 l-0.1,0.2l-0.1,0.2L56,38.8l-0.1,0.2l-0.1,0.2l-0.1,0.2L55.6,40l-0.1,0.2l-0.1,0.2l-0.1,0.2l-0.1,0.2L55.2,41l-0.1,0.3l0,0.1 l-0.1,0.3L55,41.9l-0.1,0.3l-0.1,0.2l-0.1,0.1l-0.2,0.1l-0.2-0.1l-0.1-0.1l0-0.2l0-0.2l0.1-0.2l0.1-0.2l0-0.2l0.1-0.2l0.1-0.2 l0.1-0.2l0.1-0.2l0.2-0.4l0.1-0.4l0-0.2l0.1-0.2l0.1-0.2l0.2-0.4l0.1-0.2l0.3-0.6l0.2-0.4l0.3-0.4L56.4,36.9z" />
              </g>
            </g>
          </svg>
        </Link>
      </NominateSignStyled>
    );
  }
}

export default SignNominate;