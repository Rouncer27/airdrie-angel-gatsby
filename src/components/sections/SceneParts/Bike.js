import React, { Component } from "react";
import styled from "styled-components";

const WaterTowerStyled = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 2rem;
  width: 12rem;
  transition: all 1.75s ease;
  transform: rotate(0deg);
  z-index: 6000;

  @media (min-width: ${props => props.theme.bpTablet}) {
    bottom: 2rem;
    right: 22.5%;
    width: 15rem;
    transform: rotate(-10deg);
  }

  svg {
    transition: all 1.75s ease;
    #swb-person {
      transition: all 0.25s ease;
      opacity: 1;
    }
  }

  &.night {
  }
`;
export default class Bike extends Component {
  render() {
    const bikeSleepClass = this.props.time === 3 ? "night" : "";
    const bikeLocationClass =
      this.props.location !== "" ? this.props.location : "";
    return (
      <WaterTowerStyled className={`${bikeSleepClass} ${bikeLocationClass}`}>
        <a target="_blank" href="https://switchbackcreative.ca/">
          <svg
            id="bike"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2597.8 1364.9"
          >
            <ellipse
              id="shadow2"
              cx="722.9"
              cy="1338.4"
              rx="321"
              ry="26.5"
              opacity="0.4"
              fill="#4e4f4f"
            />
            <ellipse
              id="shadow1"
              cx="2136.7"
              cy="1333.7"
              rx="428"
              ry="30.4"
              opacity="0.4"
              fill="#4e4f4f"
            />
            <path
              id="frame"
              d="M2294.7,999.4c-68.5-155.5-136.3-311.3-205.1-466.6c-0.3-0.5-0.7-1-1.1-1.4	c-4.7-36.3-8.4-72.8-14.3-109c-3.4-7.9-12.2-11.7-20.2-11.2c-12.3-0.1-26.3,8.2-27.5,21.8c0.3,12.7,3.4,25.1,4.4,37.7	c3.4,26.3,6,52.7,10.3,78.9c-163.5,0.2-327.1,0.2-490.6,0.2c-12.7-39.8-25.5-79.6-38.5-119.3c-2.5-4.9-7.6-8.7-13.1-8.3	c-9.7,3.6-20.3,5.7-29.3,10.8c-6.5,5.4-5,15.3-1.9,22.3c10.3,31.4,20.4,62.9,30.4,94.5c-184.6,0-369.2,0.2-553.7,0.7	c-11.5-35.7-23.2-71.4-34.8-107.1c-2.5-4.8-7.6-8.7-13.1-8.2c-9.8,3.6-20.3,5.6-29.4,10.9c-6.4,5.5-4.9,15.3-1.8,22.2	c12.1,37.2,24.1,74.5,36.1,111.8c-0.3,0.5-0.5,1-0.8,1.5c-82.3,149.4-165.1,298.6-246.9,448.3c-3.4,8,2,17.9,10.1,19.7	c7.6,4,15,12.1,24.3,10c9.9-3.6,12.5-15.5,17.9-23.6c71.8-130.7,144.2-261.1,215.9-391.9c40.2,125.5,80.2,251.1,121.1,376.4	c1.9,6.6,3.9,14.8,11.2,16.9c5.3,2.3,10.7-0.4,15.4-2.7c7.4-2.7,16.9-3.5,21.8-10.6c4.8-9.6-1.7-19.8-4.2-29	C1044.7,864.2,1003.2,733,961,602c184.6-0.2,369.1-0.1,553.7-0.1c21,66.3,41.7,132.7,62.5,199c-155.9,70.7-311.8,141.4-467.5,212.4	c-7.8,4.9-8.6,16.9-3.1,23.9c3.4,8.2,5.1,19.7,14.4,23.1c8.1,2.1,15.3-2.6,22.6-6.1c-0.3,6.8-1,13.8,1.6,20.1	c4.9,8.4,15.7,7.2,23.9,7.1c189.6-0.2,379.1,1.9,568.7,1.3c8.4-1.2,13.9-10.9,11.3-19.2c-0.4-8.9,2.4-19.1-2.7-26.9	c-2.4-2.6-5.3-4-8.5-4.7c119.8-118.9,240.7-236.7,360.3-355.7c53,120.7,105.7,241.6,159.3,362c4.7,7.1,14.9,7.9,21.2,2.6	c7.8-3.8,18.3-5.1,23.1-13.3C2305.4,1017.5,2297.9,1008.2,2294.7,999.4z M1694.3,1003.6c-1.1-2.9-2.2-5.8-2.9-8.6	c-17.8-55-35.3-110.1-52.7-165.2c143.2-65.1,286.4-130.2,429.5-195.4C1943.9,757.8,1818.4,880,1694.3,1003.6z M1567.1,601.8	c150,0,300-0.2,449.9-0.6c-131.3,59.7-262.6,119.3-394,178.8C1604.4,720.7,1585.9,661.2,1567.1,601.8z M1197.8,1029.8	c131.7-59.6,263.4-119.3,395.1-179.1c18.9,60,38,119.9,57.6,179.7c0.1,0.3,0.3,0.5,0.4,0.8	C1499.8,1030.9,1348.8,1029.8,1197.8,1029.8z"
              fill="#005677"
            />
            <path
              id="backcrank"
              d="M1264.2,1114.8c-3.9-9.1-14.9-9.5-22.8-12.7c-12.5-3.8-24.7-9.4-37.7-11.2c-3.2,0.1-5.8,1.7-7.7,4	c-7.8-2.5-15.5-5.2-23.2-7.8c1.7-12.9,0.6-26.2-3.7-38.7c-10.3-31.7-39.5-55.9-71.9-58.2c-2.7-0.2-5.5-0.4-8.3-0.3	c-41.1-0.5-78.8,34.9-82.2,77.1c-4,36.5,16.9,74.4,49.9,88.3c29.7,13.4,66.9,7.4,90.3-16.1c4.6-4.4,8.6-9.3,12.1-14.6	c8.9,2.9,17.8,6,26.6,9c3.8,8.6,14.2,9.3,21.8,12.1c13.2,3.7,26,10.4,39.9,11.4c6.9-1,9.9-8.7,10.6-15.1	C1260.2,1133.2,1265.2,1124.3,1264.2,1114.8z"
            />
            <path
              id="backseat"
              d="M848.2,388.7c-22.8,0.8-46.1-0.9-68.3,5.4c-17,8.4-20.8,33.1-11.7,49c3.6,6.6,10.7,10.7,18,10.2	c19.9,2.2,41.5,3,58,16.1c9.3,6.6,20,11.7,31.5,11c21.8,0.9,43.3-8.1,59.3-23.1c7.6-6,17-9,26.5-9c17.1-3,36.2-7,47.5-21.7	c4.8-8.2,0.3-19.4-8.1-22.8c-17.7-10.7-38.9-10.9-58.7-13C911,388.6,879.6,388.6,848.2,388.7L848.2,388.7z M848.2,388.7"
            />
            <path
              id="handlebars"
              d="M2036.9,304.8c-22.3,1.1-44.9-1.7-67.1,1.5c-8.1,2-16.1,9.5-14.8,18.7c-0.5,9-1.9,20.8,6.4,26.6	c12.2,9,28,4.6,42,5.6c16.4-0.3,33.1,1.5,49.3-1.7c3.6-0.7,6.4-3.7,9.5-4.9c11.5,0.5,25,1.6,32.5,11.7c1.8,7.7-5.9,13.1-10.9,17.5	c-9.7,7-22.7,6.2-32.7,12.8c-16.4,9.4-27,30.1-23.3,49.4c0.9,2.7,1.5,7,3.8,8.1c29.8-5.4,61.7-11.5,84.4-33.7	c17.4-16.2,28.7-42.1,21.9-66.3c-6.5-22.8-28.3-37.6-50.5-40.1c-9.6-1.5-19.4-0.6-28.9-0.5C2052,305.5,2044.3,304.7,2036.9,304.8	L2036.9,304.8z M2036.9,304.8"
            />
            <path
              id="frontwheel"
              d="M2596.4,986.5c-7.2-83.6-46.7-163.8-108.6-218.1c-57.8-51.4-133.8-80.6-210.2-79	c-31.8,0.1-63.5,5.7-93.6,15.9c7.8-16.6,15.5-33.2,23.4-49.8c12.1-0.4,24.4,1,36.3-1.8c-2.9-22.2,0.9-44.8-2.3-67	c-4-7.3-13.2-5.1-19.9-5.2c-5.5-0.2-11-0.3-16.4-0.2c-19.1-0.4-35.2,18.3-34.2,37.8c0.1,8.4,2.7,16.9,8,23.2	c-10.4,15.8-19.6,32.5-30.7,47.8c-5.9,2-9.5,10-5.6,15.5c1.8,4.8,3.5,9.7,5.2,14.6c-50.1,24.3-94.1,61.9-125.4,109	c-48.4,71.4-67.5,163.6-50.8,249.3c16.1,85.4,66.3,163.1,137,210.3c67.1,45.6,151.4,63.6,230.5,48c76-14.4,146.5-58.5,193.2-122.1	C2580.1,1150.7,2604,1067.5,2596.4,986.5z M2537.2,1061.9c-12.4,74.2-56.6,142.2-118.6,181.4c-61.3,39.6-138.9,51.1-208.4,30.1	c-65.1-19.2-122.5-65.7-155.1-127c-33.2-61-42-135.7-23.2-203.1c17.5-64.4,58.8-121.4,114.3-156c40.2-25.3,86.9-39.4,134.1-39.5	c82.6-1,164.1,42,211.8,111.2C2532.4,916.8,2549.5,991.7,2537.2,1061.9z"
            />
            <path
              id="backwheel"
              d="M982,901c-26.3-73.8-80-136.4-147.3-173.2c-34.7-19.3-72.8-31.6-112-36.3c0-8.2,0-16.4,0-24.6	c28.9,0,57.7-0.1,86.6-0.3c9.3-4.5,10.2-16.4,10.2-25.7c0.2-9.4-1-21.1-9.8-26.1c-87.9-0.9-175.7-0.4-263.6-0.9	c-10.1,0-20.2,0-30.3,0c-12,0.2-24.1-0.4-35.9,0.4c-9.2,4.2-10.1,16.1-10.1,25.2c-0.3,9.3,0.7,20.8,9.2,25.9c9.5,2.5,19.4,0,29.1,1	c1.3,0,2.6,0,3.8,0c8.9,20.2,18.1,40.4,27.3,60.5c-44,23.9-82.7,58.3-111.2,100.4c-49.8,72.5-69.3,166.4-51.7,253.7	c16.6,84,66.1,160.5,135.6,207.2c60.4,41.3,134.9,60.3,207.1,52.4c123.9-11.9,235.4-107.7,270-231	C1008.9,1041.8,1006.1,967.3,982,901z M682.8,941.2c-27-59.5-53.7-119.2-80.6-178.8c26.3-9.3,54-14.3,81.9-14.5	C683.6,812.3,682.9,876.7,682.8,941.2z M558.7,666.5c42,0.1,84,0.3,126,0.4c0,7.5-0.1,15.1-0.1,22.6c-0.8,0-1.6,0-2.4,0	c-35.5,0.2-70.8,7-104,19.6C571.7,694.9,565.2,680.7,558.7,666.5z M939.3,1075.1c-15.7,71.8-61.2,136.3-123.2,172.7	c-60.2,36.2-135,45.9-202,25.5c-64.9-19.5-121.8-65.6-154.4-126.8c-33.2-61-42-135.7-23.2-203.1c17.5-64.4,58.8-121.4,114.3-156	c4.1-2.6,8.3-5,12.5-7.4c1.4,3.2,2.9,6.4,4.3,9.7c29.1,64.5,57.9,129.3,87.8,193.5c-10.5,10.9-16.3,26.8-12.7,42.2	c4.5,23.7,29.1,41.5,52.2,36.4c22.9-4.1,40.6-28.4,36.5-52.4c-1.3-8.7-5-16.8-10.5-23.4c0-0.8,0.1-1.5,0.1-2.2	c0.5-77.7,1.2-155.5,1.7-233.2c68.5,10.1,132.7,49.4,173.1,107.2C939.4,919.2,956,1000.6,939.3,1075.1z"
            />
            <path
              id="frontseat"
              d="M1605.1,403.8c-17.7-10.7-38.9-10.9-58.7-13c-31.3-2.2-62.7-2.2-94.1-2.1c-22.8,0.8-46.1-0.9-68.3,5.4	c-17,8.4-20.8,33.1-11.7,49c3.6,6.6,10.7,10.7,18,10.2c19.9,2.2,41.5,3,58,16.1c6.9,4.9,14.5,8.9,22.6,10.4	c-10.2,3.9-20.4,7.6-30.5,11.5c-0.1-0.4-0.2-0.8-0.3-1.2c-2.8-5.6-9.6-6.6-15.1-6.1c-29.1,2-58.4,2.6-87.5,4.8	c-6.7,1.6-10.7,9.2-8.7,16c0.8,10-0.7,20.5,1.9,30.2c4.4,7.9,14.5,6.1,21.9,5.5c23.9-1.4,47.9-1.9,71.8-3.7	c6.8,2.4,14.3-2.7,20.8-4.7c25.1-9.8,50.5-18.6,75.3-29c5-2.9,6.8-10.1,3-14.8c-2.4-5-3.4-11-6.1-15.9c7.9-3.8,15.2-8.9,21.6-15	c7.6-6,17-9,26.5-9c17.1-3,36.2-7,47.5-21.7C1617.9,418.5,1613.4,407.2,1605.1,403.8z"
            />
            <path
              id="frontcrank"
              d="M1865,1114.7c-3.9-9.1-14.9-9.5-22.8-12.6c-12.5-3.8-24.7-9.4-37.7-11.2c-3.2,0.1-5.8,1.7-7.6,4	c-7.8-2.5-15.5-5.2-23.2-7.8c1.7-12.7,0.7-25.7-3.5-37.9c-10-31.6-38.7-56.2-71.1-58.9c-3.1-0.3-6.2-0.5-9.4-0.4	c-41-0.5-78.8,34.9-82.2,77.1c-4,36.5,16.9,74.4,49.9,88.3c29.7,13.4,66.9,7.4,90.3-16.1c4.6-4.4,8.6-9.3,12.1-14.6	c8.9,2.9,17.8,6,26.7,9c4.2,9.1,15.4,9.5,23.5,12.6c12.7,3.8,24.9,10,38.2,10.9c6.9-1,9.9-8.7,10.6-15.1	C1861,1133.2,1866,1124.3,1865,1114.7z"
            />
            <g id="flag">
              <path
                d="M323.7,112.9c-11.7,3.6-23.5,6.6-35.4,8.8 c-15.3,2.9-30.6,4.4-46,4.5c-27.4,0.2-54.8-4.3-82.5-12.2c-27.7-7.9-56.1-19.3-84.9-32.7c3.2,38.7,5.5,77.3,4.1,115.9 c-1.4,37.9-5.2,75.9-11.2,113.6c-0.2,1.2-0.4,2.5-0.6,3.7c-1,6.3-2.1,12.5-3.3,18.8c-5.8,32.1-13.3,64.1-22.4,95.9 C30.4,468.1,15.8,506.6,0,545.2c25.1,13.5,51.4,24.8,79.3,32.7c28.1,7.9,57.9,12.3,89.7,12.1c18.9-0.1,38.4-1.9,58.3-5.1 c13.4-2.2,27.1-5,40.8-8.4c33.5-8.3,67.6-20.1,101.4-34c0,0,0-0.1,0-0.1c59.5-23.3,125.4-44.1,188.5-44.5 c52.7-0.4,104.8,12.8,157.9,32.9l-3.4-463.2c-48.3-20.1-97-33.4-145.6-33c-27.8,0.2-55.3,4.9-82.2,12.6C457.6,54.9,430.7,66,404,79 C377.4,92.9,350.7,104.6,323.7,112.9z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#005677"
              />
              <path
                d="M722.8,32.7c3.4-2.6,5.6-7.1,5.6-12.5c0-8.5-5.6-15.8-12.5-16.2c-6.9-0.4-12.6,6.2-12.7,14.7c0,5.4,2.2,10.2,5.5,13.2l-4.1,843 c0,1.6,2.7,3.1,6.3,3.4l1.5,0.1c3.5,0,6.3-1.1,6.3-2.7L722.8,32.7z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#010101"
                stroke="#010101"
                strokeWidth="8"
                strokeMiterlimit="10"
              />
              <path
                d="M610.3,260.8c-8.5,0.4-15.9,3.8-22.5,8.9L549,228.8l21.1-82l-14.5,5.7l-16.8,68l-7.8-57.9 l-11.4,4.5l17.1,127.5l11.4-4.7l-6.8-50.2l37.6,38.5c-9.1,10.5-16.7,24.4-22.7,37.8c-0.7,1.6-2.6,3.3-2.4,4.8l0,0 c-3.3,5.3-4.1,10.1-6.1,14.7c-2.4,5.5-4.5,10.4-6.6,14.4c-3.3,6.1-6.6,11.4-10,16.1c-10.6,14.5-21.3,22.1-28.7,23.8 c-12.9,3-27.7-5.6-27.7-5.6s8.9,29.7,33.2,23.3c0.9-0.2,1.8-0.5,2.7-0.8l-2,3.5c-25.3,34.9-64.1,60-110.1,66.3 c-56.6,7.9-110.9-13.8-146.6-55.3l-9.6,4.1c37.5,45.3,96.4,69.3,157.5,60.8c53.8-7.5,101.1-43.1,128.1-88.4 c-0.2,0.3-0.2,0.2-0.2,0c0.1-0.1,0.3-0.2,0.4-0.3c-0.1,0.1,0.4-3,0.4-2.9c0.1-0.1,3-0.4,3.2-0.4c0,0,0,0,0,0 c4.4-0.6,5.1,2,8.6-2.1c1.7-2,2.9-6.9,4.4-9.1c9.1-13,15.5-30.4,19.9-46.4c9-32.2,14.8-38.4,22.1-47.9 c15.9,17.1,33.4,21.1,45.3,11.7C644.3,291.7,649.3,258.8,610.3,260.8z M627.2,282.1c-3.6,7-12.1,12.2-24.4,3.4l-9.2-9.7 c4.2-6.9,14.7-11.1,22.9-9.9C624.5,267.1,630.5,275.5,627.2,282.1z"
                fill="#fff"
              />
              <polygon
                points="519.4,194.6 507.4,199.5 505.4,184.8 493.7,189.6 507.7,293.5 519.4,288.4 517.6,275 529.6,270.1 533.1,296.5 497.9,310.9 480.8,183.8 516,169.4"
                fill="#fff"
              />
              <path
                d="M420.5,276.4c-0.2,0.1-0.3,0.1-0.3,0.1S420.3,276.4,420.5,276.4"
                fill="#fff"
              />
              <path
                d="M445.6,300.4c-5.9-29.4-22.8-24.8-25.1-24c-0.2,0.1-0.3,0.1-0.3,0.1s0.1,0,0.3-0.1 c2.2-0.8,17.2-7.6,12.9-37.8c-3.8-27.2-23.7-25.9-30.2-23.2c-6.4,2.7-16.4,7-16.4,7l17,126.2l29.9-12.1 C433.8,336.6,451.1,327.4,445.6,300.4 M398.2,229.4l9-3.5c3.6-1.2,14.5-1,16.7,15.3c2.7,19.5-6.6,24.6-6.6,24.6l-13.4,6.8 L398.2,229.4z M428,327.1l-15.7,6.3l-5.5-41.8c0,0,6.3-2.7,10.3-4.5c4-1.7,16.6-1.5,19.1,15.8C439.1,323.8,428,327.1,428,327.1"
                fill="#fff"
              />
              <g fill="#fff">
                <path d="M325.9,401l-2.2,3.8c-2.7-1.6-5.6-2.4-8.6-2.6c-3-0.2-5.9,0.4-8.9,1.6c-3.3,1.3-5.9,3.4-8.1,6.1 c-2.1,2.7-3.4,5.7-3.8,8.9c-0.4,3.3,0,6.5,1.4,9.8c2.1,5,5.5,8.4,10.3,10.3c4.8,1.9,9.8,1.8,14.9-0.3c5.7-2.3,9.5-6.6,11.5-12.6 l4.2,1.1c-1,3.4-2.7,6.5-5.1,9.1c-2.5,2.7-5.5,4.8-9.3,6.3c-7.1,2.9-13.7,2.9-19.8-0.2c-5.1-2.6-8.8-6.7-11.2-12.4 c-2.5-6-2.4-11.8,0.1-17.7c2.5-5.8,6.9-10,13.2-12.6c3.8-1.6,7.6-2.2,11.2-2C319.4,398,322.8,399.1,325.9,401" />
                <path d="M330.6,394.1l4.9-2l2.2,5.4c0.6-2.7,1.5-5,2.6-6.7c1.2-1.7,2.7-3,4.4-3.7c1.3-0.6,2.9-0.7,4.8-0.5 l-0.8,5.1c-1.2,0-2.1,0.1-2.8,0.4c-1.6,0.6-2.9,1.9-3.8,3.9c-0.9,1.9-1.2,4.4-0.9,7.5c0.3,2.4,1.8,6.8,4.4,13.3l5.2,12.6l-4.9,2 L330.6,394.1z" />
                <path d="M398.9,362l35.8,32.9l-4.4,1.8l-11.9-10.8l-17.5,7.2l-0.8,16l-4.5,1.9l2.4-48.7L398.9,362z M401.9,370.8l-0.9,17.6l13.9-5.7L401.9,370.8z" />
                <polygon points="417.5,358.9 415.9,354.9 438.2,345.7 439.9,349.7 430.8,353.4 445.9,390.2 441.8,391.9 426.6,355.2" />
                <polygon points="443.8,343.4 447.9,341.7 464.7,382.4 460.6,384.1" />
                <polygon points="454.5,339 458.9,337.1 485.4,363 486.1,325.9 490.5,324.1 489.6,372.1 488.8,372.5" />
                <path d="M383.5,398.8l3.9-0.9c0.6,2.5,0.8,4.7,0.6,6.8c-0.2,2-0.8,4-1.8,5.8c-0.9,1.8-2.3,3.5-4.1,5.1 c-4,3.5-8.3,4.9-12.8,4.3c-4.6-0.6-8.3-2.6-11.2-6c-2.7-3.1-4.2-6.7-4.4-10.8c-0.3-5.2,1.6-9.6,5.7-13.2c4.2-3.6,8.9-5,14.2-4 c3.7,0.7,7.1,2.7,10,6l-22.1,19.3c2.5,2.8,5.5,4.4,8.9,4.6c3.4,0.3,6.3-0.7,8.9-3c1.2-1.1,2.3-2.4,3.1-3.8 c0.8-1.4,1.3-2.9,1.5-4.4C384.1,403.2,384,401.3,383.5,398.8 M377.7,392.2c-1.9-1.3-3.7-2.1-5.4-2.4c-1.7-0.3-3.5-0.2-5.3,0.4 c-1.9,0.5-3.5,1.4-5,2.7c-2.4,2.1-3.8,4.7-4.2,7.7c-0.3,2.2,0.2,4.8,1.6,7.6L377.7,392.2z" />
                <path d="M526,339l3.9-0.9c0.6,2.5,0.8,4.7,0.6,6.8c-0.2,2.1-0.8,4-1.8,5.8c-1,1.8-2.3,3.5-4.1,5.1 c-4,3.5-8.3,4.9-12.8,4.3c-4.6-0.7-8.3-2.6-11.2-5.9c-2.7-3.1-4.2-6.7-4.4-10.8c-0.3-5.2,1.6-9.6,5.7-13.1c4.2-3.7,8.9-5,14.2-4 c3.7,0.7,7.1,2.7,10,6L504,351.4c2.5,2.8,5.5,4.3,8.9,4.6c3.4,0.3,6.3-0.7,8.9-2.9c1.2-1.1,2.3-2.4,3.1-3.8 c0.8-1.5,1.3-2.9,1.5-4.4C526.6,343.4,526.4,341.5,526,339 M520.2,332.4c-1.9-1.3-3.7-2.1-5.4-2.4c-1.7-0.3-3.5-0.2-5.3,0.3 c-1.9,0.6-3.5,1.5-5,2.7c-2.4,2.1-3.8,4.7-4.2,7.7c-0.3,2.2,0.2,4.8,1.6,7.6L520.2,332.4z" />
              </g>
              <path
                d="M259.8,306.4c-3.3,0.5-5.6,3.5-5.2,6.9 c0.5,3.3,3.5,5.6,6.9,5.2c3.3-0.5,5.6-3.5,5.2-6.9C266.2,308.3,263.1,306,259.8,306.4"
                fill="#fff"
                stroke="#fff"
                strokeWidth="0.113"
                strokeMiterlimit="10"
              />
              <path
                d="M273.3,312.2l-0.2-2.2l-1.8,0c-0.1-0.5-0.3-1-0.5-1.5l1.5-0.9l-1-2l-1.7,0.6 c-0.3-0.5-0.7-0.9-1.1-1.3l1-1.5l-1.7-1.4l-1.4,1.3c-0.4-0.3-0.8-0.5-1.2-0.7l0.5-1.7l-2.1-0.8l-0.9,1.7c-0.5-0.1-1-0.2-1.5-0.2 l-0.3-1.8l-2.2,0.2l-0.1,1.8c-0.5,0.1-0.9,0.2-1.4,0.3l-0.9-1.6l-2,0.9l0.5,1.7c-0.6,0.3-1.1,0.7-1.6,1.2l-1.5-1l-1.4,1.7l1.2,1.2 c-0.4,0.6-0.8,1.3-1.1,2L249,308l-0.6,2.1l1.6,0.6c-0.1,0.5-0.1,1-0.1,1.4l-1.7,0.3l0.1,2.2l1.9,0.1c0.1,0.5,0.2,1.1,0.4,1.6 l-1.5,1l1,2l1.7-0.7c0.3,0.5,0.7,1,1.1,1.4l-1,1.5l1.7,1.4l1.2-1.2c0.5,0.3,1,0.6,1.6,0.9l-0.4,1.8l2.1,0.7l0.7-1.7 c0.7,0.1,1.3,0.2,2,0.2l0.4,1.7l2.2-0.3l-0.1-1.7c0.6-0.1,1.1-0.3,1.6-0.6l1,1.5l1.9-1l-0.7-1.7c0.5-0.3,0.9-0.7,1.3-1.1l1.5,1 l1.4-1.7L270,318c0.3-0.5,0.6-1,0.8-1.6l1.7,0.3l0.6-2.1l-1.7-0.6c0.1-0.4,0.1-0.9,0.1-1.4L273.3,312.2z M261.7,320.2 c-4.3,0.6-8.2-2.4-8.8-6.6c-0.6-4.2,2.4-8.2,6.6-8.8c4.2-0.6,8.2,2.4,8.8,6.6C269,315.7,266,319.6,261.7,320.2"
                fill="#fff"
              />
              <g fill="#fff">
                <path d="M264,205.9l2.2-2.1c1.3-1.2,2.2-1.9,2.7-2.2c0.8-0.4,1.6-0.6,2.4-0.5c0.8,0.1,1.6,0.5,2.3,1.2 c0.7,0.7,1,1.5,1.1,2.3c0.1,0.8-0.2,1.7-0.7,2.5c-0.4,0.6-1.3,1.5-2.6,2.8l-0.8,0.7l4.7,5.1l-1.1,1L264,205.9z M266.1,205.9 l3.5,3.7l1.9-1.7c0.8-0.7,1.2-1.3,1.5-1.8c0.2-0.5,0.3-0.9,0.2-1.4c-0.1-0.5-0.3-0.9-0.7-1.3c-0.3-0.4-0.8-0.6-1.2-0.7 c-0.5-0.1-0.9-0.1-1.4,0.1c-0.4,0.2-1,0.6-1.8,1.3L266.1,205.9z" />
                <path d="M273.1,197.6l2.3-1.9c1.3-1,2.2-1.7,2.8-2c0.8-0.4,1.7-0.5,2.5-0.4c0.9,0.2,1.6,0.6,2.2,1.4 c0.5,0.6,0.8,1.3,0.9,2c0.1,0.7-0.1,1.4-0.4,2.1c-0.4,0.7-1,1.4-2,2.2l8.6,2l-1.5,1.2l-8.6-2l-0.7,0.5l4.3,5.4l-1.2,0.9 L273.1,197.6z M275.2,197.8l3.2,4l2-1.6c0.8-0.6,1.3-1.2,1.6-1.6c0.3-0.4,0.4-0.9,0.3-1.4c0-0.5-0.2-0.9-0.6-1.3 c-0.3-0.4-0.7-0.7-1.2-0.8c-0.5-0.1-0.9-0.1-1.4,0c-0.5,0.1-1.1,0.5-1.9,1.2L275.2,197.8z" />
                <path d="M282.6,190.2l1.2-0.9l8.7,12.1l-1.2,0.9L282.6,190.2z" />
                <path d="M294.3,200l-7.9-12.6l0.3-0.2l14.6,4.3l-6.1-9.7l1.3-0.8l7.9,12.6l-0.3,0.2l-14.4-4.3l6,9.6 L294.3,200z" />
                <path d="M298.8,181.5l-0.7-1.3l7.3-3.9l0.7,1.3l-3,1.6l6.3,11.9l-1.4,0.7l-6.3-11.9L298.8,181.5z" />
                <path d="M317.9,178.2l-1.7-4.1l1.3-0.5l1.7,4.1l4.2-1.7l0.5,1.3l-4.2,1.7l1.7,4.1l-1.3,0.5l-1.7-4.1 l-4.2,1.7l-0.5-1.3L317.9,178.2z" />
                <path d="M327.8,167.1l1.5-0.4l5.6,9.6l1.5-11.5l0.3-0.1l6.8,9.4L344,163l1.5-0.4l-0.5,15.5l-0.3,0.1 l-7.1-9.8l-1.6,12.1l-0.3,0.1L327.8,167.1z" />
                <path d="M348.4,162.3l8.6-1.3l0.2,1.4l-7.1,1.1l0.7,4.6l7-1.1l0.2,1.4l-7,1.1l0.9,5.8l7-1.1l0.2,1.4 l-8.5,1.3L348.4,162.3z" />
                <path d="M359.6,160.7l3-0.2c1.2-0.1,2.1,0,2.8,0.2c0.7,0.2,1.2,0.6,1.6,1.2c0.4,0.6,0.6,1.2,0.7,1.9 c0,0.7-0.1,1.3-0.4,1.8c-0.3,0.6-0.7,1-1.4,1.4c0.8,0.2,1.4,0.5,1.9,0.8c0.4,0.3,0.8,0.7,1.1,1.2c0.3,0.5,0.4,1,0.5,1.6 c0.1,1.2-0.3,2.2-1.1,3.1c-0.8,0.9-2,1.4-3.5,1.5l-4.1,0.3L359.6,160.7z M361.6,168.3l0.4,5.7l1.9-0.1c1.1-0.1,1.9-0.2,2.4-0.5 c0.5-0.2,0.9-0.6,1.2-1.1c0.3-0.5,0.4-1,0.4-1.5c0-0.7-0.3-1.2-0.8-1.7c-0.5-0.5-1.1-0.8-1.9-0.9c-0.5-0.1-1.4-0.1-2.7,0 L361.6,168.3z M361.2,162l0.3,4.8l0.9-0.1c1-0.1,1.8-0.2,2.3-0.4c0.5-0.2,0.9-0.6,1.1-1c0.3-0.4,0.4-0.9,0.3-1.4 c0-0.7-0.3-1.2-0.8-1.6c-0.5-0.4-1.3-0.5-2.3-0.4L361.2,162z" />
                <path d="M380.5,174.7l1-14.9l3.1,0.2c2.3,0.2,3.9,0.4,4.9,0.9c1.4,0.6,2.5,1.6,3.2,2.9 c0.7,1.3,1,2.8,0.9,4.5c-0.1,1.5-0.5,2.8-1.3,3.9c-0.7,1.1-1.6,1.9-2.7,2.3c-1.1,0.5-2.6,0.6-4.4,0.5L380.5,174.7z M382,173.4 l1.7,0.1c2.1,0.1,3.5,0.1,4.4-0.1c1.2-0.3,2.1-0.9,2.8-1.8c0.7-0.9,1.1-2,1.2-3.4c0.1-1.4-0.2-2.7-0.8-3.7 c-0.6-1.1-1.6-1.8-2.8-2.3c-0.9-0.3-2.5-0.6-4.6-0.7l-1.1-0.1L382,173.4z" />
                <path d="M397,161.2l8.6,1.3l-0.2,1.4l-7.1-1.1l-0.7,4.6l7,1.1l-0.2,1.4l-7-1.1l-0.9,5.8l7,1.1l-0.2,1.4 l-8.5-1.3L397,161.2z" />
                <path d="M403.7,174.5l1.4-0.5c0.5,1.8,1.4,2.8,2.5,3.1c0.5,0.1,1,0.1,1.5,0c0.5-0.1,0.9-0.4,1.2-0.7 c0.3-0.3,0.5-0.7,0.6-1.1c0.1-0.5,0-1-0.2-1.5c-0.3-0.8-1-1.7-2-2.9c-1-1.2-1.6-2-1.8-2.5c-0.4-0.8-0.5-1.6-0.3-2.4 c0.1-0.6,0.4-1.2,0.9-1.6c0.4-0.5,0.9-0.8,1.6-0.9c0.6-0.2,1.3-0.2,1.9,0c0.7,0.2,1.3,0.5,1.8,0.9c0.5,0.5,1,1.2,1.5,2.3 l-1.4,0.6c-0.4-0.8-0.8-1.4-1.1-1.8c-0.3-0.3-0.7-0.5-1.2-0.6c-0.6-0.1-1.1-0.1-1.6,0.2c-0.5,0.3-0.7,0.7-0.9,1.2 c-0.1,0.3-0.1,0.6,0,1c0.1,0.3,0.2,0.7,0.5,1.1c0.2,0.2,0.7,0.9,1.6,1.9c1.1,1.2,1.8,2.2,2.1,3.1c0.3,0.8,0.4,1.6,0.2,2.3 c-0.2,1.1-0.8,1.9-1.8,2.5c-1,0.6-2.1,0.8-3.2,0.5c-0.9-0.2-1.7-0.6-2.3-1.3C404.6,176.6,404.1,175.7,403.7,174.5z" />
                <path d="M417.3,165.2l1.5,0.4l-3.9,14.4l-1.5-0.4L417.3,165.2z" />
                <path d="M434.8,173.5l-1.5,0.6c-0.5-1-1.2-1.9-2-2.7c-0.8-0.7-1.7-1.2-2.6-1.6c-1.1-0.4-2.3-0.5-3.5-0.3 c-1.2,0.2-2.2,0.7-3.1,1.4c-0.9,0.7-1.5,1.6-1.9,2.7c-0.4,1.1-0.4,2.2-0.2,3.3c0.2,1.2,0.8,2.2,1.6,3.1c0.8,0.9,1.8,1.6,3.1,2 c1.5,0.5,2.8,0.5,4.2,0.1c1.3-0.5,2.3-1.3,2.9-2.5l-4.5-1.6l0.5-1.4l6.1,2.1c-0.8,2.2-2,3.7-3.8,4.5c-1.7,0.8-3.7,0.9-5.9,0.1 c-2.6-0.9-4.4-2.5-5.3-4.8c-0.7-1.8-0.7-3.6-0.1-5.4c0.5-1.3,1.2-2.5,2.3-3.4c1.1-0.9,2.3-1.5,3.7-1.7c1.4-0.2,2.9-0.1,4.4,0.4 c1.2,0.4,2.3,1,3.2,1.8C433.3,171.1,434.1,172.2,434.8,173.5z" />
                <path d="M432.9,186.1l6.4-13.5l0.3,0.1l4.2,14.6l4.9-10.3l1.3,0.6l-6.4,13.5l-0.3-0.1l-4.2-14.5l-4.8,10.2 L432.9,186.1z" />
              </g>
              <g fill="#fff">
                <polygon points="257.4,335.7 266.8,405.3 278.2,400.6 268.8,331" />
                <polygon points="298.9,258.2 252.2,276.3 253.7,286.9 275.3,278.5 291,395 302.4,390.4 286.7,274.1 300.3,268.8" />
                <polygon points="340.1,268.1 328.1,273 326.1,258.2 314.4,263 328.4,366.9 340.1,361.9 338.3,348.5 350.2,343.6 353.8,370 318.6,384.4 301.5,257.3 336.7,242.8" />
                <polygon points="370.2,228.4 378.1,286.7 361.4,293.3 353.7,235.6 342.2,240.1 359.4,367.3 370.8,362.7 362.9,303.9 379.5,297.2 387.3,355.5 398.7,351 381.5,223.9" />
                <path d="M150.2,415l3.4,24.5c0,0.1,0,1.5,1.6,2.8c1.8,1.5,5.9,3.1,15.1,1.8c12.1-1.7,17.5-8.5,15.8-20.3 l-5.2-37.5L154,353.9l-4.2-30.2l0.2-0.2c0.1-0.1,2.1-2,6.1-2.5c1.3-0.2,2.7-0.2,4.1,0l0.4,0l2.7,18.7l13.5-1.9l-3.1-22.3 c-0.9-0.9-7.6-7.1-18.4-5.6c-11.7,1.6-18.5,8.6-17.2,17.8l4.9,35.4l27.2,30.8l0,0.1c0.2,1.4,4.9,34.3,5,36.1 c0.1,1.5-2.2,2.6-4.4,2.9c-1.3,0.2-3.7,0.3-5.8-1.2l-0.2-0.1l-2.6-18.5L150.2,415z" />
                <path d="M449.5,157c-12.1-8.3-16-8-21-10.5c-11.2-5.5-28.3-4.6-39.3-5.6c-12.1-0.3-24.6-0.5-37.3,1.3 c-61.8,8.6-111.5,49-134.9,102.3c-9.2-0.1-17.6,0-24.3,0.9c-25.3,3.4-32.1,17.5-30.9,26.7c1.2,9.1,14.8,10.4,37.1,13.2 c23.8,3,27.8,6.1,30.6,26.7c2.8,20.6,6.7,78,6.7,78l-20.6-71.1l-6.4,2.6l-5.6,60.8l-10.9-80.6l-11.1,4.6l17.1,126.9l11.1-4.5 l6.5-72.8l19.1,62.3l14.9-6.2c0,0-5.7-86.9-8.9-103.9c-3.2-17-2-25.4-16-29.2c-14.4-3.9-38.3-6-39.2-13c-1-7,10.9-12.3,27.8-12.1 c18.8,0.3,52.7,2.5,71.1-1.1c25.1-4.9,35.8-15.4,34.7-23.3c-1.1-8-12-14.4-28.6-12.2c-16.6,2.2-28,8.7-27.6,16 c0.5,8,6.4,7.1,6.4,7.1s-2.3-11.7,16.4-14.2c12.7-1.7,16.4,3.9,16.6,6.5c0.3,5.1-4.8,10.2-16,12.4c-11.6,2.3-36.4,0.4-59.4-0.3 c23-47.7,69.4-84.9,125.7-92.7c19.8-2.8,39.4-1.8,57.9,2.3c21.9,5.1,41.7,12.9,56.9,24l10.7-3.4" />
              </g>
              <path
                d="M397.4,470.4c-53.4,7.4-104.3-13.7-137.3-51.6l-1.7,0.8c33.4,38.6,85,60.1,139.2,52.6 c43.1-6,79.6-29.2,103.6-61.7l-2.7,0.6C474.9,442.3,439.3,464.6,397.4,470.4z"
                fill="#fff"
              />
              <path
                d="M465.2,189.8L439.7,201l11,130.3l13.1-0.4l-5.9-58l0,0l-0.9-12.1c2.1,0.7,4.5-0.9,6.6-0.8 c2,0.1,3.3,0.1,4.3,1.6c0.4,0.6,0.8,0.7,1.1,1.3c0,0.1,0-0.1,0.1-0.1c0.3,0.7,0.7,1.3,1,2c0.8,1.6,1.2,2.3,1.4,2.3 c-0.2,0-0.6-0.7-1.4-2.4c-0.3-0.7-0.7-1.4-1-2.1l11.4,54.9l12.4-4.6L465.2,189.8z M460.4,252.4l-5.1-46.9l-0.9-5l10.7,49.5l0,0"
                fill="#fff"
              />
            </g>
          </svg>
        </a>
      </WaterTowerStyled>
    );
  }
}
