import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { StandardParagraph } from "../../styles/Commons/Paragraphs";

const StyledTeam = styled.section`
  width: 100%;
`;

const SupportTeamTitle = styled.div`
  width: 100%;
  padding: 5rem 2rem;
  background: ${props => props.theme.lightBrown};

  h2 {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontSec};
    font-weight: 300;
    font-size: 3.6rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 5rem;
    }
  }
`;

const TeamItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 10rem auto 5rem;

  &:nth-of-type(1) {
    margin-top: 2.5rem;
  }

  &:nth-of-type(2n + 2) {
    flex-direction: row-reverse;
  }
`;

const TeamItemImage = styled.div`
  width: 100%;
  max-width: 30rem;
  margin-bottom: 5rem;
  border-radius: 50%;
  border: 0.2rem solid ${props => props.theme.deepYellow};
  overflow: hidden;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(34% - 10rem);
    margin: auto 5rem;
  }
`;

const TeamItemContent = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 66%;
  }
`;

const TeamItemTitle = styled.div`
  margin-bottom: 3rem;

  h3,
  h4 {
    margin: 0;
    font-family: ${props => props.theme.fontSec};
    font-weight: 300;
    line-height: 1.2;
  }

  h4 {
    color: ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.8rem;
    }
  }
`;

const TeamItemContentParagraph = styled(StandardParagraph)`
  a {
    color: ${props => props.theme.teal};

    &:hover {
      color: ${props => props.theme.deepYellow};
    }
  }
`;

class Team extends Component {
  render() {
    console.log(this.props);
    return (
      <StyledTeam>
        <SupportTeamTitle>
          <h2>Angel Support Team</h2>
        </SupportTeamTitle>
        <StandardWrapper>
          <div>
            {this.props.data.map((team, index) => {
              return (
                <TeamItem key={index}>
                  <TeamItemImage>
                    <Img
                      fluid={team.image.localFile.childImageSharp.fluid}
                      alt={team.name}
                    />
                  </TeamItemImage>
                  <TeamItemContent>
                    <TeamItemTitle>
                      <h3>{team.name}</h3>
                      <h4>{team.title}</h4>
                    </TeamItemTitle>
                    <TeamItemContentParagraph
                      dangerouslySetInnerHTML={{ __html: team.bio }}
                    />
                  </TeamItemContent>
                </TeamItem>
              );
            })}
          </div>
        </StandardWrapper>
      </StyledTeam>
    );
  }
}

export default Team;
