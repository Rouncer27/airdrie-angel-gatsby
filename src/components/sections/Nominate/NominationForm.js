import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import {
  FormInput,
  RadioInput,
  CheckboxInput,
  FormButton,
  FormTextarea,
  FormMain
} from "../../styles/Commons/FormFields";
import SuccessMessage from "../FormItems/SuccessMessage";
import SubmitMessage from "../FormItems/SubmitMessage";
import ErrorWarning from "../FormItems/ErrorWarning";

const NominationFormSection = styled.section`
  width: 100%;
  padding: 5rem 2rem 10rem;
`;

const NominationFormTitle = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
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

class NominationForm extends Component {
  constructor(props) {
    super(props);

    this.submitTheForm = this.submitTheForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.emailWasSent = this.emailWasSent.bind(this);
    this.removeTheWarn = this.removeTheWarn.bind(this);
    this.clearTheForm = this.clearTheForm.bind(this);

    this.state = {
      submitting: false,
      succsess: false,
      errorsWarn: false,
      errors: [],
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      city: "",
      hear: "",
      relationship: "",
      nomfirstname: "",
      nomlastname: "",
      nomphone: "",
      nomemail: "",
      nomaddress: "",
      nomfam: "",
      nomsafe: "",
      nomstory: "",
      nombenefit: "",
      nomhelped: "",
      nomanonymous: "",
      consent: ""
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
    bodyFormData.append("firstname", this.state.firstname);
    bodyFormData.append("lastname", this.state.lastname);
    bodyFormData.append("email", this.state.email);
    bodyFormData.append("phone", this.state.phone);
    bodyFormData.append("city", this.state.city);
    bodyFormData.append("hear", this.state.hear);
    bodyFormData.append("relationship", this.state.relationship);
    bodyFormData.append("nomfirstname", this.state.nomfirstname);
    bodyFormData.append("nomlastname", this.state.nomlastname);
    bodyFormData.append("nomphone", this.state.nomphone);
    bodyFormData.append("nomemail", this.state.nomemail);
    bodyFormData.append("nomaddress", this.state.nomaddress);
    bodyFormData.append("nomfam", this.state.nomfam);
    bodyFormData.append("nomsafe", this.state.nomsafe);
    bodyFormData.append("nomstory", this.state.nomstory);
    bodyFormData.append("nombenefit", this.state.nombenefit);
    bodyFormData.append("nomhelped", this.state.nomhelped);
    bodyFormData.append("nomanonymous", this.state.nomanonymous);
    bodyFormData.append("consent", this.state.consent);

    //const baseURL = "http://localhost/gatsby-airdrieangel";
    const baseURL = "https://database.airdrieangel.ca";
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/233/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        if (res.data.status === "mail_sent") {
          setTimeout(() => {
            this.emailWasSent(res.data.message);
            console.log(res.data.message);
          }, 1000);
        } else if (res.data.status === "validation_failed") {
          setTimeout(() => {
            console.log(res.data.message);
            console.log(res.data.invalidFields);
            //this.formHaveErrors(res.data.message, res.data.invalidFields);
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
        errors: []
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

    return (
      <NominationFormSection>
        <StandardWrapper>
          <NominationFormTitle>
            <h2>Nomination Form</h2>
            <p>be an angel</p>
          </NominationFormTitle>

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
              <label htmlFor="phone">Phone Number &#42;</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={this.state.phone}
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
              <label htmlFor="city">What City do you live in? &#42;</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Name of City"
                value={this.state.city}
                onChange={this.onChange}
                required
              />
            </InputStyled>

            <InputStyled>
              <label>
                How did you hear about the Airdrie Angel program? &#42;
              </label>
              <select name="hear" onChange={this.onChange}>
                <option title="Facebook" value="facebook">
                  Facebook
                </option>
                <option title="youtube" value="youtube">
                  Youtube
                </option>
                <option title="google" value="google">
                  Google
                </option>
                <option title="friend" value="friend">
                  Friend
                </option>
                <option title="radio" value="radio">
                  Radio / TV
                </option>
                <option title="sponsors" value="sponsors">
                  Sponsors
                </option>
                <option title="past recipient" value="past recipient">
                  Past Recipient
                </option>
                <option title="other sm" value="other sm">
                  Other Social Media
                </option>
                <option title="other" value="other">
                  Other
                </option>
              </select>
            </InputStyled>

            <StyledTextarea>
              <label htmlFor="relationship">
                What is you relationship to Nominee? &#42;
              </label>
              <textarea
                cols="40"
                rows="8"
                name="relationship"
                id="relationship"
                onChange={this.onChange}
                value={this.state.relationship}
                required
              />
            </StyledTextarea>

            <div>
              <h3>Nominee Infromation</h3>
              <p>
                This is where you will enter the information of the person you
                wish to nominate for the Airdrie Angel Program.
              </p>
            </div>

            <InputStyled>
              <label htmlFor="nomfirstname">Nominee's First Name &#42;</label>
              <input
                type="text"
                name="nomfirstname"
                id="nomfirstname"
                placeholder="Nominee's First Name"
                value={this.state.nomfirstname}
                onChange={this.onChange}
                required
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="nomlastname">Nominee's Last Name &#42;</label>
              <input
                type="text"
                name="nomlastname"
                id="nomlastname"
                placeholder="Nominee's Last Name"
                value={this.state.nomlastname}
                onChange={this.onChange}
                required
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="nomphone">Nominee's Phone Number &#42;</label>
              <input
                type="text"
                name="nomphone"
                id="nomphone"
                placeholder="Nominee's Phone Number"
                value={this.state.nomphone}
                onChange={this.onChange}
                required
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="nomemail">Nominee's email &#42;</label>
              <input
                type="email"
                name="nomemail"
                id="nomemail"
                placeholder="Nominee's email"
                value={this.state.nomemail}
                onChange={this.onChange}
                required
              />
            </InputStyled>
            <RadioInput>
              <label htmlFor="nomaddress">
                Do you have or can you give the Nominee's Address? &#42;
              </label>
              <input
                id="nomaddress-1"
                type="radio"
                name="nomaddress"
                value="yes"
                onChange={this.onChange}
              />{" "}
              <label className="radio-label" for="nomaddress-1">
                <span className="radio">Yes</span>
              </label>
              <br />
              <input
                id="nomaddress-2"
                type="radio"
                name="nomaddress"
                value="no"
                onChange={this.onChange}
              />{" "}
              <label className="radio-label" for="nomaddress-2">
                <span className="radio">No</span>
              </label>
              <br />
            </RadioInput>
            <StyledTextarea>
              <label htmlFor="nomfam">Family Details for Nominee &#42;</label>
              <p>
                Family Details for Nominee (include details such as names, ages,
                sex). Name are not required if there are privacy issues.
              </p>
              <textarea
                cols="40"
                rows="8"
                name="nomfam"
                id="nomfam"
                onChange={this.onChange}
                value={this.state.nomfam}
                required
              />
            </StyledTextarea>
            <RadioInput>
              <label htmlFor="nomsafe">
                Are there any safety or privacy concerns regarding the Nominee?
                Yes or No *This will not affect if they are chosen or not. &#42;
              </label>
              <input
                id="nomsafe-1"
                type="radio"
                name="nomsafe"
                value="yes"
                onChange={this.onChange}
              />{" "}
              <label className="radio-label" for="nomsafe-1">
                <span className="radio">Yes</span>
              </label>
              <br />
              <input
                id="nomsafe-2"
                type="radio"
                name="nomsafe"
                value="no"
                onChange={this.onChange}
              />{" "}
              <label className="radio-label" for="nomsafe-2">
                <span className="radio">No</span>
              </label>
              <br />
            </RadioInput>
            <StyledTextarea>
              <label htmlFor="nomstory">
                Please share the Nominee’s story with us &#42;
              </label>
              <textarea
                cols="40"
                rows="8"
                name="nomstory"
                id="nomstory"
                onChange={this.onChange}
                value={this.state.nomstory}
                required
              />
            </StyledTextarea>
            <StyledTextarea>
              <label htmlFor="nombenefit">
                Why or how do you think they would benefit as a recipient of the
                program? &#42;
              </label>
              <textarea
                cols="40"
                rows="8"
                name="nombenefit"
                id="nombenefit"
                onChange={this.onChange}
                value={this.state.nombenefit}
                required
              />
            </StyledTextarea>
            <RadioInput>
              <label htmlFor="nomhelped">
                Has the Nominee helped out their community, if yes, how? &#42;
              </label>
              <input
                id="nomhelped-1"
                type="radio"
                name="nomhelped"
                value="yes"
                onChange={this.onChange}
              />{" "}
              <label className="radio-label" for="nomhelped-1">
                <span className="radio">Yes</span>
              </label>
              <br />
              <input
                id="nomhelped-2"
                type="radio"
                name="nomhelped"
                value="no"
                onChange={this.onChange}
              />{" "}
              <label className="radio-label" for="nomhelped-2">
                <span className="radio">No</span>
              </label>
              <br />
            </RadioInput>
            <RadioInput>
              <label htmlFor="nomanonymous">
                Do you (Nominator) wish to be anonymous? &#42;
              </label>
              <input
                id="nomanonymous-1"
                type="radio"
                name="nomanonymous"
                value="yes"
                onChange={this.onChange}
              />{" "}
              <label className="radio-label" for="nomanonymous-1">
                <span className="radio">Yes</span>
              </label>
              <br />
              <input
                id="nomanonymous-2"
                type="radio"
                name="nomanonymous"
                value="no"
                onChange={this.onChange}
              />{" "}
              <label className="radio-label" for="nomanonymous-2">
                <span className="radio">No</span>
              </label>
              <br />
            </RadioInput>
            <CheckboxInput>
              <label htmlFor="consent">
                I consent to having this website store my submitted information
                so they can respond to my inquiry. &#42;
              </label>
              <div className="container">
                <input
                  id="consent-1"
                  type="checkbox"
                  name="consent"
                  value="yes"
                  onChange={this.onChange}
                />
                <label for="consent-1">
                  <span className="checkbox">Yes</span>
                </label>
              </div>
            </CheckboxInput>
            <StyledFormButton>
              <button>Submit</button>
            </StyledFormButton>
          </FormStyled>
        </StandardWrapper>
        {successMessage}
        {submittingForm}
        {errorsWarningScreen}
      </NominationFormSection>
    );
  }
}

export default NominationForm;
