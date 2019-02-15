import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const AngelSignSection = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem 2.5rem;
  overflow: hidden;
`;
const AngelSignBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const AngelSignPoster = styled.div`
  position: relative;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  z-index: 1;
`;

class AngelSign extends Component {
  render() {
    return (
      <AngelSignSection>
        <AngelSignPoster>
          <Img fluid={this.props.data.AngelSignPoster} />
        </AngelSignPoster>
        <AngelSignBackground>
          <Img fluid={this.props.data.AngelSignBG} />
        </AngelSignBackground>
      </AngelSignSection>
    );
  }
}

export default AngelSign;
