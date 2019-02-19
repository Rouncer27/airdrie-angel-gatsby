import React, { Component } from "react";
import styled from "styled-components";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import {
  FormInput,
  FormButton,
  FormTextarea,
  FormMain
} from "../../styles/Commons/FormFields";

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

    this.onChange = this.onChange.bind(this);

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
      addressinput: "",
      familydetails: "",
      issues: "",
      story: "",
      benefit: "",
      community: "",
      anonymous: "",
      agreement: ""
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <NominationFormSection>
        <StandardWrapper>
          <NominationFormTitle>
            <h2>Nomination Form</h2>
            <p>be an angel</p>
          </NominationFormTitle>

          <FormStyled>
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
            <InputStyled>
              <label htmlFor="addressinput">
                Do you have or can you give the Nominee's Address? &#42;
              </label>
              <input
                type="radio"
                name="addressinput"
                value="yes"
                onChange={this.onChange}
              />{" "}
              Yes
              <br />
              <input
                type="radio"
                name="addressinput"
                value="no"
                onChange={this.onChange}
              />{" "}
              No, I'd prefer not to give their address
              <br />
            </InputStyled>
            <StyledTextarea>
              <label htmlFor="familydetails">
                Family Details for Nominee &#42;
              </label>
              <p>
                Family Details for Nominee (include details such as names, ages,
                sex). Name are not required if there are privacy issues.
              </p>
              <textarea
                cols="40"
                rows="8"
                name="familydetails"
                id="familydetails"
                onChange={this.onChange}
                value={this.state.familydetails}
                required
              />
            </StyledTextarea>
            <InputStyled>
              <label htmlFor="issues">
                Are there any safety or privacy concerns regarding the Nominee?
                Yes or No *This will not affect if they are chosen or not. &#42;
              </label>
              <input
                type="radio"
                name="issues"
                value="yes"
                onChange={this.onChange}
              />{" "}
              Yes
              <br />
              <input
                type="radio"
                name="issues"
                value="no"
                onChange={this.onChange}
              />{" "}
              No
              <br />
            </InputStyled>
            <StyledTextarea>
              <label htmlFor="story">
                Please share the Nominee’s story with us &#42;
              </label>
              <textarea
                cols="40"
                rows="8"
                name="story"
                id="story"
                onChange={this.onChange}
                value={this.state.story}
                required
              />
            </StyledTextarea>
            <StyledTextarea>
              <label htmlFor="benefit">
                Why or how do you think they would benefit as a recipient of the
                program? &#42;
              </label>
              <textarea
                cols="40"
                rows="8"
                name="benefit"
                id="benefit"
                onChange={this.onChange}
                value={this.state.benefit}
                required
              />
            </StyledTextarea>
            <InputStyled>
              <label htmlFor="community">
                Has the Nominee helped out their community, if yes, how? &#42;
              </label>
              <input
                type="radio"
                name="community"
                value="yes"
                onChange={this.onChange}
              />{" "}
              Yes
              <br />
              <input
                type="radio"
                name="community"
                value="no"
                onChange={this.onChange}
              />{" "}
              No
              <br />
            </InputStyled>
            <InputStyled>
              <label htmlFor="anonymous">
                Do you (Nominator) wish to be anonymous? &#42;
              </label>
              <input
                type="radio"
                name="anonymous"
                value="yes"
                onChange={this.onChange}
              />{" "}
              Yes
              <br />
              <input
                type="radio"
                name="anonymous"
                value="no"
                onChange={this.onChange}
              />{" "}
              No
              <br />
            </InputStyled>
            <InputStyled>
              <label htmlFor="agreement">
                I consent to having this website store my submitted information
                so they can respond to my inquiry. &#42;
              </label>
              <input
                type="radio"
                name="agreement"
                value="yes"
                onChange={this.onChange}
              />{" "}
              Yes
              <br />
            </InputStyled>
            <StyledFormButton>
              <button>Submit</button>
            </StyledFormButton>
          </FormStyled>
        </StandardWrapper>
      </NominationFormSection>
    );
  }
}

export default NominationForm;
