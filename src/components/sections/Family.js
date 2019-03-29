import React, { Component } from "react";
import CountUp from "react-countup";
import styled, { keyframes } from "styled-components";
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

import { StandardWrapper } from "../styles/Commons/Wrappers";
import Pig from "../styles/Commons/Pig";
import House from "../styles/Commons/House";

const FamilyStyles = styled.section`
  padding: 5rem 0;
  background: rgba(255, 219, 0, 0.5);
`;

const FamilySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  padding: 7.5rem 4rem;
  background: ${props => props.theme.white};
  border-radius: 0.5rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin: 0 2rem;
    padding: 7.5rem 5rem;
  }

  .family-counter {
    display: block;
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 300;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 4rem;
    }
  }
`;

const piggyFill = keyframes`
  0%{
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(2880deg);
  }
`;

const FamilySectionPig = styled.div`
  position: relative;

  .coin-container {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    width: 5rem;
    height: 18rem;
    margin: 0 auto;
    overflow: hidden;
  }

  .money-pig {
    position: relative;
    display: block;
    width: 12rem;
    margin: 0 auto 2rem;
    z-index: 50000;
    transition: all 2s ease;

    #pigtail {
      transform-origin: 5% 50%;
      transform: rotateX(0deg);
      animation-name: ${piggyFill};
      animation-duration: 1.75s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-direction: alternate;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
    }
  }
`;

const FamilyContent = styled.div`
  text-align: center;

  p {
    font-size: 2rem;
    font-weight: 300;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2.2rem;
      font-weight: 300;
    }
  }
`;

class Family extends Component {
  constructor(props) {
    super(props);

    this.state = {
      famNumber: 0,
      monNumber: 0
    };
  }

  animateTheFamiles(endNumber) {
    this.setState(prevState => {
      return {
        ...this.state,
        famNumber: endNumber
      };
    });
  }

  animateTheMoney(monNumber) {
    const piggyContainer = document.querySelector(".piggy-animation");
    piggyContainer.classList.add("active");
    const activePig = document.querySelector(".money-pig ");
    activePig.classList.add("active");

    this.setState(() => {
      return {
        ...this.state,
        monNumber: monNumber
      };
    });
  }

  render() {
    return (
      <FamilyStyles>
        <StandardWrapper>
          <FamilySection>
            <div>
              <House />
              <Controller>
                <Scene
                  indicators={false}
                  reverse={false}
                  duration={1}
                  offset={0}
                  triggerHook={0.65}
                  classToggle="number-action"
                >
                  <Timeline>
                    <Tween
                      staggerFrom={{ ease: "Expo.easeOut" }}
                      onStartAll={() => {
                        const endNum = parseInt(this.props.data.famHelpedTotal);
                        this.animateTheFamiles(endNum);
                      }}
                    >
                      <CountUp
                        className="family-counter"
                        duration={4}
                        start={0}
                        end={this.state.famNumber}
                      />
                    </Tween>
                  </Timeline>
                </Scene>
              </Controller>
            </div>
            <FamilyContent
              dangerouslySetInnerHTML={{
                __html: this.props.data.famHelpedContent
              }}
            />
          </FamilySection>
          <FamilySection>
            <div>
              <FamilySectionPig className="piggy-animation">
                <Pig />
              </FamilySectionPig>
              <Controller>
                <Scene
                  indicators={false}
                  reverse={false}
                  duration={1}
                  offset={0}
                  triggerHook={0.65}
                  classToggle="number-action"
                >
                  <Timeline>
                    <Tween
                      staggerFrom={{ ease: "Expo.easeOut" }}
                      onStartAll={() => {
                        const removeComma = this.props.data.famHelpedMoney
                          .split(",")
                          .join("");
                        const monNumber = parseFloat(removeComma);
                        this.animateTheMoney(monNumber);
                      }}
                    >
                      <CountUp
                        className="family-counter"
                        decimals={2}
                        duration={3}
                        separator=","
                        prefix="$ "
                        start={0}
                        end={this.state.monNumber}
                      />
                    </Tween>
                  </Timeline>
                </Scene>
              </Controller>
            </div>
            <FamilyContent
              dangerouslySetInnerHTML={{
                __html: this.props.data.famHelpedMoneyContent
              }}
            />
          </FamilySection>
        </StandardWrapper>
      </FamilyStyles>
    );
  }
}

export default Family;
