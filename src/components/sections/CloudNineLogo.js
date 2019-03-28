import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const CloudNineLogoStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(50% - 1rem);
  max-width: 30rem;
  margin: 3rem auto;
  transition: all 0.5s ease-in-out;
  box-shadow: 0rem 0rem 0.4rem ${props => props.theme.grey};

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(33% - 6rem);
    margin: 3rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(25% - 4rem);
    margin: 2rem;
  }

  &:hover {
    box-shadow: 0rem 0rem 3rem ${props => props.theme.deepYellow};
    img {
      filter: grayscale(0%);
    }

    .cloud-nine-overlay {
      opacity: 1;
    }
  }

  .cloud-nine-img-wrapper {
    position: relative;
    width: 100%;
    padding: 0.5rem;
    transition: all 0.5s ease-in-out;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 2.5rem;
    }
  }

  img {
    width: 100%;
    transition: filter 500ms linear;
    filter: grayscale(100%);
  }

  .cloud-nine-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.grey};
    opacity: 0;
  }
`;

class CloudNineLogo extends Component {
  render() {
    return (
      <CloudNineLogoStyled
        rel="noopener noreferrer"
        target="_blank"
        href={this.props.link}
      >
        <div className="cloud-nine-img-wrapper">
          <Img fluid={this.props.imgUrl} alt={this.props.imgAlt} />
        </div>
      </CloudNineLogoStyled>
    );
  }
}

export default CloudNineLogo;
