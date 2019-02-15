import React, { Component } from "react";

import { StandardWrapper } from "../../styles/Commons/Wrappers";

class NominationForm extends Component {
  render() {
    return (
      <div>
        <StandardWrapper>
          <h2>Nomination Form</h2>
          <form>
            <div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>

              <div>
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
              </div>

              <div>
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
              </div>

              <div>
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
              </div>

              <div>
                <h3>Nominee Infromation</h3>
                <p>
                  This is where you will enter the information of the person you
                  wish to nominate for the Airdrie Angel Program.
                </p>
              </div>

              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
                <label htmlFor="addressinput">
                  Do you have or can you give the Nominee's Address? &#42;
                </label>
                <input type="radio" name="addressinput" value="yes" /> Yes
                <br />
                <input type="radio" name="addressinput" value="no" /> No, I'd
                prefer not to give their address
                <br />
              </div>
            </div>
          </form>
        </StandardWrapper>
      </div>
    );
  }
}

export default NominationForm;
