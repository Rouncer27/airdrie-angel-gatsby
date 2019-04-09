import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";

import { StandardWrapper } from "../../styles/Commons/Wrappers";

const InitiativeStyled = styled.section`
  .initiative__title {
    width: 100%;
    margin-bottom: 2.5rem;
    padding: 5rem 2rem;
    background: ${props => props.theme.green};
    text-align: center;

    h2 {
      margin: 0;
      color: ${props => props.theme.white};
    }
  }

  .initiative__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 3rem;

    &--image {
      position: relative;
      width: 100%;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 40%;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 25%;
      }

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img {
          object-fit: cover;
          object-position: center center;
        }
      }
    }

    &--content {
      width: 100%;
      padding: 2rem;
      background: ${props => props.theme.teal};

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 60%;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 75%;
      }

      &--title {
        margin-bottom: 1.5rem;

        h2 {
          margin: 0;
          color: ${props => props.theme.white};
        }

        p {
          margin: 0;
          color: ${props => props.theme.white};
        }
      }

      &--excerpt {
        p {
          color: ${props => props.theme.white};
        }
      }

      &--button {
        a {
          display: inline-block;
          padding: 1rem 5rem;
          background: ${props => props.theme.white};
          transition: all 0.3s ease;
          color: ${props => props.theme.navyBlue};

          &:hover {
            background: ${props => props.theme.deepYellow};
            color: ${props => props.theme.white};
          }
        }
      }
    }
  }
`;

class Initiative extends Component {
  render() {
    console.log(this.props.data);
    return (
      <InitiativeStyled className="initiative">
        <div className="initiative__title">
          <h2>Our Initiatives</h2>
        </div>
        <StandardWrapper className="initiative__wrapper">
          {this.props.data.map((init, index) => {
            return (
              <div key={index} className="initiative__item">
                <div className="initiative__item--image">
                  <Img
                    fluid={
                      init.node.acf._app_init_featured_image.localFile
                        .childImageSharp.fluid
                    }
                    alt={init.node.acf._app_init_title}
                  />
                </div>
                <div className="initiative__item--content">
                  <div className="initiative__item--content--title">
                    <h2>{init.node.acf._app_init_title}</h2>
                    <p>
                      <span>{init.node.acf._app_init_date} | </span>
                      <span>{init.node.acf._app_init_location}</span>
                    </p>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: init.node.acf._app_init_excerpt
                    }}
                    className="initiative__item--content--excerpt"
                  />
                  <div className="initiative__item--content--button">
                    <Link to={`/initiatives/${init.node.slug}`}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </StandardWrapper>
      </InitiativeStyled>
    );
  }
}

export default Initiative;
