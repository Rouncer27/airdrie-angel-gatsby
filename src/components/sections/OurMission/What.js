import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import Trees from "../SceneParts/Trees";
import { StandardWrapper } from "../../styles/Commons/Wrappers";

const WhatStyled = styled.div`
  position: relative;
  background: linear-gradient(
    to top,
    ${props => props.theme.teal} 0%,
    ${props => props.theme.teal} 40%,
    ${props => props.theme.white} 40%,
    ${props => props.theme.white} 100%
  );

  .our-mission-trees {
    opacity: 1;
    bottom: 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      opacity: 1;
      bottom: 22.5rem;
    }
  }
`;

const WhatTitle = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 3rem;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 0 5rem;
  }

  h2 {
    font-size: 3rem;
    line-height: 1.25;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 4rem;
    }
  }
`;

const WhatContent = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 0 2rem;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 0 5rem;
  }

  p {
    font-weight: 300;
    font-size: 1.8rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2.4rem;
    }
  }
`;

const WhatImage = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 2rem auto;
`;

class What extends Component {
  render() {
    return (
      <WhatStyled>
        <StandardWrapper>
          <WhatTitle>
            <h2>{this.props.data.whatTitle}</h2>
          </WhatTitle>
          <WhatContent
            dangerouslySetInnerHTML={{ __html: this.props.data.whatContent }}
          />

          <WhatImage>
            <Img
              fluid={this.props.data.whatImage}
              alt={this.props.data.whatTitle}
            />
          </WhatImage>
          <Trees location="our-mission-trees" />
        </StandardWrapper>
      </WhatStyled>
    );
  }
}

export default What;
