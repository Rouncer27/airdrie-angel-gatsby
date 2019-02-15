import React, { Component } from "react";
import styled from "styled-components";
import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { StandardParagraph } from "../../styles/Commons/Paragraphs";

import HandWings from "../../../images/handwings.png";

const QuestionStyled = styled.section``;

const QuestionTitle = styled.div`
  padding: 4rem 0 8rem;
  h2 {
    text-align: center;
    margin: 0;

    span {
      display: block;
      line-height: 1.2;
    }

    .question-title-top {
      font-weight: 300;
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 4rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 5rem;
      }
    }

    .question-title-bot {
      font-weight: 300;
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2.4rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.6rem;
      }
    }
  }
`;

const QuestionParagraph = styled(StandardParagraph)`
  position: relative;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  text-align: center;

  &::before {
    position: absolute;
    top: -8rem;
    right: 0;
    left: 0;
    width: 6.9rem;
    height: 5rem;
    margin: auto;
    background-image: url(${HandWings});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 500;
    content: "";
  }

  &::after {
    position: absolute;
    top: -4.125rem;
    right: 0;
    left: 0;
    width: 70rem;
    height: 0.25rem;
    margin: auto;
    background: ${props => props.theme.teal};
    content: "";
  }
`;

class Question extends Component {
  render() {
    return (
      <QuestionStyled>
        <StandardWrapper>
          <QuestionTitle>
            <h2>
              <span className="question-title-top">
                {this.props.data.questionTitleTop}
              </span>
              <span className="question-title-bot">
                {this.props.data.questionTitleBot}
              </span>
            </h2>
          </QuestionTitle>
          <QuestionParagraph
            dangerouslySetInnerHTML={{
              __html: this.props.data.questionTitleContent
            }}
          />
        </StandardWrapper>
      </QuestionStyled>
    );
  }
}

export default Question;
