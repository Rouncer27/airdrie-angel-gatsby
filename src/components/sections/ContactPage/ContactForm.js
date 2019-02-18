import React, { Component } from "react";
import axios from "axios";

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
  padding: 5rem 2rem 10rem;
`;

const ContactTitle = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  text-align: center;

  h2 {
    margin: 0;
    color: ${props => props.theme.teal};
  }

  p {
    font-size: 1.8rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.8rem;
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2rem;
    }
  }
`;

const FormStyled = styled(FormMain)`
  width: 100%;
`;

const InputStyled = styled(FormInput)`
  position: relative;
  width: 100%;
  margin: 0 0 2rem;
  padding-top: 4rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin: 0 2rem 2rem;
  }

  .field-error-message {
    position: absolute;
    top: 0;
    left: 0;
    color: ${props => props.theme.teal};
    font-size: 1.4rem;
    font-family: ${props => props.theme.fontSec};
    font-weight: 700;
  }
`;

const StyledTextarea = styled(FormTextarea)`
  position: relative;
  width: 100%;
  margin: 0 0 2rem;
  padding-top: 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 0 2rem 2rem;
  }

  .field-error-message {
    position: absolute;
    top: 0;
    left: 0;
    color: ${props => props.theme.teal};
    font-size: 1.4rem;
    font-family: ${props => props.theme.fontSec};
    font-weight: 700;
  }
`;

const StyledFormButton = styled(FormButton)`
  width: 100%;
  text-align: center;
`;

const SuccessMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

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

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.submitTheForm = this.submitTheForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.emailWasSent = this.emailWasSent.bind(this);
    this.clearTheForm = this.clearTheForm.bind(this);
    this.formHaveErrors = this.formHaveErrors.bind(this);

    this.state = {
      submitting: false,
      succsess: false,
      errors: [],
      firstname: "",
      lastname: "",
      email: "",
      title: "",
      message: ""
    };
  }

  submitTheForm(e) {
    e.preventDefault();
    // if (this.state.submitting) return;

    this.setState(prevState => {
      return {
        ...prevState,
        submitting: !prevState.submitting
      };
    });

    const bodyFormData = new FormData();
    bodyFormData.append("first-name", this.state.firstname);
    bodyFormData.append("last-name", this.state.lastname);
    bodyFormData.append("email", this.state.email);
    bodyFormData.append("title", this.state.title);
    bodyFormData.append("message", this.state.message);

    // const baseURL = "http://localhost/gatsby-airdrieangel";
    const baseURL = "https://database.airdrieangel.ca";
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/232/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        if (res.data.status === "mail_sent") {
          this.emailWasSent(res.data.message);
        } else if (res.data.status === "validation_failed") {
          this.formHaveErrors(res.data.message, res.data.invalidFields);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  formHaveErrors(mess, errors) {
    console.log(errors);
    this.setState(prevState => {
      return {
        ...prevState,
        errors: errors
      };
    });
  }

  emailWasSent(mess) {
    this.setState(prevState => {
      return {
        ...prevState,
        succsess: true
      };
    });
  }

  clearTheForm() {
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        succsess: false,
        errors: [],
        firstname: "",
        lastname: "",
        email: "",
        title: "",
        message: ""
      };
    });
  }

  render() {
    const successMessage = this.state.succsess ? (
      <SuccessMessage onClick={this.clearTheForm}>
        <div className="success-model">
          <p>Thank You!</p>
          <p>You message has been sent to our Angel team</p>
          <StyledFormButton>
            <button onClick={this.clearTheForm}>Close</button>
          </StyledFormButton>
        </div>
        <div className="success-background" />
      </SuccessMessage>
    ) : (
      false
    );

    const firstNameError = this.state.errors.map(error => {
      if (error.idref === "first-name") {
        return (
          <p className="field-error-message" key={error.idref}>
            {error.message}
          </p>
        );
      }
    });

    const lastnameError = this.state.errors.map(error => {
      if (error.idref === "last-name") {
        return (
          <p className="field-error-message" key={error.idref}>
            {error.message}
          </p>
        );
      }
    });

    const emailError = this.state.errors.map(error => {
      if (error.idref === "email") {
        return (
          <p className="field-error-message" key={error.idref}>
            {error.message}
          </p>
        );
      }
    });

    const titleError = this.state.errors.map(error => {
      if (error.idref === "title") {
        return (
          <p className="field-error-message" key={error.idref}>
            {error.message}
          </p>
        );
      }
    });

    const messageError = this.state.errors.map(error => {
      if (error.idref === "title") {
        return (
          <p className="field-error-message" key={error.idref}>
            {error.message}
          </p>
        );
      }
    });

    return (
      <ContactFormSection>
        <StandardWrapper>
          <ContactTitle>
            <h2>Contact Us</h2>
            <p>send us a note about any thoughts you have</p>
          </ContactTitle>
          <FormStyled onSubmit={this.submitTheForm}>
            <InputStyled>
              <label htmlFor="firstname">First Name &#42;</label>
              {firstNameError}
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                value={this.state.firstname}
                onChange={this.onChange}
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="lastname">Last Name &#42;</label>
              {lastnameError}
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                value={this.state.lastname}
                onChange={this.onChange}
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="email">email &#42;</label>
              {emailError}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="title">Title &#42;</label>
              {titleError}
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </InputStyled>
            <StyledTextarea>
              <label htmlFor="message">Message &#42;</label>
              {messageError}
              <textarea
                cols="40"
                rows="8"
                name="message"
                id="message"
                onChange={this.onChange}
                value={this.state.message}
              />
            </StyledTextarea>

            <StyledFormButton>
              <button>Submit</button>
            </StyledFormButton>
          </FormStyled>
        </StandardWrapper>
        {successMessage}
      </ContactFormSection>
    );
  }
}

export default ContactForm;
