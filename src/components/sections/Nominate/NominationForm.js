import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import {
  FormInput,
  RadioInput,
  SelectDropdown,
  CheckboxInput,
  FormButton,
  FormTextarea,
  FormMain,
} from "../../styles/Commons/FormFields";

import FormInputField from "../FormParts/FormInputField";
import FormTextareaField from "../FormParts/FormTextareaField";

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
    color: ${(props) => props.theme.teal};
  }

  p {
    font-size: 1.8rem;

    @media (min-width: ${(props) => props.theme.bpTablet}) {
      font-size: 1.8rem;
    }

    @media (min-width: ${(props) => props.theme.bpTablet}) {
      font-size: 2rem;
    }
  }
`;

const FormStyled = styled(FormMain)`
  width: 100%;
  padding-top: 0;
`;

const StyledTextarea = styled(FormTextarea)`
  width: 100%;
  margin: 2rem 0;

  @media (min-width: ${(props) => props.theme.bpTablet}) {
    margin: 2rem;
  }
`;

const StyledFormButton = styled(FormButton)`
  width: 100%;
  text-align: center;

  button:disabled {
    color: ${(props) => props.theme.white};
    opacity: 0.25;
    background: ${(props) => props.theme.grey};
  }
`;

const NomineeInfromation = styled.div`
  width: 100%;
  margin: 2rem 0;
  text-align: center;

  @media (min-width: ${(props) => props.theme.bpTablet}) {
    margin: 2rem;
  }

  h3 {
    color: ${(props) => props.theme.navyBlue};
    font-family: ${(props) => props.theme.fontSec};
    font-weight: 700;
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.navyBlue};
    font-family: ${(props) => props.theme.fontSec};
    font-weight: 700;

    @media (min-width: ${(props) => props.theme.bpTablet}) {
      font-size: 2rem;
    }
  }
