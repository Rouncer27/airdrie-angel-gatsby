import React, { Component } from "react";
import styled from "styled-components";
import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { StandardParagraph } from "../../styles/Commons/Paragraphs";

const EmailContentSection = styled.section`
  padding: 3rem 0;
  background: ${props => props.theme.navyBlue};
`;

const EmailUsSec = styled.div`
  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin-right: 4rem;
  }

  h2 {
    color: ${props => props.theme.white};
  }

  p {
    color: ${props => props.theme.white};
  }
`;

const SponsorshipSec = styled.div`
  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin-left: 4rem;
  }

  h2 {
    color: ${props => props.theme.white};
  }

  p {
    color: ${props => props.theme.white};
  }
`;

class EmailContent extends Component {
  render() {
    return (
      <EmailContentSection>
        <StandardWrapper>
          <EmailUsSec>
            <div>
              <h2>Email Us</h2>
            </div>
            <StandardParagraph
              dangerouslySetInnerHTML={{ __html: this.props.data.emailUs }}
            />
          </EmailUsSec>

          <SponsorshipSec>
            <div>
              <h2>Sponsorship Opportunities</h2>
            </div>
            <StandardParagraph
              dangerouslySetInnerHTML={{ __html: this.props.data.sponsorship }}
            />
          </SponsorshipSec>
        </StandardWrapper>
      </EmailContentSection>
    );
  }
}

export default EmailContent;
