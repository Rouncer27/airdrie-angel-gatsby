import React, { Component } from "react";
import styled from "styled-components";

import { FormInput } from "../../styles/Commons/FormFields";

const InputStyled = styled(FormInput)`
  width: 100%;
  margin: 2rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }
`;

class FormInputField extends Component {
  render() {
    return (
      <InputStyled>
        <label htmlFor={this.props.id}>{this.props.label}</label>
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
