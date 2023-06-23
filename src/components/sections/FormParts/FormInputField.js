import React, { Component } from "react";
import styled from "styled-components";

import { FormInput } from "../../styles/Commons/FormFields";

const InputStyled = styled(FormInput)`
  position: relative;
  width: 100%;
  margin: 2rem 0;
  padding-top: 2rem;

  @media (min-width: ${(props) => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }

  .field-error-message {
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => props.theme.strongred};
    font-size: 1.4rem;
    font-family: ${(props) => props.theme.fontSec};
    font-weight: 700;
  }
`;

class FormInputField extends Component {
  render() {
    const errorMessageData = this?.props?.errors?.find((error) => {
      if (error.idref === this.props.id) {
        return (
          <p className="field-error-message" key={error.idref}>
            {error.message}
          </p>
        );
      }
    });

    const errorMessage = errorMessageData ? (
      <p className="field-error-message" key={errorMessageData.idref}>
        {errorMessageData.message}
      </p>
    ) : (
      false
    );

    return (
      <InputStyled>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        {errorMessage}
        <input
          type={this.props.type}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          required={this.props.required}
        />
      </InputStyled>
    );
  }
}

export default FormInputField;
