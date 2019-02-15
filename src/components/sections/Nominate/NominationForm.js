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
              <label htmlFor="phone">Phone Number &#42;</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
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
              <label htmlFor="city">What City do you live in? &#42;</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Name of City"
                value=""
                onChange=""
                required
              />
            </InputStyled>

            <InputStyled>
              <label>
                How did you hear about the Airdrie Angel program? &#42;
              </label>
              <select name="">
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
                onChange=""
                value=""
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
                value=""
                onChange=""
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
                value=""
                onChange=""
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
                value=""
                onChange=""
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
                value=""
                onChange=""
                required
              />
            </InputStyled>
            <InputStyled>
              <label htmlFor="addressinput">
                Do you have or can you give the Nominee's Address? &#42;
              </label>
              <input type="radio" name="addressinput" value="yes" /> Yes
              <br />
              <input type="radio" name="addressinput" value="no" /> No, I'd
              prefer not to give their address
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
