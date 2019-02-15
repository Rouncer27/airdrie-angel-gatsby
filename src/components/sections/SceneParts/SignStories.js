import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StoriesSignStyled = styled.div`
  position: absolute;
  bottom: 7rem;
  right: 40%;
  width: 5.5rem;
  z-index: 6000;
`;

class SignStories extends Component {
  render() {
    const singExtraClass =
      this.props.location === "nominate-page-stories"
        ? this.props.location
        : "";
    return (
      <StoriesSignStyled className={singExtraClass}>
        <Link to="/stories">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 77.8 145"
          >
            <g id="share-sign">
              <path
                d="M77.7,69.3c-0.3-1.4-0.2-2.9-0.1-4.4c0.2-1.5,0.1-3,0.1-4.6c-0.1-2.5,0.2-4.9,0-7.4 c-0.4-4.4-0.1-8.9-0.2-13.3c0-0.4,0-0.8,0.1-1.2c0.1-0.6,0-1.1-0.3-1.5c-0.3-0.4-0.3-0.9,0-1.3c0.2-0.4,0.2-0.9,0.1-1.4 c-0.4-2.6-0.3-5.2-0.3-7.8c0-1.7-0.1-3.5,0.2-5.2c0.1-0.3,0-0.7,0-1c-0.2-1.7-0.3-3.3-0.3-5c0-0.7-0.2-1.3-0.8-1.7 c-1-0.6-1.8-1.4-2.3-2.4c-0.5-0.8-1.2-1-2-1.1c-1.8,0-3.6,0-5.4,0c-3.9,0-7.7,0.3-11.5,0.5c-0.7,0-1.3,0-2,0.1 c-1.7,0-3.3,0.1-5,0.1c-0.5,0-0.9,0-1.4,0c-0.5,0-0.8-0.4-0.9-0.9c-0.1-0.7-0.1-1.5-0.1-2.2c0.1-1.4,0.2-2.8,0.4-4.2 c0.1-0.5,0-0.7-0.3-1.1c-0.4-0.5-0.9-1-1.2-1.5c-0.4-0.6-1-0.9-1.7-0.7c-1.1,0.4-2.2,0.1-3.3-0.1C38.8,0,38.2-0.1,37.6,0 c-0.7,0.1-1.1,0.5-1.2,1.1c-0.2,1.6-0.4,3.2-0.1,4.8c0.3,1.5-0.2,2.9-0.1,4.3c0,0.5-0.4,0.7-0.8,0.7c-1.4,0.1-2.8,0.2-4.2,0.3 c-2.8,0.1-5.6,0.1-8.4,0c-2.1,0-4.1-0.3-6.2-0.3c-1.3-0.1-2.5-0.1-3.8,0c-3.2,0.3-6.5,0.4-9.7,0.3c-1.4-0.1-2,0.6-2.3,2 c-0.3,1.7-0.5,3.4-0.4,5.1c0.1,1.1,0,2.3-0.1,3.4c-0.1,1.1-0.1,2.1-0.1,3.2c0,1.8,0.1,3.6-0.2,5.4c-0.2,1.3,0.3,2.5,0.4,3.7 c0,0.4,0.4,0.7,0.8,0.7c0.5,0.1,1.1,0,1.5,0.3C2.9,35.2,3,35.4,3,35.6c0,0.2-0.1,0.4-0.3,0.5c-0.5,0.2-1,0.3-1.5,0.4 c-0.6,0.2-0.8,0.6-0.8,1.2c0.1,2.9,0.3,5.8,0.3,8.8C0.7,53.4,0.9,60.3,1,67.2c0,0.8,0.2,1,0.9,1c1.5,0,2.9,0.5,4.3,0.7 c1.2,0.2,2.5,0.4,3.7,0.4c4,0.2,8.1,0.3,12.1,0.2c1.3,0,2.7,0.2,3.9,0.5c0.9,0.2,1.8,0.3,2.8,0.2c1.2,0,2.4,0,3.6,0 c0.5,0,0.9,0,1.4,0.1c0.7,0.1,0.9,0.4,1,1.1c0,0.1,0,0.3,0,0.4c-0.2,2.3-0.1,4.5-0.1,6.8c-0.1,2.9-0.2,5.8-0.2,8.8 c0,1.2,0.1,2.4,0.1,3.6c0.1,3.6,0.1,7.3,0.1,10.9c0,1.8-0.3,3.6-0.3,5.4c0,4.8-0.1,9.7,0,14.5c0,1.5-0.2,2.9-0.1,4.3 c0.1,1.4,0.2,2.8,0.1,4.2c0,1.5-0.2,3-0.3,4.6c0,0.2-0.2,0.6-0.3,0.7c-0.9,0.6-1.1,1.6-1.3,2.6c-1,0-2.1-0.1-2.7-0.5 c-1.2-0.7-2.5-0.9-3.7-1.4c-0.1-0.1-0.3-0.1-0.4,0c-0.3,0.1-0.5,0.3-0.5,0.5c0,0.2,0.1,0.4,0.3,0.5c1.6,0.2,2.9,1.2,4.4,1.8 c0.9,0.3,1.3,1.1,1.6,1.9c0.1,0.5-0.1,0.8-0.6,0.7c-1.7-0.4-3.4-0.7-5.1-1.1c-0.4-0.1-0.8-0.2-1.1,0c-0.1,0.1-0.2,0.3-0.2,0.5 c0,0.1,0.1,0.3,0.2,0.3c1.1,0.3,2.2,0.6,3.3,0.8c2,0.4,4,1.1,5.7,2.2c0.7,0.5,1.4,0.6,2.2,0.2c0.5-0.2,1.1-0.2,1.5-0.5 c1.1-0.7,2-0.2,2.7,0.5c0.5,0.6,1.1,0.8,1.7,0.7c0.7,0,1.4,0,2-0.2c1.2-0.4,2.5-0.4,3.7-0.2c0.4,0,0.8,0.1,1.2,0.1 c0.3,0,0.5-0.3,0.5-0.5c0.1-0.3-0.1-0.6-0.3-0.6c-0.4-0.1-0.8-0.2-1.2-0.3c-0.5-0.1-0.9-0.1-1.4-0.2c-0.2,0-0.5-0.2-0.5-0.3 c-0.1-0.3,0.2-0.4,0.5-0.5c0.8-0.3,1.6-0.6,2.5-0.7c0.7-0.1,1.5-0.2,1.9-0.9c0.1-0.2,0.2-0.4,0.1-0.5c-0.1-0.1-0.3-0.2-0.5-0.2 c-1.5,0.2-3,0.6-4.4,1.2c-0.7,0.3-1.4,0.7-2.2,0.6c1-1.5,2.5-2.3,3.9-3.2c0.2-0.1,0.6,0,1,0c0.3,0,0.5-0.2,0.5-0.5 c0-0.3-0.3-0.6-0.6-0.6c-0.7,0-1.3,0.3-1.8,0.7c-1.1,0.8-2.3,1.6-3.4,2.4c-0.2,0.2-0.4,0.3-0.6,0.4c-0.2,0.1-0.4,0-0.5-0.2 c-0.1-0.1-0.1-0.3-0.1-0.4c0.1-2.5,0.4-4.9,2.2-6.8c0.1-0.1,0.1-0.3,0-0.3c0-0.1-0.2-0.1-0.3-0.1c-0.3,0.2-0.6,0.5-1,0.7 c-0.2,0.1-0.6,0-0.6-0.3c-0.1-0.9-0.2-1.9-0.2-2.8c0.1-3.1,0.2-6.1,0.3-9.2c0.1-1.8,0.3-3.6,0.5-5.4c0-0.5,0.2-1.1,0.1-1.6 c-0.1-2.6,0.3-5.2,0.4-7.7c0-0.9,0-1.9,0-2.8c0.2-3,0.3-6.1,0.2-9.1c0-1.1,0.2-2.1,0.3-3.2c0.5-5,0.7-9.9,0.4-14.9 c-0.1-1.5,0.1-3.1,0.1-4.6c0-0.7,0.4-1.2,1.2-1.4c1-0.3,2-0.4,3-0.2c1,0.2,2,0.2,3,0.2c1.3,0,2.7,0,4,0.2c0.3,0.1,0.7,0.1,1,0 c1.8-0.3,3.6-0.1,5.4,0c1.6,0.1,3.2,0.3,4.7,0.6c2.7,0.5,5.5,0.8,8.3,1.2c1.4,0.2,2.9-1.2,2.8-2.7 C77.8,69.9,77.7,69.6,77.7,69.3z"
                fill="#046937"
              />
              <path
                d="M48.5,11.9C42,12,35.5,12.2,28.9,12.3c-2.5,0-4.9-0.1-7.4,0c-1.3,0.1-2.7-0.1-4-0.3 c-2.4-0.3-4.8-0.1-7.2,0c-1.7,0.1-3.3,0.4-5,0.3c-0.2,0-0.4,0-0.6,0c-2.2,0.2-2.5,0.4-2.6,2.6c-0.2,2.4-0.3,4.9-0.4,7.3 c-0.1,2.3-0.1,4.5-0.1,6.8c0,1.1,0,2.3,0.3,3.4c0.2,0.8,0.6,1.1,1.4,1.2c0.3,0,0.7,0,1,0c0.4,0,0.7,0.1,0.7,0.6 c0,0.6,0.1,1,0.7,1.2c0.3,0.1,0.2,0.7-0.1,0.8c-0.7,0.5-1.5,0.8-2.4,1c-1,0.2-1.2,0.5-1.2,1.5c-0.1,3.4-0.1,6.9,0,10.4 c0.1,5,0.2,10.1,0.3,15.1c0,0.5,0,1.1,0.1,1.6c0.1,0.6,0.5,0.9,1.1,1c0.1,0,0.3,0,0.4,0c4.6-0.2,9.1,0.4,13.7,0.7 c3.1,0.2,6.2,0.1,9.4,0.2c4.6,0.1,9.3,0.2,13.9,0.1c1.6,0,3.3,0.1,5,0.3c2.3,0.3,4.6,0.4,6.9,0.3c1.4-0.1,2.8-0.1,4.2,0 c0.8,0.1,1.6,0.1,2.4,0.1c3.7,0,7.4,0,11.2,0c0.2,0,0.4,0,0.6,0c0.5,0,0.9-0.3,1-0.8c0.1-0.6,0.1-1.2,0.1-1.8 c-0.1-3.4-0.2-6.9-0.2-10.3c0-2.9,0.2-5.7,0.2-8.6c0-1.5,0-3.1,0-4.6c0-1.1,0.1-2.3,0.2-3.4c0.1-1.3-0.3-2.4-1.3-3.1 c-0.3-0.2-0.5-0.4-0.8-0.6c-0.3-0.3-0.4-0.7,0-0.8c1.2-0.6,1.4-1.6,1.5-2.8c0.1-1.5,0.2-3,0.1-4.6c0-0.5,0-0.9,0-1.4 c0-1.1,0-2.1,0-3.2c0-1.3,0-2.6,0.1-4c0.2-1.4,0.1-2.8,0.1-4.2c0-0.8-0.5-1.5-0.8-2.2c-0.2-0.3-0.5-0.4-0.8-0.4 c-2.1-0.1-4.2-0.6-6.3-0.4c-2.4,0.2-4.8,0.2-7.2,0.4c0,0,0,0,0,0.1C54.2,11.7,51.4,11.8,48.5,11.9z"
                fill="#fff"
              />
              <path
                d="M42,2.8c0-0.7-0.2-1-0.9-1.1c-0.5-0.1-1-0.2-1.6-0.3c-1.2-0.2-1.2,0-1.7,1.1 c-0.1,0.2-0.1,0.5-0.1,0.8c0.1,2,0.1,4,0.2,5.9c0,0.2,0,0.4,0.1,0.6c0.1,0.7,0.4,1.1,1.1,1.2c0.3,0.1,0.5,0.1,0.8,0.1 c1.9,0.1,2.3-0.2,2.3-2.2c0-0.1,0-0.1,0-0.2c0-0.9,0-1.9-0.1-2.8c0,0-0.1,0-0.1,0C42.1,4.9,42.1,3.9,42,2.8z"
                fill="#fff"
              />
              <path
                d="M61.5,69.4c-0.2,0-0.4,0.1-0.6,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.2 c0.5,0.1,0.9,0.2,1.4,0.2c2.3,0,4.5,0.4,6.7,0.9c1.3,0.3,2.6,0.3,3.9,0.5c0.3,0,0.5,0,0.7-0.3c0.1-0.3,0-0.5-0.2-0.7 c-0.3-0.3-0.6-0.5-1-0.6c-2.4-0.3-4.7-0.5-7.1-0.5C64,69.4,62.8,69.4,61.5,69.4z"
                fill="#fff"
              />
              <path
                d="M41.7,97.5c-0.1,2.4-0.2,4.9-0.3,7.3c0,1.1-0.1,2.1-0.1,3.2c0,0.5,0,0.9,0,1.4 c0,0.2,0.1,0.4,0.3,0.4c0.1,0,0.2-0.2,0.2-0.3c0.1-0.5,0.1-1.1,0.2-1.6c0.1-1,0.2-2,0.3-3c0-0.3,0.1-0.5,0.1-0.8 c-0.4-2.4,0-4.8-0.3-7.1c0-0.2,0.1-0.5-0.2-0.7C41.6,96.7,41.7,97.1,41.7,97.5z"
                fill="#fff"
              />
              <path
                d="M36.1,139.3c-0.1,0.1-0.3,0.1-0.3,0.2c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0,0.3-0.2 C36.2,139.5,36.2,139.4,36.1,139.3z"
                fill="#046937"
              />
              <polygon points="42.6,72.8 42.7,72.7 42.6,72.6" fill="#046937" />
              <path
                d="M41.4,68.9l-1.8,0c-0.8-0.1-1.4-0.1-1.9,0l-2.1,0l0,67.1l2,0c-0.1,0.4-0.1,0.9-0.1,1.5 c0.1,0.4,0.2,1.1,0.4,1.8c0.1,0.3,0.2,0.5,0.5,0.4c0.3-0.1,0.6-0.3,0.6-0.7c-0.1-1-0.2-2-0.4-3l0.1,0l1.8-46.7 c0-0.1,0-0.1,0.1-0.2l0.1-0.1l-0.1,0.1L41.4,68.9z"
                fill="#fff"
              />
              <path
                d="M76,68c0.5-2.9,0.7-5.7,0.6-8.6c-0.1-2.6-0.2-5.3-0.3-8c0,0-0.1,0-0.1,0c-0.1-1.9-0.1-3.9-0.2-5.8 l0-30.9l-3.2-2l0,20.2c-0.1,0.4-0.2,0.9-0.3,1.3c-0.2,0.6-0.1,1,0.3,1.4l0,32.7l1.6,0.5c0.2,0.1,0.5,0.2,0.8,0.3c0,0,0,0,0.1,0 l0.6,0.2L76,68z"
                fill="#fff"
              />
              <g>
                <path
                  d="M25.4,30.3c-0.1,0-0.5-0.2-0.6-0.2c-1.4-0.5-3.2-1.5-3.2-3.4c0-0.3-0.2-0.7,0-1.1 c0-0.1,0.4-0.6,0.6-0.6c0.1,0,1.1,0.9,1.3,1.2c-0.5,0.9,0.2,1.6,0.8,1.8c0.6,0.2,1.8-0.1,2-0.7c0.7-1.8-1.5-2-2.3-3.1 c-0.1-0.1-0.3-0.2-0.5-0.3c-0.8-0.6-0.3-2.5-0.1-3c0.8-2.2,3.7-1.8,4.8-1.3c0.9,0.4,2.1,2.9,1.7,3.8c-0.1,0.2-0.4,0.5-0.5,0.5 c-0.1,0-0.7-0.5-1-0.7c-0.1-0.1-0.3-0.6-0.4-1c-0.1-0.4-0.6-0.8-0.9-0.9c-0.9-0.3-1.6,0.4-1.8,0.9c-0.4,1.1,1.3,1.7,1.6,2.1 c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.4,0.6,0.6c0.3,0.3,0.6,1.2,0.6,1.5c0,0.2-0.1,0.7-0.2,0.9C28.1,28.8,26.7,30.3,25.4,30.3z"
                  fill="#00a19b"
                />
                <path
                  d="M36.7,30.5c-0.4,0.9-0.7,2.3-1.2,3.4c-0.2-0.1-0.2-0.1-0.4-0.2c-0.1,0-1-0.2-1.3-0.3 c-0.2-0.2,0.1-0.8,0.2-1.1c0-0.1,1.2-2.5,1.3-2.6c0.3-0.8-0.1-0.8-0.7-1c-0.1,0-2-0.7-3.1-1.1c-0.1,0-0.2,0.1-0.2,0.3 c-0.7,2-0.9,3-1.6,3.9l-1.1-0.4c-0.1,0-0.2-0.2-0.3-0.3c0.2-0.4,0.4-0.8,0.4-1.2c0-0.3,0.1-0.8,0.1-1c0,0,1.2-2.1,1.7-3.5 c0-0.1,0.9-3.3,1-3.4c0.5-1.2,0.4-1.1,1.8-0.5c0.1,0,0.3,0.1,0.4,0.2L33.1,23c0,0.1-0.9,1.8-0.9,1.9c-0.3,0.9-0.4,1,0.2,1.2 c0.1,0,0.4,0.1,0.5,0.1c0.1,0,1.2,0.6,1.8,0.9c0.4,0.2,0.9,0.3,1.3,0.5c0.1,0,0.1,0,0.1,0c0.2-0.4,0.4-1.2,0.6-1.8 c0.1-0.1,0.4-0.5,0.5-0.8c0.2-0.5,0.4-1.1,0.7-1.6c0.2,0.1,0.7,0.2,0.8,0.3c0.1,0,0.4,0.2,0.6,0.3c0,0.1,0,0.3,0,0.4 c-0.1,0.4-0.4,1.2-0.4,1.3C38.8,25.9,36.8,30.4,36.7,30.5z"
                  fill="#00a19b"
                />
                <path
                  d="M42.6,36.7c-0.1-0.4-0.1-1-0.1-1.4c-1.9-0.7-2.9-1.4-3.5-1.2c-0.4,0.1-0.6,0.7-0.9,1l-1.9-0.7 c1.6-1.5,3.4-3.9,4.7-5.5c0.3-0.4,1.2-1,1.8-1.6c0.4-0.3,0.9-1,1.4-1.4c0.1,0.1,0.2,0.4,0.2,0.6c0,0.4-0.1,1-0.1,1.5 c0,0.5,0.1,1.4,0.1,2.1c0,2.3-0.1,4.7,0,7.5L42.6,36.7z"
                  fill="#00a19b"
                />
                <path
                  d="M42.4,31.8c0-0.5,0-1.1,0-1.7c-0.8,0.8-1.2,1.7-2,2.4c0.6,0.2,1.4,0.6,2,0.8 C42.4,32.8,42.4,32.3,42.4,31.8z"
                  fill="#fff"
                />
                <path
                  d="M50.6,40c-0.2-0.1-1-0.3-0.8-0.6c0.3-1.3,0.1-3.5-0.3-4.6c-0.2-0.4-0.9-0.3-1.3-0.6 c-0.2,0.1-0.3,0.6-0.4,0.9c-0.7,2.2-1,2.7-1.3,3.3c-0.4-0.2-0.9-0.5-1.1-0.6c-0.1,0-0.2-0.1-0.4-0.1c0-0.2,0-0.4,0-0.6l2.6-6.7 c0-0.1,0.4-0.9,0.7-1.5c0.1-0.2,0.3-0.7,0.4-1c0.3-0.2,1.5,0.2,1.5,0.2c0.1,0,1.9,0.9,2.8,1.3c0.6,0.3,1.6,2.1,1.5,2.7 c0,0.1-0.1,0.4-0.2,0.5c-0.4,1-1.8,2.9-3,2.5c0.3,1,0,1.5,0,2.5c0,1.1,0.4,1.7,0.3,2.5C51.3,40.2,50.7,40,50.6,40z"
                  fill="#00a19b"
                />
                <path
                  d="M51.2,30.6c-0.1,0-1-0.3-1.1-0.3c-0.1,0-0.3-0.2-0.5-0.3c-0.2,0.4-0.6,1.2-0.6,1.3 c-0.1,0.3-0.4,1.1-0.3,1.3c0.3,0.3,1,0.6,1.1,0.6c0.1,0,0.6,0.1,0.9,0.2c0.4,0.1,0.8,0.3,1.1,0.2c0.5-0.2,0.6-0.5,0.7-0.8 C52.9,31.6,52,30.9,51.2,30.6z"
                  fill="#fff"
                />
                <path
                  d="M61.7,34.4l-2.8-1.2c-0.5-0.2-0.6-0.3-1.5-0.4c-0.3,0.5-0.7,1.4-0.9,2c0,0.1-0.1,0.1-0.2,0.2 c-0.1,0.2,0.1,0.4,0.2,0.5c0.1,0,1.2,0.3,1.3,0.3c0.1,0,1.2,0.6,1.3,0.6c0.1,0,1,0.4,2.3,0.8l-0.1,0c0,0.2-0.2,0.6-0.2,0.7 c-0.1,0.2-0.3,0.8-0.6,0.8l-1.4-0.5c-0.1,0-1.3-0.7-1.5-0.8c-2.3-0.9-1.5-0.9-3,1.8c0.1,0.3,1.2,0.8,1.3,0.8c0.1,0,1,0.3,3.1,1.2 c0.1,0.1,0.3,0.2,0.5,0.3c0,0.2-0.2,0.5-0.2,0.8c0,0.1,0,0.3,0,0.4l-0.1,0.2l-6.8-2.6c-0.1-0.1,0-0.1-0.1-0.2 c0.1-0.4,0.6-1.3,0.8-1.7c0.8-2.2,2.3-6.6,2.3-6.7c0-0.1,0.5-0.9,0.6-1.3c1.1,0.3,3.4,0.9,3.5,0.9c0.1,0,2.3,1,3.5,1.6 C62.5,34.5,62.7,34.8,61.7,34.4z"
                  fill="#00a19b"
                />
              </g>
              <g>
                <polygon
                  points="10,37.7 10.2,37.7 10.5,37.8 10.7,37.9 10.9,38.1 11.1,38.2 11.2,38.5 11.2,38.7 11.1,38.9 11,39.2 10.9,39.4 10.8,39.6 10.7,39.9 10.5,40.4 10.5,40.6 10.4,40.9 10.4,41.1 10.4,41.4 10.4,41.6 10.5,41.9 10.6,42.2 10.7,42.5 10.9,42.8 11,43 11.2,43.2 11.4,43.3 11.6,43.5 11.9,43.6 12.1,43.7 12.4,43.7 12.6,43.7 12.9,43.7 13.1,43.7 13.4,43.7 13.6,43.6 13.8,43.5 14,43.4 14.3,43.2 14.5,43.1 14.6,42.9 14.8,42.7 15,42.2 15.1,42 15.2,41.8 15.3,41.5 15.3,41.2 15.3,41 15.3,40.7 15.3,40.5 15.2,40.2 15.2,40 15,39.5 14.9,39.2 14.8,39 14.7,38.7 14.6,38.5 14.4,38.3 14.2,37.8 14.1,37.6 14,37.3 13.9,37.1 13.7,36.8 13.6,36.7 13.5,36.4 13.4,36.1 13.3,35.9 13.2,35.4 13.2,35.1 13.1,34.9 13.1,34.6 13.1,34.3 13.1,34.1 13.2,33.6 13.2,33.3 13.3,33.1 13.5,32.8 13.6,32.6 13.7,32.4 13.8,32.2 13.9,31.9 14.1,31.7 14.2,31.6 14.5,31.4 14.7,31.2 14.9,31.1 15.1,31 15.6,30.8 15.8,30.7 16.1,30.7 16.3,30.7 16.6,30.7 16.9,30.7 17.1,30.7 17.4,30.7 17.6,30.7 17.9,30.7 18.6,30.9 19.1,31.1 19.3,31.2 19.5,31.4 19.8,31.5 20.2,31.8 20.4,32 20.6,32.2 20.7,32.3 20.9,32.6 21.1,33 21.2,33.3 21.3,33.5 21.3,33.8 21.3,34 21.3,34.3 21.3,34.6 21.2,34.8 21.1,35.3 21,35.5 20.9,35.8 20.6,35.9 20.4,36 20.1,36 19.9,36 19.6,35.9 19.4,35.8 19.2,35.6 19.1,35.4 19,35.2 19,34.9 19.2,34.4 19.3,34.1 19.3,33.8 19.2,33.6 19.1,33.3 19,33.1 18.8,32.9 18.6,32.7 18.4,32.6 18.1,32.5 17.9,32.5 17.6,32.4 17.4,32.4 17.1,32.4 16.9,32.4 16.7,32.5 16.5,32.7 16.3,32.8 16.1,33 16,33.2 15.8,33.4 15.7,33.9 15.6,34.2 15.6,34.4 15.6,34.7 15.6,35 15.6,35.2 15.7,35.5 15.7,35.8 15.9,36.3 16,36.5 16.1,36.8 16.3,37 16.4,37.2 16.5,37.5 16.6,37.7 16.9,38.2 17.1,38.7 17.3,39.2 17.4,39.5 17.5,39.8 17.6,40 17.7,40.5 17.7,40.8 17.8,41.1 17.8,41.3 17.7,41.9 17.6,42.1 17.5,42.7 17.3,43.1 17.1,43.4 17,43.6 16.8,43.8 16.5,44.2 16.3,44.4 16.1,44.5 15.8,44.7 15.4,44.9 15.1,45 14.9,45.2 14.7,45.2 14.4,45.3 13.8,45.4 13.5,45.4 13.1,45.4 12.8,45.3 12.5,45.3 11.2,45 10.7,44.8 10.5,44.7 10,44.5 9.8,44.3 9.6,44.2 9.2,43.8 9,43.6 8.9,43.4 8.7,43.2 8.6,43 8.5,42.7 8.3,42.2 8.3,42 8.2,41.7 8.2,41.4 8.2,41.2 8.2,40.9 8.2,40.7 8.3,40.4 8.3,40.1 8.4,39.9 8.5,39.6 8.6,39.4 8.8,38.9 8.9,38.7 9,38.5 9.2,38.2 9.3,38 9.5,37.8 9.7,37.7"
                  fill="#00205c"
                />
                <polygon
                  points="25.4,33.6 25.7,33.7 26,33.8 26.5,34 26.7,34.2 26.9,34.3 27,34.6 26.9,34.8 26.8,35 26.3,35.7 26.1,35.9 26,36.1 25.6,36.6 25.5,36.8 25.3,37 25,37.4 24.8,37.7 24.2,38.5 24.2,38.6 24.3,38.7 24.5,38.8 24.7,38.9 25.3,39.1 25.8,39.2 26.1,39.3 26.3,39.4 26.4,39.6 26.4,39.8 26.3,40 26.2,40.2 26.1,40.4 25.9,40.6 25.7,40.7 25.5,40.7 25.2,40.7 24.3,40.4 23.7,40.3 23.5,40.2 23.3,40.1 23.1,40.2 23,40.2 22.9,40.4 22.7,40.6 22.6,40.8 22.3,41.3 22.2,41.6 22.1,41.8 21.9,42 21.8,42.2 21.6,42.4 21.4,42.9 21.3,43.1 21.1,43.4 21.1,43.6 20.9,43.8 20.8,44.1 20.7,44.3 20.7,44.5 20.6,44.8 20.5,45 20.5,45.3 20.5,45.5 20.6,45.8 20.7,46 20.8,46.2 21,46.3 21.3,46.4 21.5,46.5 21.8,46.5 22,46.4 22.3,46.4 22.5,46.3 22.8,46.2 23.2,45.9 23.5,45.8 23.7,45.7 23.9,45.5 24.1,45.4 24.3,45.2 24.7,44.9 24.9,44.7 25.2,44.5 25.3,44.4 25.5,44.2 25.7,44.1 26,44.1 26.2,44.3 26.2,44.6 26.1,44.8 26,45 25.8,45.2 25.6,45.4 25.4,45.6 25.2,45.8 25,46 24.8,46.1 24.6,46.3 23.9,46.8 23.7,47 23.2,47.3 23,47.4 22.7,47.5 22.5,47.6 22,47.8 21.7,47.8 21.4,47.9 20.9,47.8 20.7,47.8 20.4,47.8 20.1,47.7 19.6,47.6 19.4,47.4 19.1,47.3 18.9,47.1 18.8,46.9 18.6,46.7 18.5,46.4 18.4,46.2 18.3,45.9 18.3,45.7 18.3,45.4 18.3,44.9 18.4,44.1 18.7,43.3 18.8,43.1 19,42.6 19.3,41.9 19.4,41.7 19.6,41.4 19.7,41.2 19.8,40.9 20,40.7 20.1,40.5 20.3,40.3 20.4,40 20.5,39.8 20.7,39.6 20.8,39.4 20.8,39.3 20.5,39.1 20.4,39.1 20.1,38.9 20,38.7 20,38.4 20,38.2 20.1,37.9 20.3,37.7 20.4,37.6 20.7,37.5 20.9,37.6 21.2,37.7 21.3,37.7 21.6,37.8 21.7,37.8 21.8,37.7 22,37.5 22.3,37.1 22.4,36.9 22.6,36.7 22.7,36.5 22.8,36.3 23,36 23.1,35.8 23.3,35.6 23.5,35.4 23.6,35.2 24.4,34.2 24.7,33.8 24.9,33.6 25.2,33.6"
                  fill="#00205c"
                />
                <polygon
                  points="33.1,41.7 33.3,41.8 33.6,42 33.7,42.1 34.1,42.5 34.3,42.8 34.4,43 34.6,43.5 34.6,43.8 34.6,44 34.7,44.3 34.6,44.6 34.6,44.9 34.5,45.2 34.4,45.7 34.3,46 34.2,46.2 34,46.4 33.9,46.7 33.7,47 33.6,47.2 33.4,47.4 33.1,47.8 32.9,48.1 32.7,48.3 32.4,48.6 32.4,48.7 32.4,48.8 32.6,48.8 32.9,48.9 33.1,48.9 33.4,48.8 33.7,48.8 33.9,48.7 34.2,48.6 34.4,48.5 34.6,48.4 34.9,48.2 35.1,48 35.5,47.6 35.7,47.4 35.9,47.3 36.1,47.1 36.2,47.1 36.4,47.2 36.6,47.4 36.6,47.6 36.5,47.8 36.4,48 36.2,48.2 36,48.4 35.8,48.6 35.6,48.7 35.4,48.9 35,49.2 34.5,49.5 34.3,49.6 34,49.7 33.8,49.8 33.6,49.8 33.3,49.9 33,49.9 32.8,49.9 32.6,49.8 32.3,49.8 32,49.7 31.8,49.7 31.5,49.6 31.3,49.5 31.2,49.5 31,49.5 30.8,49.6 30.6,49.7 30.4,49.8 30.1,49.8 29.3,50 29.1,50 28.9,50 28.6,50 28.3,50 27.8,49.9 27.5,49.9 27.2,49.8 27,49.7 26.7,49.7 26.5,49.5 26.3,49.4 26,49.3 25.8,49.1 25.6,49 25.4,48.8 25.2,48.6 25.1,48.4 24.9,48.1 24.8,47.6 24.7,47.3 24.7,47.1 24.7,46.8 24.7,46.5 24.8,46.2 24.8,46 25,45.4 25.1,45.2 25.2,44.9 25.3,44.7 25.6,44.2 25.8,44 25.9,43.8 26.2,43.3 26.4,43.1 26.6,42.9 26.8,42.7 27,42.5 27.2,42.3 27.4,42.2 27.6,42 28.1,41.7 28.3,41.6 29.6,41.2 29.9,41.1 30.1,41.1 30.4,41.1 30.7,41.1 31,41.1 31.2,41.1 31.5,41.1 32.1,41.2 32.3,41.3 32.6,41.4"
                  fill="#00205c"
                />
                <polygon
                  points="32,45 32.2,44.3 32.3,44 32.3,43.7 32.2,43.5 32.1,43.2 32,43 31.8,42.9 31.6,42.7 31.3,42.7 31.1,42.6 30.8,42.6 30.6,42.7 30.3,42.8 30.1,42.9 29.6,43.2 29.2,43.5 29,43.7 28.5,44.3 28.3,44.5 28.2,44.7 28,44.9 27.9,45.2 27.8,45.4 27.7,45.6 27.5,45.9 27.4,46.2 27.4,46.3 27.2,46.6 27.2,46.9 27.1,47.1 27.1,47.4 27.2,47.6 27.3,47.9 27.4,48.1 27.6,48.3 27.9,48.4 28.1,48.4 28.4,48.5 28.7,48.5 28.9,48.4 29.2,48.3 29.4,48.2 29.4,48 29.5,47.8 29.5,47.7 29.5,47.7 29.5,47.4 29.6,47.2 29.8,47 30.1,46.9 30.3,46.9 30.5,47 30.7,47 30.8,46.9 30.9,46.8 31.1,46.6 31.4,46.1 31.5,45.9 31.7,45.7 31.9,45.2"
                  fill="#fff"
                />
                <polygon
                  points="44.2,49.7 44.3,49.9 44.2,50.2 44,50.4 43.9,50.5 43.7,50.7 43.5,50.9 43.3,51.1 43.1,51.2 42.9,51.4 42.7,51.6 42.5,51.7 42.3,51.9 42.1,52 41.9,52.2 41.7,52.4 41.4,52.5 41.2,52.6 41,52.8 40.8,52.9 40.6,53 40.3,53 40,53.1 39.6,53.2 39.3,53.2 39,53.2 38.8,53.2 38.5,53.1 38.3,53.1 37.7,52.9 37.5,52.8 37.2,52.6 37,52.4 36.9,52.3 36.5,51.8 36.4,51.5 36.3,51.3 36.3,51 36.3,50.7 36.3,50.4 36.3,50.2 36.4,49.9 36.5,49.7 36.7,49.4 36.8,49.2 36.9,49 37.1,48.8 37.2,48.6 37.4,48.4 38,47.9 38.2,47.7 38.3,47.6 38.5,47.3 38.7,47.2 38.9,47 39.1,46.9 39.3,46.7 39.5,46.5 39.7,46.3 39.8,46.1 39.8,45.9 39.7,45.6 39.6,45.4 39.5,45.2 39.4,45 39.3,44.8 39.2,44.6 39.1,44.6 39.1,44.6 38.9,44.8 38.8,45 38.2,45.9 38,46.2 37.8,46.4 37.6,46.6 37.5,46.8 37.3,47 37.1,47.2 36.9,47.4 36.7,47.7 36.6,47.9 36.4,48.1 36.1,48.2 35.9,48.3 35.7,48.3 35.5,48.1 35.4,47.9 35.5,47.7 35.7,47.5 35.9,47.2 36,47.1 36.2,46.9 36.4,46.7 36.7,46.3 36.9,46.1 37.1,45.9 37.7,45 37.8,44.8 38,44.6 38.1,44.4 38.3,44.2 38.4,43.9 38.5,43.7 38.5,43.5 38.5,43.2 38.5,42.9 38.5,42.7 38.5,42.4 38.6,42.1 38.7,41.9 38.8,41.7 39,41.5 39.2,41.3 39.5,41.2 39.7,41.2 40,41.2 40.2,41.3 40.5,41.4 40.6,41.6 40.7,41.8 40.7,42.1 40.7,42.4 40.6,42.6 40.5,42.9 40.4,43 40.3,43.2 40.4,43.3 40.6,43.8 40.7,44 40.8,44.2 41,44.5 41.1,44.7 41.2,44.9 41.5,45.3 41.6,45.6 41.8,46 41.9,46.3 41.9,46.6 41.9,46.8 41.9,47.1 41.8,47.3 41.7,47.5 41.5,47.7 41.3,47.9 41,48 40,48.8 39.6,49.2 39.3,49.6 39.1,49.9 39,50.1 38.9,50.3 38.8,50.6 38.7,50.8 38.7,51.1 38.8,51.3 38.9,51.6 39.1,51.7 39.3,51.8 39.6,51.9 39.9,51.8 40.2,51.8 40.4,51.7 40.6,51.7 40.8,51.6 41.1,51.5 41.4,51.4 41.8,51.1 42,50.9 42.2,50.8 42.4,50.6 42.7,50.4 43.2,49.9 43.4,49.7 43.6,49.5 43.8,49.4 44,49.5"
                  fill="#00205c"
                />
                <polygon
                  points="42.5,54.3 42.3,54.2 42.1,54.1 42,53.9 41.8,53.7 41.7,53.4 41.7,53.2 41.6,52.9 41.6,52.7 41.7,52.5 41.8,52.2 41.9,52 42,51.7 42.1,51.5 42.3,51.3 42.5,50.9 42.7,50.6 42.8,50.4 42.9,50.2 43.1,50 43.5,49.4 43.7,49.1 43.8,48.9 44.1,48.5 44.2,48.3 44.4,48 44.7,47.6 45.2,46.8 45.3,46.5 45.6,46.1 45.8,45.9 46,45.8 46.2,45.7 46.5,45.7 46.7,45.7 47,45.8 47.5,46 47.8,46.1 48,46.3 48.1,46.5 48,46.7 47.9,46.9 47.7,47.2 47.6,47.4 47.5,47.6 46.9,48.4 46.7,48.6 46.6,48.8 46.3,49.3 46.2,49.5 46,49.7 45.9,49.9 45.4,50.5 45.3,50.8 45.2,51 45,51.2 44.9,51.4 44.7,51.6 44.6,51.8 44.5,52 44.4,52.2 44.2,52.7 44.1,52.9 44.2,53.1 44.3,53.3 44.6,53.3 44.8,53.3 45.1,53.3 45.3,53.2 45.6,53.1 46,52.8 46.2,52.6 46.5,52.4 47.1,52 47.3,51.8 47.5,51.7 47.6,51.5 47.8,51.3 48,51.1 48.2,50.9 48.5,50.8 48.7,50.9 48.9,51.1 48.9,51.3 48.8,51.6 48.7,51.8 48.5,52 48.1,52.3 47.9,52.5 47.5,52.9 47.3,53 47.1,53.2 46.9,53.3 46.4,53.6 46,53.9 45.8,54 45.5,54.2 45.3,54.3 45.1,54.3 44.8,54.4 44.6,54.5 44.3,54.5 44,54.6 43.8,54.6 43.5,54.6 43.3,54.6 42.8,54.5"
                  fill="#00205c"
                />
                <polygon
                  points="47.4,43 47.6,42.9 47.9,42.8 48.2,42.7 48.5,42.7 48.7,42.7 49,42.8 49.2,42.9 49.4,43.1 49.6,43.3 49.7,43.5 49.7,43.8 49.7,44 49.6,44.3 49.5,44.5 49.4,44.8 49.2,45 49,45.2 48.7,45.3 48.4,45.4 48.1,45.4 47.9,45.3 47.6,45.2 47.4,45.1 47.2,44.9 47,44.7 46.9,44.5 46.9,44.2 46.9,44 46.9,43.7 47,43.5 47.2,43.2"
                  fill="#00205c"
                />
                <polygon
                  points="49.1,49.7 49.3,49.5 49.4,49.4 49.7,49.2 50.1,48.8 50.3,48.7 50.8,48.4 51,48.3 51.2,48.2 51.5,48.1 51.8,48 52,47.9 52.3,47.9 53.1,47.8 53.4,47.8 53.7,47.8 53.9,47.8 54.4,48 54.9,48.1 55.2,48.2 55.7,48.4 55.9,48.6 56.1,48.8 56.3,49 56.5,49.2 56.6,49.4 56.7,49.7 56.8,49.9 56.8,50.2 56.8,50.5 56.8,50.7 56.8,51 56.7,51.3 56.4,51.7 56.3,52 56.1,52.2 55.5,52.7 55.3,52.8 54.9,53.1 54.6,53.2 54.4,53.3 54.1,53.3 53.9,53.3 53.4,53.4 53.1,53.4 52.8,53.4 52.1,53.2 51.8,53.1 51.6,53 51.3,52.9 50.9,52.7 50.6,52.6 50.4,52.5 50.3,52.5 50.2,52.6 50.2,52.8 50.1,53 50.1,53.3 50.1,53.5 50.1,53.8 50.1,54 50.2,54.3 50.3,54.5 50.6,54.9 50.8,55.1 51,55.2 51.2,55.3 51.7,55.5 52,55.5 52.3,55.6 52.5,55.6 52.7,55.6 53,55.6 53.4,55.5 53.8,55.4 54,55.4 54.3,55.3 54.5,55.2 54.7,55.1 55.2,54.8 55.4,54.7 55.6,54.5 55.8,54.3 56,54.1 56.2,54 56.4,53.8 56.6,53.6 56.8,53.4 57,53.4 57.2,53.4 57.4,53.6 57.5,53.9 57.4,54.1 57.2,54.2 57,54.4 56.9,54.6 56.7,54.8 56.5,55 56.3,55.1 56.1,55.3 55.9,55.5 55.7,55.6 55.5,55.7 55.3,55.9 55.1,56.1 54.8,56.2 54.6,56.3 54.4,56.4 54.1,56.5 53.9,56.6 53.7,56.7 53.4,56.8 53.2,56.9 52.9,56.9 52.6,56.9 52.4,56.9 52.1,57 51.9,57 51.6,57 51.4,56.9 50.6,56.8 50.1,56.6 49.9,56.5 49.6,56.4 49.4,56.3 49.2,56.2 48.9,56 48.7,55.9 48.5,55.7 48.4,55.5 48.2,55.3 48,55.1 47.9,54.9 47.7,54.4 47.6,54.1 47.5,53.6 47.5,53.3 47.5,53.1 47.6,52.8 47.6,52.5 47.7,52.3 47.9,51.5 48,51.3 48.1,51 48.3,50.8 48.4,50.6 48.6,50.4 48.7,50.2 48.9,49.9"
                  fill="#00205c"
                />
                <polygon
                  points="54.5,50.6 54.6,50.3 54.6,50.1 54.5,49.9 54.4,49.7 54.2,49.5 54,49.4 53.7,49.4 53.5,49.4 53.2,49.4 53,49.5 52.5,49.7 52.3,49.8 52.1,50 51.8,50.2 51.5,50.5 51.3,50.7 51.1,50.9 51,51.1 50.9,51.3 50.9,51.4 50.9,51.5 51.1,51.6 51.3,51.7 51.6,51.8 51.9,51.8 52.1,51.8 52.4,51.8 52.6,51.8 52.9,51.8 53.1,51.7 53.4,51.6 53.6,51.5 53.8,51.4 54.1,51.2 54.2,51"
                  fill="#fff"
                />
                <polygon
                  points="61.9,49.5 62.1,49.5 62.4,49.5 62.7,49.5 62.9,49.5 63.4,49.7 63.6,49.8 63.8,50.1 63.9,50.3 63.9,50.6 63.8,50.8 63.6,51 63.4,51.1 63.3,51.3 63.3,51.4 63.2,51.6 63.2,51.9 63.2,52.1 63.2,52.9 63.2,53.1 63.2,53.4 63.2,54.4 63.2,54.7 63.3,55.5 63.3,55.7 63.3,56 63.2,56.2 63.2,56.5 63.2,56.7 63.1,57 63,57.2 62.9,57.5 62.9,57.7 62.9,57.8 63,57.8 63.2,57.9 63.4,57.9 63.7,57.9 64,57.9 64.2,57.9 64.5,57.8 64.7,57.7 65.2,57.4 65.4,57.2 65.7,57.1 66.1,56.7 66.3,56.6 66.5,56.4 66.7,56.3 66.9,56.3 67.1,56.5 67.2,56.7 67.1,57 66.9,57.2 66.7,57.4 66.5,57.5 66.1,57.9 65.9,58.1 65.7,58.2 65.5,58.4 65.3,58.5 65,58.7 64.7,58.8 64.5,58.8 64.3,58.9 64,58.9 63.8,59 63.5,59 63.2,59 63,59 62.7,58.9 62.3,58.8 62.1,58.7 62,58.8 61.6,59 61.3,59.2 61,59.3 60.8,59.3 60.6,59.4 60.1,59.4 59.7,59.4 58.8,59.3 58.5,59.2 58.3,59.1 58,59 57.8,58.8 57.6,58.6 57.4,58.4 57.2,58.2 57,58 56.9,57.8 56.8,57.3 56.7,57 56.7,56.7 56.7,56.4 56.7,55.9 56.8,55.7 57,55.5 57.2,55.3 57.4,55.3 57.7,55.2 57.9,55.3 58.2,55.4 58.3,55.5 58.3,55.7 58.3,56.2 58.3,56.5 58.3,56.7 58.4,57 58.5,57.2 58.6,57.4 58.8,57.5 59,57.7 59.2,57.7 59.4,57.8 59.6,57.7 59.8,57.6 60,57.6 60.1,57.5 60.2,57.4 60.1,57.3 60.1,57.1 60,56.8 60,56.6 60.1,56.3 60.3,56.2 60.6,56 60.8,56 60.9,55.9 60.9,55.8 61,55.6 61,55.3 61,55.1 61,54.8 61,54.6 61,54.1 61,53.8 61,53.5 61,53 61,52.7 61,52.5 61,52.2 61,52 61.1,51.7 61.1,51.2 61.1,51.1 61.1,50.9 61,50.9 60.8,51 60.5,51.2 60.4,51.3 60.1,51.5 59.9,51.6 59.7,51.8 59.3,52.2 59.1,52.4 58.9,52.6 58.7,52.8 58.5,52.9 58.3,53.1 58.1,53.3 58,53.5 57.8,53.7 57.6,53.9 57.3,54.1 57.1,54.3 57,54.4 56.7,54.3 56.5,54.1 56.5,53.9 56.5,53.7 56.7,53.5 56.9,53.3 57.1,53.1 57.2,52.9 57.4,52.7 57.6,52.5 57.8,52.4 58,52.2 58.4,51.8 58.8,51.5 59,51.3 59.2,51.1 59.4,51 59.8,50.6 60,50.5 60.7,50.1 61.1,49.8 61.6,49.6"
                  fill="#00205c"
                />
              </g>
            </g>
          </svg>
        </Link>
      </StoriesSignStyled>
    );
  }
}

export default SignStories;