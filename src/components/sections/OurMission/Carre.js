import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { StandardParagraph } from "../../styles/Commons/Paragraphs";

const CarreLogo = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 3rem auto;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 3rem 10rem;
  }
`;

const CarreStory = styled(StandardParagraph)`
  width: 100%;
  max-width: 65rem;
  margin: 2rem auto;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 3rem;
  }
`;

const CarreImage = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 3rem auto;
  border-radius: 50%;
  border: 0.25rem solid ${props => props.theme.navyBlue};
  overflow: hidden;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 3rem 20rem;
  }
`;

const CarreQuote = styled.div`
  margin: 5rem;
  p {
    color: ${props => props.theme.navyBlue};
    font-family: ${props => props.theme.fontSec};
    font-weight: 300;
    font-size: 3rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 4rem;
    }
  }
`;

class Carre extends Component {
  render() {
    return (
      <div>
        <StandardWrapper>
          <CarreLogo>
            <Img
              fluid={this.props.data.carreLogo}
              alt="The Carre Group. Redline Real Estate."
            />
          </CarreLogo>
          <CarreStory
            dangerouslySetInnerHTML={{ __html: this.props.data.carreStory }}
          />
          <CarreImage>
            <Img fluid={this.props.data.carreImage} alt="Meet the Carres" />
          </CarreImage>
          <CarreQuote
            dangerouslySetInnerHTML={{ __html: this.props.data.carreQuote }}
          />
        </StandardWrapper>
      </div>
    );
  }
}

export default Carre;