`;

class NominationForm extends Component {
  constructor(props) {
    super(props);

    this.submitTheForm = this.submitTheForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.emailWasSent = this.emailWasSent.bind(this);
    this.removeTheWarn = this.removeTheWarn.bind(this);
    this.clearTheForm = this.clearTheForm.bind(this);
    this.onChangeConsent = this.onChangeConsent.bind(this);

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
      hear: "default",
      relationship: "",
      nomfirstname: "",
      nomlastname: "",
      nomphone: "",
      nomemail: "",
      nomaddress: "no",
      nomaddressfeilds: "",
      nomfam: "",
      nomsafe: "no",
      nomstory: "",
      nombenefit: "",
      nomhelped: "no",
      nomhelpedhow: "",
      nomanonymous: "no",
      consent: "no",
    };
  }

  submitTheForm(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        submitting: !prevState.submitting,
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
    bodyFormData.append("nomaddressfeilds", this.state.nomaddressfeilds);
    bodyFormData.append("nomfam", this.state.nomfam);
    bodyFormData.append("nomsafe", this.state.nomsafe);
    bodyFormData.append("nomstory", this.state.nomstory);
    bodyFormData.append("nombenefit", this.state.nombenefit);
    bodyFormData.append("nomhelped", this.state.nomhelped);
    bodyFormData.append("nomhelpedhow", this.state.nomhelpedhow);
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
      .then((res) => {
        if (res.data.status === "mail_sent") {
          setTimeout(() => {
            this.emailWasSent(res.data.message);
          }, 1000);
        } else if (res.data.status === "validation_failed") {
          setTimeout(() => {
            console.log(res.data.message);
            console.log(res.data.invalidFields);
            this.formHaveErrors(res.data.message, res.data.invalidFields);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeConsent() {
    this.setState((prevState) => {
      return {
        ...prevState,
        consent: this.state.consent === "yes" ? "" : "yes",
      };
    });
  }

  formHaveErrors(mess, errors) {
    this.setState((prevState) => {
      return {
        ...prevState,
        submitting: false,
        errorsWarn: true,
        errors: errors,
      };
    });
  }

  emailWasSent(mess) {
    this.setState((prevState) => {
      return {
        ...prevState,
        submitting: false,
        succsess: true,
      };
    });
  }

  removeTheWarn() {
    this.setState((prevState) => {
      return {
        ...prevState,
        submitting: false,
        succsess: false,
        errorsWarn: false,
      };
    });
  }

  formHaveErrors(mess, errors) {
    this.setState((prevState) => {
      return {
        ...prevState,
        submitting: false,
        errorsWarn: true,
        errors: errors,
      };
    });
  }

  clearTheForm() {
    this.setState((prevState) => {
      return {
        ...prevState,
        submitting: false,
        succsess: false,
        errorsWarn: false,
        errors: [],
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        city: "",
        hear: "default",
        relationship: "",
        nomfirstname: "",
        nomlastname: "",
        nomphone: "",
        nomemail: "",
        nomaddress: "no",
        nomaddressfeilds: "",
        nomfam: "",
        nomsafe: "no",
        nomstory: "",
        nombenefit: "",
        nomhelped: "no",
        nomhelpedhow: "",
        nomanonymous: "no",
        consent: "no",
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

    // Errors //

    const hearError = this?.state?.errors?.find((error) => {
      if (error.idref === "hear") {
        return (
          <p className="field-error-message" key={error.idref}>
            {error.message}
          </p>
        );
      }
    });

    const disableTheButton =
      this.state.consent === "yes" &&
      this.state.nomanonymous !== "" &&
      this.state.nomhelped !== "" &&
      this.state.nomsafe !== "" &&
      this.state.nomaddress !== "" &&
      this.state.hear !== "default" &&
      this.state.submitting === false
        ? false
        : true;

    console.log(disableTheButton);

    return (
      <NominationFormSection>
        <StandardWrapper>
          <NominationFormTitle>
            <h2>Nomination Form</h2>
            <p>be an angel</p>
          </NominationFormTitle>

          <FormStyled onSubmit={this.submitTheForm}>
            <NomineeInfromation>
              <h3>Airdrie Angel Program</h3>
              <p>
                While we would love to help out people from across the country
                (and around the world), at this time recipients of the Airdrie
                Angel program must be from the Airdrie, Alberta area.
              </p>
            </NomineeInfromation>
            <FormInputField
              label="What is your First Name &#42;"
              type="text"
              id="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />
            <FormInputField
              label="What is your Last Name &#42;"
              type="text"
              id="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />
            <FormInputField
              label="What is your Phone Number &#42;"
              type="text"
              id="phone"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />
            <FormInputField
              label="What is your email &#42;"
              type="email"
              id="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />
            <FormInputField
              label="What City do you live in? &#42;"
              type="text"
              id="city"
              placeholder="Name of City"
              value={this.state.city}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />

            <SelectDropdown>
              <label>
                How did you hear about the Airdrie Angel program? &#42;
              </label>
              {hearError}
              <div className="select-container">
                <select
                  name="hear"
                  onChange={this.onChange}
                  value={this.state.hear}
                >
                  <option disabled value="default">
                    {" "}
                    -- select an option --{" "}
                  </option>
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
              </div>
            </SelectDropdown>

            <FormTextareaField
              label="What is you relationship to Nominee? &#42;"
              cols="40"
              rows="8"
              name="relationship"
              id="relationship"
              onChange={this.onChange}
              value={this.state.relationship}
              errors={this.state.errors}
              required
            />

            <NomineeInfromation>
              <h3>Nominee Infromation</h3>
              <p>
                This is where you will enter the information of the person you
                wish to nominate for the Airdrie Angel Program.
              </p>
            </NomineeInfromation>

            <FormInputField
              label="Nominee's First Name &#42;"
              type="text"
              id="nomfirstname"
              placeholder="Nominee's First Name"
              value={this.state.nomfirstname}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />
            <FormInputField
              label="Nominee's Last Name &#42;"
              type="text"
              id="nomlastname"
              placeholder="Nominee's Last Name"
              value={this.state.nomlastname}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />
            <FormInputField
              label="Nominee's Phone Number &#42;"
              type="text"
              id="nomphone"
              placeholder="Nominee's Phone Number"
              value={this.state.nomphone}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />
            <FormInputField
              label="Nominee's email &#42;"
              type="email"
              id="nomemail"
              placeholder="Nominee's email"
              value={this.state.nomemail}
              onChange={this.onChange}
              errors={this.state.errors}
              required
            />
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
                checked={this.state.nomaddress === "yes" ? true : false}
              />{" "}
              <label className="radio-label" htmlFor="nomaddress-1">
                <span className="radio">Yes</span>
              </label>
              <br />
              <input
                id="nomaddress-2"
                type="radio"
                name="nomaddress"
                value="no"
                onChange={this.onChange}
                checked={this.state.nomaddress === "no" ? true : false}
              />{" "}
              <label className="radio-label" htmlFor="nomaddress-2">
                <span className="radio">No</span>
              </label>
              <br />
            </RadioInput>

            {this.state.nomaddress === "yes" && (
              <FormTextareaField
                label="Nominee Address &#42;"
                cols="40"
                rows="8"
                name="nomaddressfeilds"
                id="nomaddressfeilds"
                onChange={this.onChange}
                value={this.state.nomaddressfeilds}
                errors={this.state.errors}
                required
              />
            )}

            <FormTextareaField
              label="Family Details for Nominee &#42;Family Details for Nominee (include details such as names, ages, sex). Name are not required if there are privacy issues."
              cols="40"
              rows="8"
              name="nomfam"
              id="nomfam"
              onChange={this.onChange}
              value={this.state.nomfam}
              errors={this.state.errors}
              required
            />
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
                checked={this.state.nomsafe === "yes" ? true : false}
              />{" "}
              <label className="radio-label" htmlFor="nomsafe-1">
                <span className="radio">Yes</span>
              </label>
              <br />
              <input
                id="nomsafe-2"
                type="radio"
                name="nomsafe"
                value="no"
                onChange={this.onChange}
                checked={this.state.nomsafe === "no" ? true : false}
              />{" "}
              <label className="radio-label" htmlFor="nomsafe-2">
                <span className="radio">No</span>
              </label>
              <br />
            </RadioInput>

            <FormTextareaField
              label="Please share the Nominee’s story with us &#42;"
              cols="40"
              rows="8"
              name="nomstory"
              id="nomstory"
              onChange={this.onChange}
              value={this.state.nomstory}
              errors={this.state.errors}
              required
            />

            <FormTextareaField
              label="Why or how do you think they would benefit as a recipient of the program? &#42;"
              cols="40"
              rows="8"
              name="nombenefit"
              id="nombenefit"
              onChange={this.onChange}
              value={this.state.nombenefit}
              errors={this.state.errors}
              required
            />
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
                checked={this.state.nomhelped === "yes" ? true : false}
              />{" "}
              <label className="radio-label" htmlFor="nomhelped-1">
                <span className="radio">Yes</span>
              </label>
              <br />
              <input
                id="nomhelped-2"
                type="radio"
                name="nomhelped"
                value="no"
                onChange={this.onChange}
                checked={this.state.nomhelped === "no" ? true : false}
              />{" "}
              <label className="radio-label" htmlFor="nomhelped-2">
                <span className="radio">No</span>
              </label>
              <br />
            </RadioInput>

            {this.state.nomhelped === "yes" && (
              <StyledTextarea>
                <label htmlFor="nomhelpedhow">
                  How has the Nominee helped out their community? &#42;
                </label>
                <textarea
                  cols="40"
                  rows="8"
                  name="nomhelpedhow"
                  id="nomhelpedhow"
                  onChange={this.onChange}
                  value={this.state.nomhelpedhow}
                  required
                />
              </StyledTextarea>
            )}

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
                checked={this.state.nomanonymous === "yes" ? true : false}
              />{" "}
              <label className="radio-label" htmlFor="nomanonymous-1">
                <span className="radio">Yes</span>
              </label>
              <br />
              <input
                id="nomanonymous-2"
                type="radio"
                name="nomanonymous"
                value="no"
                onChange={this.onChange}
                checked={this.state.nomanonymous === "no" ? true : false}
              />{" "}
              <label className="radio-label" htmlFor="nomanonymous-2">
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
                  onChange={this.onChangeConsent}
                  checked={this.state.consent === "yes" ? true : false}
                />
                <label htmlFor="consent-1">
                  <span className="checkbox">Yes</span>
                </label>
              </div>
            </CheckboxInput>
            <StyledFormButton>
              <button disabled={disableTheButton}>Submit</button>
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
