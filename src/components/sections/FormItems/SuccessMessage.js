import React, { Component } from "react";
import styled from "styled-components";

import { FormButton } from "../../styles/Commons/FormFields";

const StyledFormButton = styled(FormButton)`
  width: 100%;
  text-align: center;
`;

const SuccessMessageStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999999;

  .success-model {
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
  }

  .success-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      ${props => props.theme.teal} 0%,
      ${props => props.theme.white} 50%,
      ${props => props.theme.teal} 100%
    );
    z-index: 1;
  }
`;

class SuccessMessage extends Component {
  render() {
    return (
      <SuccessMessageStyled>
        <div className="success-model">
          <p>Thank You!</p>
          <p>You message has been sent to our Angel team</p>
          <StyledFormButton>
            <button onClick={this.props.clearTheForm}>Close</button>
          </StyledFormButton>
        </div>
        <div className="success-background" />
      </SuccessMessageStyled>
    );
  }
}

export default SuccessMessage;
