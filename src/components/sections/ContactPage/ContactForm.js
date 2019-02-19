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
import SuccessMessage from "../FormItems/SuccessMessage";
import SubmitMessage from "../FormItems/SubmitMessage";
import ErrorWarning from "../FormItems/ErrorWarning";
import MailBox from "../SceneParts/MailBox";

const ContactFormSection = styled.section`
  position: relative;
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
    color: ${props => props.theme.strongred};
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
    color: ${props => props.theme.strongred};
    font-size: 1.4rem;
    font-family: ${props => props.theme.fontSec};
    font-weight: 700;
  }
`;

const StyledFormButton = styled(FormButton)`
  width: 100%;
  text-align: center;
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.submitTheForm = this.submitTheForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.emailWasSent = this.emailWasSent.bind(this);
    this.clearTheForm = this.clearTheForm.bind(this);
    this.formHaveErrors = this.formHaveErrors.bind(this);
    this.removeTheWarn = this.removeTheWarn.bind(this);

    this.state = {
      submitting: false,
      succsess: false,
      errorsWarn: false,
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
          setTimeout(() => {
            this.emailWasSent(res.data.message);
          }, 1000);
        } else if (res.data.status === "validation_failed") {
          setTimeout(() => {
            this.formHaveErrors(res.data.message, res.data.invalidFields);
          }, 1000);
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
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        errorsWarn: true,
        errors: errors
      };
    });
  }

  emailWasSent(mess) {
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        succsess: true
      };
    });
  }

  removeTheWarn() {
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        succsess: false,
        errorsWarn: false
      };
    });
  }

  clearTheForm() {
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        succsess: false,
        errorsWarn: false,
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
      <SuccessMessage
        onClick={this.clearTheForm}
        clearTheForm={this.clearTheForm}
      />
    ) : (
      false
    );

    const submittingForm = this.state.submitting ? (
      <SubmitMessage submitting={this.state.submitting} />
    ) : (
      false
    );

    const errorsWarningScreen = this.state.errorsWarn ? (
      <ErrorWarning removeTheWarn={this.removeTheWarn} />
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
      if (error.idref === "message") {
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
              <button disabled={this.state.submitting}>Submit</button>
            </StyledFormButton>
          </FormStyled>
        </StandardWrapper>
        {successMessage}
        {submittingForm}
        {errorsWarningScreen}
        <MailBox />
      </ContactFormSection>
    );
  }
}

export default ContactForm;
