import React, { Component } from "react";

import styled from "styled-components";

import { FormButton } from "../../styles/Commons/FormFields";

const StyledFormButton = styled(FormButton)`
  width: 100%;
  text-align: center;
`;

const WarningStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999999;

  .warning-model {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 55rem;
    margin: auto;
    padding: 2.5rem;
    transform: translate(-50%, -50%);
    border: 0.1rem solid ${props => props.theme.black};
    background: ${props => props.theme.white};
    text-align: center;
    z-index: 5;

    &::after,
    &::before {
      display: block;
      position: absolute;
      top: 55%;
      transform: translateY(-50%);
      color: ${props => props.theme.strongred};
      font-family: ${props => props.theme.fontAwesome};
      font-size: 5rem;
      line-height: 1.5;
      content: "\f06a";
    }

    &::after {
      left: 2.5rem;
    }

    &::before {
      right: 2.5rem;
    }

    p {
      font-family: ${props => props.theme.fontSec};
      font-size: 1.8rem;
      font-weight: 700;
      color: ${props => props.theme.strongred};
    }
  }

  .warning-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      ${props => props.theme.navyBlue} 0%,
      ${props => props.theme.white} 50%,
      ${props => props.theme.navyBlue} 100%
    );
    z-index: 1;
  }
`;

class ErrorWarning extends Component {
  render() {
    return (
      <WarningStyled onClick={this.props.removeTheWarn}>
        <div className="warning-model">
          <p>
            There were a few mistakes in your form. Please have a look and fix
            what is required. Thank you.
          </p>
          <StyledFormButton>
            <button onClick={this.props.removeTheWarn}>Close</button>
          </StyledFormButton>
        </div>
        <div className="warning-background" />
      </WarningStyled>
    );
  }
}

export default ErrorWarning;
