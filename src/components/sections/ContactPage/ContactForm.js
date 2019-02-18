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
  constructor(props) {
    super(props);

    this.submitTheForm = this.submitTheForm.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      submitting: false,
      firstname: "",
      lastname: "",
      email: "",
      title: "",
      message: ""
    };
  }

  submitTheForm(e) {
    e.preventDefault();
    if (this.state.submitting) return;

    this.setState(prevState => {
      return {
        ...prevState,
        submitting: !prevState.submitting
      };
    });

    const bodyFormData = new FormData();
    bodyFormData.append("first-name", this.state.firstname);
    bodyFormData.append("last-name", this.state.lastname);
    bodyFormData.append("phone", this.state.phone);
    bodyFormData.append("email", this.state.email);
    bodyFormData.append("message", this.state.message);

    //const baseURL = "http://localhost/gatsby-airdrieangel";
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
          console.log(res.data.message);
        } else if (res.data.status === "validation_failed") {
          console.log(res.data.message, res.data.invalidFields);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
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
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                value={this.state.firstname}
                onChange={this.onChange}
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
                value={this.state.lastname}
                onChange={this.onChange}
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
                value={this.state.email}
                onChange={this.onChange}
                required
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="title">Title &#42;</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.onChange}
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
                onChange={this.onChange}
                value={this.state.message}
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
