import React from "react";
import styled from "styled-components";

import airdrielife from "../../images/airdrielife-logo-2024.jpg";

const MediaSponsor = () => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="media-title">
          <h3>Media Sponsors</h3>
        </div>
        <div className="media-sponsors">
          <div className="media-sponsors-logo">
            <img src={airdrielife} alt="airdrielife Magazine" />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;
    padding: 2rem;
  }

  .media-title {
    width: 100%;

    h3 {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.navyBlue};
      font-family: ${(props) => props.theme.fontSec};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
      line-height: 1.25;

      @media (min-width: ${(props) => props.theme.bpTablet}) {
        font-size: 3rem;
      }
    }
  }

  .media-sponsors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &-logo {
      width: calc((100% / 5) - 8rem);
      margin: 1rem 4rem;
    }
  }
`;

export default MediaSponsor;
