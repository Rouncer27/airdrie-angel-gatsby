import React, { Component } from "react";
import CountUp from "react-countup";
import styled, { keyframes } from "styled-components";
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

import { StandardWrapper } from "../styles/Commons/Wrappers";
import Coin from "../styles/Commons/Coin";
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

const fallingMoney = keyframes`
   0%{
     transform: translateY(0%);
   }

   100% {
    transform: translateY(1400%);
   }
`;

const piggyFill = keyframes`
  0%{
    transform: scale(0.75);
  }

  100% {
  transform: scale(1.25);
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

  .money-coin {
    position: absolute;
    top: -6rem;
    left: 1.5rem;
    width: 3rem;
  }

  .coin-copy-0 {
    top: -9rem;
    left: 0rem;
  }

  .coin-copy-1 {
    top: -12rem;
    left: 1.5rem;
  }

  .coin-copy-2 {
    top: -15rem;
    left: 0rem;
  }

  .coin-copy-3 {
    top: -18rem;
    left: 1.5rem;
  }

  .coin-copy-4 {
    top: -21rem;
    left: 0rem;
  }

  .coin-copy-5 {
    top: -24rem;
    left: 1.5rem;
  }

  .coin-copy-6 {
    top: -27rem;
    left: 0rem;
  }
  .coin-copy-7 {
    top: -30rem;
    left: 1.5rem;
  }

  .coin-copy-8 {
    top: -33rem;
    left: 0rem;
  }

  .money-pig {
    position: relative;
    display: block;
    width: 15rem;
    margin: 0 auto 2rem;
    z-index: 50000;
    transition: all 2s ease;
    transform: scale(0.75);

    &.active {
      transform: scale(1.25);
    }
  }

  .piggy-mask {
    display: block;
    position: absolute;
    top: 1.25rem;
    right: 0;
    left: 0;
    width: 100%;
    height: 12rem;
    margin: auto;
    background: ${props => props.theme.white};
    z-index: 5000;
  }

  &.active {
    .money-coin {
      animation-name: ${fallingMoney};
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: 2;
    }

    .money-coin:first-of-type,
    .coin-copy-1,
    .coin-copy-3,
    .coin-copy-5,
    .coin-copy-7 {
      animation-delay: 0.25s;
    }

    .coin-copy-0,
    .coin-copy-2,
    .coin-copy-4,
    .coin-copy-6,
    .coin-copy-8 {
      animation-delay: 0.25s;
    }

    .money-pig {
      transform: scale(0.75);
      animation-name: ${piggyFill};
      animation-duration: 1.75s;
      animation-timing-function: ease-in-out;

      animation-delay: 0.7s;
      animation-direction: alternate;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
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

  componentDidMount() {
    this.makeLotsOfCoins();
  }

  makeLotsOfCoins() {
    const coinContainer = document.querySelector(".coin-container");

    const coinSVG = document.querySelector(".money-coin");
    for (let i = 0; i < 9; i++) {
      const newCoin = coinSVG.cloneNode(true);
      newCoin.classList.add(`coin-copy-${i}`);
      coinContainer.appendChild(newCoin);
    }
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
                <div className="coin-container">
                  <Coin />
                </div>
                <Pig />
                <div className="piggy-mask" />
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
