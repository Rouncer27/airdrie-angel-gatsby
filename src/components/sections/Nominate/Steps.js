import React, { Component } from "react";

import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { StandardParagraph } from "../../styles/Commons/Paragraphs";

import SignNominate from "../SceneParts/SignNominate";
import SignStories from "../SceneParts/SignStories";

const StepsSection = styled.section`
  .nominate-page {
    top: -5rem;
    left: 4rem;
    bottom: auto;
    transform: rotate(-12deg);

    @media (min-width: ${(props) => props.theme.bpTablet}) {
      left: 14rem;
    }
  }

  .nominate-page-stories {
    bottom: 34rem;
    width: 7rem;
    left: auto;
    right: 20rem;
  }
`;

const StepsTitle = styled.div`
  width: 100%;
  margin-bottom: 5rem;

  @media (min-width: ${(props) => props.theme.bpTablet}) {
    margin-bottom: 5rem;
  }

  @media (min-width: ${(props) => props.theme.bpDesksm}) {
    margin-bottom: 2rem;
  }

  h2 {
    width: 100%;
    margin: 0 auto;
    color: ${(props) => props.theme.teal};
    font-weight: 300;
    text-align: center;
  }
`;

const StyledStepsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledStep = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 2.5rem auto 7.5rem;
`;

const StyledStepTitle = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme.navyBlue};
  text-align: center;

  h3 {
    margin: 0;
    color: ${(props) => props.theme.white};

    span {
      display: block;
      font-size: 2em;
      line-height: 1;
    }
  }

  &.step-1 {
    background: ${(props) => props.theme.navyBlue};
  }

  &.step-2 {
    background: ${(props) => props.theme.teal};
  }

  &.step-3 {
    background: ${(props) => props.theme.deepYellow};
  }
`;

const StyledStepContent = styled(StandardParagraph)`
  width: 100%;
  padding: 3rem 1.5rem;

  @media (min-width: ${(props) => props.theme.bpTablet}) {
    padding: 5rem;
  }

  &.step-1 {
    border: 0.2rem solid ${(props) => props.theme.navyBlue};
  }

  &.step-2 {
    border: 0.2rem solid ${(props) => props.theme.teal};
  }

  &.step-3 {
    border: 0.2rem solid ${(props) => props.theme.deepYellow};
  }

  p:last-of-type {
    margin: 0;
  }

  .nom-btn {
    width: 100%;
    margin-top: 2rem;
    text-align: center;

    a,
    button {
      padding: 2rem 4rem;
      display: inline-block;
      border: 0.1rem solid ${(props) => props.theme.white};
      border-radius: 0.15rem;
      background: ${(props) => props.theme.teal};
      color: ${(props) => props.theme.white};
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme.deepYellow};
        color: ${(props) => props.theme.grey};
      }
    }
  }
`;

class Steps extends Component {
  render() {
    return (
      <StepsSection>
        <StandardWrapper>
          <StepsTitle>
            <h2>How to Nominate Someone</h2>
          </StepsTitle>
          <StyledStepsWrapper>
            <SignNominate location="nominate-page" />
            <SignStories location="nominate-page-stories" />
            {this.props.data.map((step, index) => {
              return (
                <StyledStep key={index}>
                  <StyledStepTitle className={`step-${index + 1}`}>
                    <h3>
                      <span>{`${index + 1} `}</span>
                      {step.title}
                    </h3>
                  </StyledStepTitle>
                  <StyledStepContent className={`step-${index + 1}`}>
                    <div dangerouslySetInnerHTML={{ __html: step.content }} />
                    {index === 0 ? (
                      <div className="nom-btn">
                        <button onClick={() => scrollTo(`#nomination-form`)}>
                          Nominate Now
                        </button>
                      </div>
                    ) : null}
                  </StyledStepContent>
                </StyledStep>
              );
            })}
          </StyledStepsWrapper>
        </StandardWrapper>
      </StepsSection>
    );
  }
}

export default Steps;
