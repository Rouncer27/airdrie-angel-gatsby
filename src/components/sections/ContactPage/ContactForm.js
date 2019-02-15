import React, { Component } from "react";

import styled from "styled-components";
import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { StandardParagraph } from "../../styles/Commons/Paragraphs";
import {
  FormInput,
  FormButton,
  FormTextarea,
  FormMain
} from "../../styles/Commons/FormFields";

const ContactFormSection = styled.section`
  width: 100%;
  padding: 10rem 2rem;
`;

const ContactTitle = styled.div`
  width: 100%;
`;

const FormStyled = styled(FormMain)`
  width: 100%;
`;

const InputStyled = styled(FormInput)`
  width: 100%;
  margin: 2rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }
`;

const StyledTextarea = styled(FormTextarea)`
  width: 100%;
  margin: 2rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2rem;
  }
`;

const StyledFormButton = styled(FormButton)`
  width: 100%;
  text-align: center;
`;

class ContactForm extends Component {
  render() {
    return (
      <ContactFormSection>
        <StandardWrapper>
          <ContactTitle>
            <h2>Contact Us</h2>
            <p>send us a note about any thoughts you have</p>
          </ContactTitle>
          <FormStyled>
            <InputStyled>
              <label htmlFor="firstname">First Name &#42;</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                value=""
                onChange=""
                required
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="lastname">Last Name &#42;</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                value=""
                onChange=""
                required
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="email">email &#42;</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value=""
                onChange=""
                required
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="title">Title &#42;</label>
              <input
                type="text"
                name="title"
                id="cititlety"
                placeholder="Title"
                value=""
                onChange=""
                required
              />
            </InputStyled>
            <StyledTextarea>
              <label htmlFor="message">Message &#42;</label>
              <textarea
                cols="40"
                rows="8"
                name="message"
                id="message"
                onChange=""
                value=""
                required
              />
            </StyledTextarea>

            <StyledFormButton>
              <button>Submit</button>
            </StyledFormButton>
          </FormStyled>
        </StandardWrapper>
      </ContactFormSection>
    );
  }
}

export default ContactForm;
