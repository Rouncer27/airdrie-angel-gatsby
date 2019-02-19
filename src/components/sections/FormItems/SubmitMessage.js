import React, { Component } from "react";
import styled from "styled-components";
import { CircleLoader } from "react-spinners";

const StyledSummitMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999999;
  background: linear-gradient(
    to right,
    ${props => props.theme.lightBrown} 0%,
    ${props => props.theme.white} 50%,
    ${props => props.theme.lightBrown} 100%
  );

  .submit-container {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 55rem;
    margin: auto;
    padding: 2.5rem;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 5;

    div {
      margin: auto;
    }

    p {
      margin-top: 5rem;
      text-align: center;
    }
  }
`;

class SubmitMessage extends Component {
  render() {
    return (
      <StyledSummitMessage>
        <div className="submit-container">
          <CircleLoader
            sizeUnit={"px"}
            size={150}
            color={"#ffdb00"}
            loading={this.props.submitting}
          />
          <p>Submitting your form, please wait.</p>
        </div>
      </StyledSummitMessage>
    );
  }
}

export default SubmitMessage;
