import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const CriteriaSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 60rem;
`;

const CriteriaBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    object-position: cover;
  }
`;

const CriteriaContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  h2,
  h3,
  p {
    color: ${props => props.theme.deepYellow};
    text-align: center;
  }

  h2 {
    margin: 0;
    font-family: ${props => props.theme.fontSec};
    font-weight: 300;
    line-height: 1;
  }

  h3 {
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    font-weight: 300;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2.4rem;
    }
  }
`;

class Criteria extends Component {
  render() {
    return (
      <CriteriaSection>
        <CriteriaContent>
          <div>
            <h2>Criteria</h2>
            <h3>Requirement Rules</h3>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.data.criteriaContent
            }}
          />
        </CriteriaContent>
        <CriteriaBackground>
          <Img
            fluid={
              this.props.data.criteriaImage.localFile.childImageSharp.fluid
            }
            alt="The Criteria"
          />
        </CriteriaBackground>
      </CriteriaSection>
    );
  }
}

export default Criteria;
