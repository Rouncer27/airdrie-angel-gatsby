import React, { Component } from "react";
import styled from "styled-components";

const MailBoxStyled = styled.div`
  position: absolute;
  bottom: -0.6rem;
  left: 20rem;
  max-width: 10rem;
  z-index: -1;

  svg {
    width: 100%;
  }
`;

class MailBox extends Component {
  render() {
    return (
      <MailBoxStyled>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 297.7 594.4"
        >
          <g id="mail_box">
            <rect
              id="stand"
              x="152.9"
              y="155.1"
              width="28.8"
              height="439.3"
              fill="#00205c"
            />
            <rect
              id="base"
              x="145.4"
              y="161.2"
              width="43.3"
              height="37.7"
              fill="#37457b"
            />
            <g id="mailbox">
              <path
                id="box_top"
                d="M297.7,161.2H0v-137c0-5.7,4.6-10.4,10.4-10.4h276.9c5.7,0,10.4,4.6,10.4,10.4V161.2z"
                fill="#37457b"
              />
              <path
                id="inside_border"
                d="M128.5,161.2H0v-137c0-5.7,4.6-10.4,10.4-10.4h107.7c5.7,0,10.4,4.6,10.4,10.4 V161.2z"
                fill="#00205c"
              />
              <path
                id="inside_box"
                d="M122.1,155.6H6.3V29.3c0-5.5,4.4-9.9,9.9-9.9h96c5.5,0,9.9,4.4,9.9,9.9V155.6z"
                fill="#7a6e66"
              />
              <path
                id="open_outside"
                d="M128.5,161.2H0v130.9c0,5.7,4.6,10.4,10.4,10.4h107.7c5.7,0,10.4-4.6,10.4-10.4 V161.2z"
                fill="#37457b"
              />
              <path
                id="open_inside"
                d="M122.1,166.7H6.3V287c0,5.5,4.4,9.9,9.9,9.9h96c5.5,0,9.9-4.4,9.9-9.9V166.7z"
                fill="#00205c"
              />
              <rect
                id="boxbottom"
                x="128.5"
                y="72.3"
                width="169.2"
                height="88.9"
                fill="#00205c"
              />
            </g>
            <g id="mail">
              <defs>
                <path
                  id="inside_box_1_"
                  d="M122.1,155.6H6.3V19.4h105.9c5.5,0,9.9,4.4,9.9,9.9V155.6z"
                />
              </defs>
              <use
                xlinkHref="#inside_box_1_"
                overflow="visible"
                fill="#7a6e66"
              />
              <clipPath id="inside_box_2_">
                <use xlinkHref="#inside_box_1_" overflow="visible" />
              </clipPath>
              <rect
                id="letter"
                x="20.8"
                y="83.4"
                width="146.3"
                height="72.3"
                clipPath="url(#inside_box_2_)"
                fill="#eee"
              />
              <polygon
                id="letter_bottom"
                points="93.9,109.3 20.8,155.6 167.1,155.6"
                clipPath="url(#inside_box_2_)"
                fill="#e0e0e0"
              />
              <polygon
                id="Letter_flap"
                points="93.9,129.7 20.8,83.4 167.1,83.4"
                clipPath="url(#inside_box_2_)"
                fill="#fff"
              />
            </g>
            <path
              id="MAIL_flag"
              d="M183.9,22.4V6l-27.6-6v22.4v71.2c0,6,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8 s-4.8-10.8-10.8-10.8c-1.6,0-3,0.3-4.4,0.9V22.4H183.9z"
              fill="#ffda00"
            />
          </g>
        </svg>
      </MailBoxStyled>
    );
  }
}

export default MailBox;
