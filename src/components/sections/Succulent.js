import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { StandardWrapper } from "../styles/Commons/Wrappers";

const SucculentSection = styled.div`
  position: relative;
  width: 100%;
  padding: 10rem 0 15rem;
  background: linear-gradient(
    to right,
    ${props => props.theme.teal} 0%,
    ${props => props.theme.white} 50%,
    ${props => props.theme.teal} 100%
  );
  overflow: hidden;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 10rem 0 20rem;
  }
`;

const SucculentWrapper = styled(StandardWrapper)`
  max-width: 50rem !important;
`;

const SucculentLogo = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
`;

const SucculentImage = styled.div`
  position: absolute;
  right: 0;
  bottom: -25rem;
  left: 0;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 50rem;
  }
`;

const SucculentTitle = styled.div`
  width: 100%;
  margin: 2.5rem auto 0;

  p {
    margin-bottom: 2rem;
    color: ${props => props.theme.navyBlue};
    font-family: ${props => props.theme.fontSec};
    font-size: 2.6rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.25;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 4rem;
    }
  }
`;

const SucculentContent = styled.div`
  width: 100%;
  margin: 2.5rem auto 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2.5rem auto 5rem;
  }

  p {
    margin-bottom: 2rem;
    color: ${props => props.theme.navyBlue};
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
    line-height: 1.25;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.8rem;
    }
  }
`;

class Succulent extends Component {
  render() {
    return (
      <SucculentSection>
        <SucculentWrapper>
          <SucculentLogo>
            <Img
              fluid={
                this.props.data.succulentLogo.localFile.childImageSharp.fluid
              }
              alt={this.props.data.succulentLogo.alt_text}
            />
          </SucculentLogo>
          <SucculentTitle
            dangerouslySetInnerHTML={{ __html: this.props.data.succulentTitle }}
          />
          <SucculentContent
            dangerouslySetInnerHTML={{
              __html: this.props.data.succulentContent
            }}
          />
          <SucculentImage>
            <Img
              fluid={
                this.props.data.succulentImage.localFile.childImageSharp.fluid
              }
              alt={this.props.data.succulentImage.alt_text}
            />
          </SucculentImage>
        </SucculentWrapper>
      </SucculentSection>
    );
  }
}

export default Succulent;
