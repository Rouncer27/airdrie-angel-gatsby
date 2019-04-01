import React, { Component } from "react";
import styled from "styled-components";

import { StandardWrapper } from "../../styles/Commons/Wrappers";
import { BigTealLink } from "../../styles/Commons/Buttons";

import SignNominate from "../SceneParts/SignNominate";
import Hill from "../SceneParts/Hill";
import WaterTower from "../SceneParts/WaterTower";

const BeAnAngelSection = styled.section`
  position: relative;
  padding: 15rem 0;
  background: linear-gradient(
    to top,
    ${props => props.theme.green} 0%,
    ${props => props.theme.green} 1rem,
    ${props => props.theme.white} 1rem,
    ${props => props.theme.white} 100%
  );

  .nominate-page {
    right: 15rem;
    left: auto;
  }

  .be-angel {
    bottom: 0;
  }

  .be-angel-tower {
    bottom: 0;
    left: 0rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      left: 10rem;
    }
  }
`;

const BeAnAngelTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const BeAnAngelContent = styled.div`
  width: 100%;
  text-align: center;
`;

const BeAnAngelBottom = styled.div`
  width: 100%;
  text-align: center;
`;

class BeAnAngel extends Component {
  render() {
    return (
      <BeAnAngelSection>
        <StandardWrapper>
          <BeAnAngelTitle>
            <h2>Nominate</h2>
          </BeAnAngelTitle>
          <BeAnAngelContent>
            <p>Be an angel and nominate a deserving person today.</p>
          </BeAnAngelContent>
          <BeAnAngelBottom>
            <BigTealLink to="/nominate">Nominate Someone</BigTealLink>
          </BeAnAngelBottom>
        </StandardWrapper>
        <div>
          <SignNominate location="nominate-page" />
          <Hill location="be-angel" />
          <WaterTower location="be-angel-tower" />
        </div>
      </BeAnAngelSection>
    );
  }
}

export default BeAnAngel;
