import React, { Component } from "react";
import styled from "styled-components";

import { FormTextarea } from "../../styles/Commons/FormFields";

const FormTextareaFieldStyled = styled(FormTextarea)`
  position: relative;
  width: 100%;
  margin: 2rem 0;
  padding-top: 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2rem;
  }

  .field-error-message {
    position: absolute;
    top: 0;
    left: 0;
    color: ${props => props.theme.strongred};
    font-size: 1.4rem;
    font-family: ${props => props.theme.fontSec};
    font-weight: 700;
  }
`;

class FormTextareaField extends Component {
  render() {
    const errorMessageData = this.props.errors.find(error => {
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
      <FormTextareaFieldStyled>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        {errorMessage}
        <textarea
          cols={this.props.cols}
          rows={this.props.rows}
          name={this.props.id}
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
          required={this.props.required}
        />
      </FormTextareaFieldStyled>
    );
  }
}

export default FormTextareaField;
