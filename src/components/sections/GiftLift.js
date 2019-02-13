import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const GiftLiftSection = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 2rem auto;
  padding: 2rem 5rem;
`;

class GiftLift extends Component {
  render() {
    return (
      <GiftLiftSection>
        <div>
          <Img
            fluid={this.props.data.localFile.childImageSharp.fluid}
            alt={this.props.data.alt_text}
          />
        </div>
      </GiftLiftSection>
    );
  }
}

export default GiftLift;
