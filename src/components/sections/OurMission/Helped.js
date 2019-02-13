import React, { Component } from "react";
import styled from "styled-components";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { StandardParagraph } from "../../styles/Commons/Paragraphs";
import Trees from "../SceneParts/Trees";

const StyledHelped = styled.div`
  position: relative;

  .helped-trees {
    bottom: 90%;
    right: auto;
    left: -20rem;
    opacity: 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      opacity: 1;
    }
  }
`;

const HelpedIntro = styled.div`
  padding: 8rem 2rem;
  background: ${props => props.theme.teal};

  p {
    width: 100%;
    max-width: 70rem;
    margin: 2rem auto;
    color: ${props => props.theme.greyLight};
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2.2rem;
    }
  }
`;

class Helped extends Component {
  render() {
    return (
      <StyledHelped>
        <HelpedIntro
          dangerouslySetInnerHTML={{ __html: this.props.data.helpedIntro }}
        />
        <Trees location="helped-trees" />
        <StandardWrapper>
          <div>
            {this.props.data.helpedPeople.map((people, index) => {
              return (
                <div key={index}>
                  <div dangerouslySetInnerHTML={{ __html: people.big_quote }} />
                  <div
                    dangerouslySetInnerHTML={{ __html: people.small_quote }}
                  />
                </div>
              );
            })}
          </div>
        </StandardWrapper>
      </StyledHelped>
    );
  }
}

export default Helped;
