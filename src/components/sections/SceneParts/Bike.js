import React, { Component } from "react";
import styled from "styled-components";

const WaterTowerStyled = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 22.5%;
  width: 15rem;
  transition: all 1.75s ease;
  transform: rotate(-10deg);
  z-index: 6000;
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
    return (
      <WaterTowerStyled className={bikeSleepClass}>
        <a href="">
          <svg
            id="bike"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2347 1376.1"
          >
            <ellipse
              id="shadow2"
              cx="410.3"
              cy="1349.6"
              rx="331.5"
              ry="26.5"
              opacity="0.4"
              fill="#4e4f4f"
            />
            <ellipse
              id="shadow1"
              cx="1870.6"
              cy="1344.8"
              rx="442.1"
              ry="30.4"
              opacity="0.4"
              fill="#4e4f4f"
            />
            <path
              id="frame"
              d="M2033.9,1010.6C1963.1,855.1,1893,699.3,1822,544c-0.3-0.5-0.7-1-1.1-1.4	c-4.9-36.3-8.7-72.8-14.8-109c-3.5-7.9-12.6-11.7-20.8-11.2c-12.7-0.1-27.2,8.2-28.4,21.8c0.3,12.7,3.5,25.1,4.6,37.7	c3.5,26.3,6.2,52.7,10.6,78.9c-168.9,0.2-337.8,0.2-506.8,0.2c-13.1-39.8-26.3-79.6-39.7-119.3c-2.6-4.9-7.8-8.7-13.6-8.3	c-10.1,3.6-20.9,5.7-30.3,10.8c-6.7,5.4-5.2,15.3-2,22.3c10.6,31.4,21.1,62.9,31.4,94.5c-190.7,0-381.3,0.2-572,0.7	c-11.9-35.7-23.9-71.4-36-107.1c-2.6-4.8-7.8-8.7-13.6-8.2c-10.1,3.6-21,5.6-30.4,10.9c-6.6,5.5-5.1,15.3-1.9,22.2	c12.5,37.2,24.9,74.5,37.3,111.8c-0.3,0.5-0.6,1-0.8,1.5c-85,149.4-170.6,298.6-255,448.3c-3.5,8,2,17.9,10.4,19.7	c7.8,4,15.5,12.1,25.1,10c10.3-3.6,12.9-15.5,18.5-23.6c74.2-130.7,149-261.1,223.1-391.9c41.5,125.5,82.8,251.1,125.1,376.4	c1.9,6.6,4,14.8,11.5,16.9c5.5,2.3,11-0.4,15.9-2.7c7.7-2.7,17.5-3.5,22.6-10.6c4.9-9.6-1.8-19.8-4.3-29	c-44-130.9-86.9-262.1-130.4-393.1c190.6-0.2,381.3-0.1,571.9-0.1c21.6,66.3,43,132.7,64.5,199c-161,70.7-322.1,141.4-482.9,212.4	c-8,4.9-8.9,16.9-3.2,23.9c3.5,8.2,5.3,19.7,14.9,23.1c8.4,2.1,15.8-2.6,23.3-6.1c-0.3,6.8-1,13.8,1.6,20.1	c5.1,8.4,16.3,7.2,24.7,7.1c195.8-0.2,391.6,1.9,587.4,1.3c8.7-1.2,14.4-10.9,11.7-19.2c-0.4-8.9,2.5-19.1-2.8-26.9	c-2.5-2.6-5.5-4-8.7-4.7c123.7-118.9,248.6-236.7,372.2-355.7c54.7,120.7,109.2,241.6,164.5,362c4.8,7.1,15.4,7.9,21.8,2.6	c8.1-3.8,18.9-5.1,23.8-13.3C2044.9,1028.6,2037.2,1019.4,2033.9,1010.6z M1413.7,1014.8c-1.1-2.9-2.2-5.8-3-8.6	c-18.4-55-36.5-110.1-54.4-165.2c147.9-65.1,295.8-130.2,443.7-195.4C1671.6,769,1541.9,891.2,1413.7,1014.8z M1282.3,613	c154.9,0,309.8-0.2,464.8-0.6c-135.6,59.7-271.3,119.3-406.9,178.8C1320.9,731.8,1301.7,672.4,1282.3,613z M900.8,1040.9	c136.1-59.6,272.1-119.3,408.1-179.1c19.5,60,39.3,119.9,59.5,179.7c0.1,0.3,0.3,0.5,0.4,0.8C1212.8,1042,1056.8,1041,900.8,1040.9z"
              fill="#005677"
            />
            <path
              id="backcrank"
              d="M969.4,1125.9c-4-9.1-15.4-9.5-23.6-12.7c-13-3.8-25.5-9.4-39-11.2c-3.3,0.1-6,1.7-7.9,4	c-8-2.5-16-5.2-24-7.8c1.8-12.9,0.6-26.2-3.9-38.7c-10.6-31.7-40.8-55.9-74.3-58.2c-2.8-0.2-5.7-0.4-8.5-0.3	c-42.4-0.5-81.4,34.9-84.9,77.1c-4.1,36.5,17.5,74.4,51.6,88.3c30.7,13.4,69.1,7.4,93.2-16.1c4.7-4.4,8.9-9.3,12.5-14.6	c9.2,2.9,18.3,6,27.5,9c4,8.6,14.7,9.3,22.5,12.1c13.7,3.7,26.8,10.4,41.2,11.4c7.2-1,10.2-8.7,10.9-15	C965.3,1144.4,970.5,1135.5,969.4,1125.9z"
            />
            <path
              id="backseat"
              d="M539.7,399.9c-23.5,0.8-47.6-0.9-70.5,5.4c-17.6,8.4-21.5,33.1-12.1,49c3.7,6.6,11,10.7,18.6,10.2	c20.5,2.2,42.9,3,59.9,16.1c9.6,6.6,20.6,11.7,32.5,11c22.5,0.9,44.8-8.1,61.2-23.1c7.8-6,17.6-9,27.4-9c17.7-3,37.4-7,49.1-21.7	c4.9-8.2,0.3-19.4-8.3-22.8c-18.3-10.7-40.1-10.9-60.6-13C604.6,399.8,572.1,399.8,539.7,399.9L539.7,399.9z M539.7,399.9"
            />
            <path
              id="handlebars"
              d="M1767.6,316c-23.1,1.1-46.4-1.7-69.3,1.5c-8.4,2-16.6,9.5-15.3,18.7c-0.5,9-2,20.8,6.6,26.6	c12.6,9,28.9,4.6,43.4,5.6c16.9-0.3,34.2,1.5,50.9-1.7c3.7-0.7,6.6-3.7,9.8-4.9c11.9,0.5,25.8,1.6,33.6,11.7	c1.9,7.7-6.1,13.1-11.2,17.5c-10.1,7-23.5,6.2-33.8,12.8c-17,9.4-27.9,30.1-24.1,49.4c0.9,2.7,1.5,7,3.9,8.1	c30.7-5.4,63.7-11.5,87.2-33.7c17.9-16.2,29.6-42.1,22.6-66.3c-6.7-22.8-29.2-37.6-52.1-40.1c-9.9-1.5-20-0.6-29.9-0.5	C1783.2,316.7,1775.2,315.8,1767.6,316L1767.6,316z M1767.6,316"
            />
            <path
              id="frontwheel"
              d="M2345.6,997.7c-7.4-83.6-48.2-163.8-112.2-218.1c-59.7-51.4-138.2-80.6-217.2-79	c-32.9,0.1-65.6,5.7-96.7,15.9c8-16.6,16-33.2,24.1-49.8c12.5-0.4,25.2,1,37.5-1.8c-3-22.2,0.9-44.8-2.4-67	c-4.1-7.3-13.7-5.1-20.6-5.2c-5.7-0.2-11.3-0.3-17-0.2c-19.7-0.4-36.4,18.3-35.4,37.8c0.1,8.4,2.8,16.9,8.2,23.2	c-10.7,15.8-20.3,32.5-31.7,47.8c-6.1,2-9.8,10-5.8,15.5c1.9,4.8,3.6,9.7,5.3,14.6c-51.7,24.3-97.2,61.9-129.5,109	c-50,71.4-69.8,163.6-52.5,249.3c16.6,85.4,68.5,163.1,141.6,210.3c69.3,45.6,156.3,63.6,238.1,48c78.5-14.4,151.3-58.5,199.6-122.1	C2328.7,1161.8,2353.4,1078.6,2345.6,997.7z M2284.4,1073.1c-12.8,74.2-58.4,142.2-122.5,181.4c-63.3,39.6-143.5,51.1-215.2,30.1	c-67.2-19.2-126.6-65.7-160.2-127c-34.2-61-43.4-135.7-24-203.1c18-64.4,60.7-121.4,118-156c41.5-25.3,89.7-39.4,138.5-39.5	c85.3-1,169.5,42,218.8,111.2C2279.4,928,2297.1,1002.9,2284.4,1073.1z"
            />
            <path
              id="backwheel"
              d="M678,912.1c-27.2-73.8-82.7-136.4-152.1-173.2c-35.8-19.3-75.2-31.6-115.6-36.3c0-8.2,0-16.4,0-24.6	c29.8,0,59.6-0.1,89.4-0.3c9.6-4.5,10.6-16.4,10.5-25.7c0.2-9.4-1-21.1-10.1-26.1c-90.8-0.9-181.5-0.4-272.3-0.9	c-10.4,0-20.9,0-31.3,0c-12.4,0.2-24.9-0.4-37.1,0.4c-9.5,4.2-10.4,16.1-10.4,25.2c-0.3,9.3,0.7,20.8,9.5,25.9	c9.8,2.5,20.1,0,30.1,1c1.3,0,2.6,0,4,0c9.2,20.2,18.7,40.4,28.2,60.5c-45.5,23.9-85.4,58.3-114.8,100.4	c-51.4,72.5-71.6,166.4-53.4,253.7c17.1,84,68.3,160.5,140.1,207.2c62.4,41.3,139.3,60.3,213.9,52.4c128-11.9,243.2-107.7,278.9-231	C705.7,1052.9,702.8,978.4,678,912.1z M368.9,952.3c-27.9-59.5-55.5-119.2-83.2-178.8c27.1-9.3,55.7-14.3,84.6-14.5	C369.7,823.5,369,887.9,368.9,952.3z M240.7,677.6c43.4,0.1,86.8,0.3,130.1,0.4c0,7.5-0.1,15.1-0.1,22.6c-0.8,0-1.6,0-2.5,0	c-36.7,0.2-73.1,7-107.4,19.6C254.1,706,247.4,691.8,240.7,677.6z M633.8,1086.2c-16.2,71.8-63.2,136.3-127.2,172.7	c-62.2,36.2-139.5,45.9-208.6,25.5c-67-19.5-125.8-65.6-159.5-126.8c-34.3-61-43.4-135.7-24-203.1c18-64.4,60.7-121.4,118-156	c4.2-2.6,8.5-5,12.9-7.4c1.5,3.2,3,6.4,4.5,9.7c30.1,64.5,59.8,129.3,90.7,193.5c-10.9,10.9-16.8,26.8-13.1,42.2	c4.6,23.7,30,41.5,53.9,36.4c23.6-4.1,41.9-28.4,37.7-52.4c-1.3-8.7-5.2-16.8-10.9-23.4c0-0.8,0.1-1.5,0.2-2.2	c0.5-77.7,1.3-155.5,1.7-233.2c70.7,10.1,137.1,49.4,178.8,107.2C634,930.4,651.1,1011.8,633.8,1086.2z"
            />
            <path
              id="frontseat"
              d="M1321.5,415c-18.3-10.7-40.1-10.9-60.6-13c-32.3-2.2-64.8-2.2-97.2-2.1c-23.5,0.8-47.6-0.9-70.5,5.4	c-17.6,8.4-21.5,33.1-12.1,49c3.7,6.6,11,10.7,18.6,10.2c20.5,2.2,42.9,3,59.9,16.1c7.1,4.9,15,8.9,23.4,10.4	c-10.5,3.9-21,7.6-31.5,11.5c-0.1-0.4-0.2-0.8-0.3-1.2c-2.9-5.6-9.9-6.6-15.6-6.1c-30.1,2-60.4,2.6-90.4,4.8c-6.9,1.6-11,9.2-8.9,16	c0.9,10-0.7,20.5,2,30.2c4.5,7.9,15,6.1,22.6,5.5c24.7-1.4,49.5-1.9,74.1-3.7c7.1,2.4,14.7-2.7,21.5-4.7c25.9-9.8,52.2-18.6,77.8-29	c5.2-2.9,7-10.1,3.1-14.8c-2.4-5-3.6-11-6.3-15.9c8.1-3.8,15.7-8.9,22.3-15c7.8-6,17.6-9,27.4-9c17.7-3,37.4-7,49.1-21.7	C1334.8,429.7,1330.2,418.4,1321.5,415z"
            />
            <path
              id="frontcrank"
              d="M1590,1125.9c-4.1-9.1-15.4-9.5-23.5-12.6c-13-3.8-25.5-9.4-39-11.2c-3.3,0.1-5.9,1.7-7.9,4	c-8-2.5-16-5.2-24-7.8c1.7-12.7,0.7-25.7-3.6-37.9c-10.3-31.6-40-56.2-73.4-58.9c-3.2-0.3-6.4-0.5-9.7-0.4	c-42.4-0.5-81.4,34.9-84.9,77.1c-4.1,36.5,17.5,74.4,51.6,88.3c30.7,13.4,69.1,7.4,93.2-16.1c4.7-4.4,8.9-9.3,12.5-14.6	c9.2,2.9,18.3,6,27.5,9c4.3,9.1,15.9,9.5,24.2,12.6c13.1,3.8,25.7,10,39.4,10.9c7.2-1,10.2-8.7,10.9-15	C1585.9,1144.4,1591.1,1135.4,1590,1125.9z"
            />
            <g id="flag">
              <g fillRule="evenodd" clipRule="evenodd">
                <path
                  d="M174.7,62.9c-6.3,2-12.7,3.6-19.1,4.8 c-8.2,1.5-16.5,2.4-24.8,2.5c-14.8,0.1-29.6-2.3-44.5-6.6c-15-4.3-30.3-10.4-45.8-17.6c1.7,20.9,3,41.7,2.2,62.6 c-0.7,20.5-2.8,41-6,61.3c-0.1,0.7-0.2,1.3-0.3,2c-0.5,3.4-1.1,6.8-1.8,10.1c-3.2,17.3-7.2,34.6-12.1,51.7 c-6.1,21-14,41.8-22.5,62.6c13.6,7.3,27.8,13.4,42.8,17.6c15.2,4.3,31.3,6.7,48.4,6.5c10.2-0.1,20.7-1,31.4-2.8 c7.3-1.2,14.6-2.7,22-4.5c18.1-4.5,36.5-10.9,54.7-18.4c0,0,0,0,0-0.1c32.1-12.6,67.7-23.8,101.7-24c28.4-0.2,56.6,6.9,85.2,17.7 l-1.8-250c-26.1-10.9-52.3-18-78.6-17.8c-15,0.1-29.8,2.6-44.4,6.8C247,31.6,232.5,37.6,218,44.6 C203.7,52.1,189.3,58.4,174.7,62.9z"
                  fill="#005677"
                />
                <path
                  d="M392.1,28.1c1.8-2,3-5.5,3-9.4c0-6.2-3.1-11.3-6.9-11.3s-6.8,5.1-6.7,11.4c0,3.9,1.3,7.3,3.1,9.3l4.5,615c0,1.2,1.5,2.1,3.4,2.2 l0.8,0c1.9-0.1,3.4-1.1,3.4-2.3L392.1,28.1z"
                  fill="#010101"
                  stroke="#010101"
                  strokeWidth="15"
                  strokeMiterlimit="10"
                />
              </g>
              <path
                d="M329.4,142.7c-4.6,0.2-8.6,2-12.1,4.8l-20.9-22l11.4-44.2l-7.8,3.1l-9.1,36.7l-4.2-31.3l-6.1,2.4 l9.2,68.8l6.2-2.6l-3.6-27.1l20.3,20.8c-4.9,5.7-9,13.2-12.3,20.4c-0.4,0.9-1.4,1.8-1.3,2.6l0,0c-1.8,2.9-2.2,5.5-3.3,8 c-1.3,3-2.4,5.6-3.6,7.8c-1.8,3.3-3.6,6.2-5.4,8.7c-5.7,7.8-11.5,11.9-15.5,12.8c-7,1.6-15-3-15-3s4.8,16,17.9,12.6 c0.5-0.1,1-0.3,1.5-0.4l-1.1,1.9c-13.6,18.9-34.6,32.4-59.4,35.8c-30.6,4.3-59.8-7.5-79.1-29.9l-5.2,2.2 c20.2,24.5,52,37.4,85,32.8c29-4,54.6-23.3,69.1-47.7c-0.1,0.1-0.1,0.1-0.1,0c0.1-0.1,0.2-0.1,0.2-0.2c0,0.1,0.2-1.6,0.2-1.5 c0,0,1.6-0.2,1.7-0.2c0,0,0,0,0,0c2.4-0.3,2.8,1.1,4.6-1.1c0.9-1.1,1.6-3.7,2.4-4.9c4.9-7,8.4-16.4,10.8-25 c4.8-17.4,8-20.7,11.9-25.8c8.6,9.2,18,11.4,24.5,6.3C347.7,159.4,350.4,141.6,329.4,142.7z M338.5,154.2 c-1.9,3.8-6.6,6.6-13.2,1.8l-4.9-5.2c2.3-3.7,7.9-6,12.4-5.3C337.1,146.1,340.3,150.6,338.5,154.2z"
                fill="#fff"
              />
              <polygon
                points="280.3,107 273.9,109.7 272.8,101.7 266.5,104.3 274,160.4 280.3,157.6 279.4,150.4 285.8,147.8 287.7,162 268.8,169.8 259.5,101.2 278.5,93.4"
                fill="#fff"
              />
              <path
                d="M226.9,151.1c-0.1,0-0.2,0.1-0.2,0.1S226.8,151.2,226.9,151.1"
                fill="#fff"
              />
              <path
                d="M240.5,164.1c-3.2-15.9-12.3-13.4-13.6-13c-0.1,0-0.2,0.1-0.2,0.1s0.1,0,0.2-0.1 c1.2-0.5,9.3-4.1,7-20.4c-2.1-14.7-12.8-14-16.3-12.5c-3.5,1.5-8.9,3.8-8.9,3.8l9.2,68.1l16.2-6.5 C234.1,183.6,243.5,178.7,240.5,164.1 M214.9,125.8l4.9-1.9c2-0.6,7.8-0.6,9,8.2c1.5,10.5-3.6,13.3-3.6,13.3l-7.2,3.7L214.9,125.8 z M231,178.5l-8.4,3.4l-2.9-22.6c0,0,3.4-1.5,5.5-2.4c2.2-0.9,9-0.8,10.3,8.5C237,176.7,231,178.5,231,178.5"
                fill="#fff"
              />
              <g fill="#fff">
                <path d="M175.9,218.4l-1.2,2c-1.5-0.8-3-1.3-4.6-1.4c-1.6-0.1-3.2,0.2-4.8,0.9c-1.8,0.7-3.2,1.8-4.4,3.3 c-1.2,1.4-1.8,3.1-2.1,4.8c-0.2,1.8,0,3.5,0.7,5.3c1.1,2.7,3,4.5,5.5,5.6c2.6,1,5.3,1,8.1-0.2c3.1-1.3,5.2-3.5,6.2-6.8l2.3,0.6 c-0.5,1.8-1.4,3.5-2.8,4.9c-1.3,1.4-3,2.6-5,3.4c-3.8,1.6-7.4,1.6-10.7-0.1c-2.8-1.4-4.8-3.6-6-6.7c-1.3-3.2-1.3-6.4,0-9.5 c1.4-3.1,3.7-5.4,7.1-6.8c2.1-0.8,4.1-1.2,6.1-1.1C172.4,216.8,174.2,217.4,175.9,218.4" />
                <path d="M178.4,214.7l2.6-1.1l1.2,2.9c0.3-1.5,0.8-2.7,1.4-3.6c0.6-0.9,1.4-1.6,2.4-2 c0.7-0.3,1.6-0.4,2.6-0.3l-0.5,2.7c-0.6,0-1.1,0.1-1.5,0.2c-0.9,0.3-1.6,1-2.1,2.1c-0.5,1-0.7,2.4-0.5,4.1c0.2,1.3,1,3.7,2.4,7.2 l2.8,6.8l-2.6,1.1L178.4,214.7z" />
                <path d="M215.3,197.3l19.3,17.7l-2.4,1l-6.4-5.8l-9.5,3.9l-0.4,8.6l-2.5,1l1.3-26.3L215.3,197.3z M216.9,202.1l-0.5,9.5l7.5-3.1L216.9,202.1z" />
                <polygon points="225.4,195.7 224.5,193.5 236.5,188.6 237.4,190.7 232.5,192.7 240.7,212.6 238.4,213.5 230.3,193.7" />
                <polygon points="239.5,187.3 241.7,186.4 250.8,208.4 248.6,209.3" />
                <polygon points="245.3,184.9 247.7,183.9 262,197.9 262.4,177.9 264.8,176.9 264.3,202.8 263.8,203" />
                <path d="M207,217.2l2.1-0.5c0.3,1.3,0.4,2.6,0.3,3.7c-0.1,1.1-0.4,2.1-1,3.1c-0.5,1-1.3,1.9-2.2,2.7 c-2.2,1.9-4.5,2.7-6.9,2.3c-2.5-0.3-4.5-1.4-6-3.2c-1.5-1.7-2.3-3.6-2.4-5.8c-0.2-2.8,0.9-5.2,3.1-7.1c2.3-2,4.8-2.7,7.7-2.1 c2,0.4,3.8,1.5,5.4,3.2l-11.9,10.4c1.4,1.5,3,2.3,4.8,2.5c1.8,0.1,3.4-0.4,4.8-1.6c0.7-0.6,1.2-1.3,1.7-2.1 c0.4-0.8,0.7-1.6,0.8-2.4C207.3,219.6,207.2,218.5,207,217.2 M203.9,213.6c-1-0.7-2-1.2-2.9-1.3c-0.9-0.2-1.9-0.1-2.9,0.2 c-1,0.3-1.9,0.8-2.7,1.5c-1.3,1.1-2.1,2.5-2.3,4.2c-0.2,1.2,0.1,2.6,0.8,4.1L203.9,213.6z" />
                <path d="M283.9,185l2.1-0.5c0.3,1.3,0.4,2.6,0.3,3.7c-0.1,1.1-0.4,2.1-1,3.1c-0.5,1-1.3,1.9-2.2,2.7 c-2.2,1.9-4.5,2.7-6.9,2.3c-2.5-0.4-4.5-1.4-6-3.2c-1.5-1.7-2.3-3.6-2.4-5.8c-0.1-2.8,0.9-5.2,3.1-7.1c2.3-2,4.8-2.7,7.7-2.2 c2,0.4,3.8,1.5,5.4,3.3L272,191.6c1.4,1.5,3,2.3,4.8,2.5c1.8,0.2,3.4-0.4,4.8-1.6c0.7-0.6,1.2-1.3,1.7-2.1 c0.4-0.8,0.7-1.6,0.8-2.4C284.2,187.3,284.1,186.3,283.9,185 M280.8,181.4c-1-0.7-2-1.1-2.9-1.3c-0.9-0.2-1.9-0.1-2.9,0.2 c-1,0.3-1.9,0.8-2.7,1.5c-1.3,1.1-2.1,2.5-2.3,4.2c-0.2,1.2,0.1,2.6,0.8,4.1L280.8,181.4z" />
              </g>
              <path
                d="M140.2,167.4 c-1.8,0.2-3,1.9-2.8,3.7c0.2,1.8,1.9,3,3.7,2.8c1.8-0.2,3-1.9,2.8-3.7C143.7,168.4,142,167.1,140.2,167.4"
                fill="#fff"
                stroke="#fff"
                strokeWidth="0.061"
                strokeMiterlimit="10"
              />
              <path
                d="M147.5,170.5l-0.1-1.2l-1,0c-0.1-0.3-0.1-0.5-0.3-0.8l0.8-0.5l-0.5-1.1l-0.9,0.3 c-0.2-0.2-0.4-0.5-0.6-0.7l0.6-0.8l-0.9-0.8l-0.7,0.7c-0.2-0.1-0.4-0.3-0.7-0.4l0.3-0.9l-1.1-0.4l-0.5,0.9 c-0.3-0.1-0.5-0.1-0.8-0.1l-0.2-1l-1.2,0.1l0,1c-0.3,0-0.5,0.1-0.7,0.2l-0.5-0.8l-1.1,0.5l0.3,0.9c-0.3,0.2-0.6,0.4-0.9,0.6 l-0.8-0.5l-0.8,0.9l0.6,0.7c-0.2,0.3-0.4,0.7-0.6,1.1l-0.9-0.2l-0.3,1.1l0.8,0.3c0,0.3-0.1,0.5-0.1,0.8l-0.9,0.1l0,1.2l1,0.1 c0.1,0.3,0.1,0.6,0.2,0.8l-0.8,0.5l0.6,1.1l0.9-0.4c0.2,0.3,0.4,0.5,0.6,0.7l-0.5,0.8l0.9,0.8l0.7-0.7c0.3,0.2,0.6,0.3,0.8,0.5 l-0.2,1l1.1,0.4l0.4-0.9c0.4,0.1,0.7,0.1,1.1,0.1l0.2,0.9l1.2-0.2l0-0.9c0.3-0.1,0.6-0.2,0.9-0.3l0.5,0.8l1-0.6l-0.4-0.9 c0.3-0.2,0.5-0.4,0.7-0.6l0.8,0.5l0.7-0.9l-0.7-0.7c0.2-0.3,0.3-0.6,0.4-0.9l0.9,0.2l0.3-1.1l-0.9-0.4c0-0.2,0.1-0.5,0.1-0.7 L147.5,170.5z M141.3,174.8c-2.3,0.3-4.4-1.3-4.7-3.6c-0.3-2.3,1.3-4.4,3.6-4.7c2.3-0.3,4.4,1.3,4.7,3.6 C145.2,172.3,143.6,174.5,141.3,174.8"
                fill="#fff"
              />
              <g fill="#fff">
                <path d="M142.5,113.1l1.2-1.1c0.7-0.6,1.2-1,1.5-1.2c0.4-0.2,0.9-0.3,1.3-0.3c0.5,0.1,0.9,0.3,1.2,0.7 c0.4,0.4,0.6,0.8,0.6,1.3c0,0.5-0.1,0.9-0.4,1.3c-0.2,0.3-0.7,0.8-1.4,1.5l-0.4,0.4l2.6,2.7L148,119L142.5,113.1z M143.6,113.1 l1.9,2l1-0.9c0.4-0.4,0.7-0.7,0.8-0.9c0.1-0.3,0.2-0.5,0.1-0.8c0-0.3-0.2-0.5-0.4-0.7c-0.2-0.2-0.4-0.3-0.7-0.4 c-0.3-0.1-0.5,0-0.8,0.1c-0.2,0.1-0.6,0.3-1,0.7L143.6,113.1z" />
                <path d="M147.4,108.6l1.3-1c0.7-0.6,1.2-0.9,1.5-1.1c0.4-0.2,0.9-0.3,1.4-0.2c0.5,0.1,0.9,0.3,1.2,0.8 c0.3,0.3,0.4,0.7,0.5,1.1c0,0.4,0,0.8-0.2,1.1c-0.2,0.4-0.6,0.8-1.1,1.2l4.6,1.1l-0.8,0.6l-4.6-1.1l-0.4,0.3l2.3,2.9l-0.6,0.5 L147.4,108.6z M148.5,108.7l1.7,2.1l1.1-0.9c0.4-0.3,0.7-0.6,0.8-0.9c0.1-0.2,0.2-0.5,0.2-0.8c0-0.3-0.1-0.5-0.3-0.7 c-0.2-0.2-0.4-0.4-0.6-0.4c-0.3-0.1-0.5-0.1-0.8,0c-0.2,0.1-0.6,0.3-1,0.6L148.5,108.7z" />
                <path d="M152.5,104.6l0.7-0.5l4.7,6.5l-0.7,0.5L152.5,104.6z" />
                <path d="M158.8,109.9l-4.3-6.8l0.2-0.1l7.9,2.3l-3.3-5.2l0.7-0.4l4.3,6.8l-0.2,0.1l-7.8-2.3l3.2,5.2 L158.8,109.9z" />
                <path d="M161.3,99.9l-0.4-0.7l4-2.1l0.4,0.7l-1.6,0.8l3.4,6.4l-0.7,0.4l-3.4-6.4L161.3,99.9z" />
                <path d="M171.6,98.1l-0.9-2.2l0.7-0.3l0.9,2.2l2.2-0.9l0.3,0.7l-2.2,0.9l0.9,2.2l-0.7,0.3l-0.9-2.2 l-2.2,0.9l-0.3-0.7L171.6,98.1z" />
                <path d="M176.9,92.2l0.8-0.2l3,5.2l0.8-6.2l0.2,0l3.7,5l0.2-6l0.8-0.2l-0.3,8.4l-0.1,0l-3.8-5.3l-0.9,6.5 l-0.1,0L176.9,92.2z" />
                <path d="M188,89.6l4.6-0.7l0.1,0.8l-3.8,0.6l0.4,2.5l3.8-0.6l0.1,0.8l-3.8,0.6l0.5,3.1l3.8-0.6l0.1,0.8 l-4.6,0.7L188,89.6z" />
                <path d="M194.1,88.7l1.6-0.1c0.6,0,1.1,0,1.5,0.1c0.4,0.1,0.6,0.3,0.9,0.6c0.2,0.3,0.3,0.6,0.4,1 c0,0.4,0,0.7-0.2,1c-0.2,0.3-0.4,0.6-0.7,0.8c0.4,0.1,0.8,0.3,1,0.4c0.2,0.2,0.4,0.4,0.6,0.7c0.1,0.3,0.2,0.6,0.2,0.9 c0,0.6-0.2,1.2-0.6,1.7c-0.4,0.5-1.1,0.7-1.9,0.8l-2.2,0.1L194.1,88.7z M195.2,92.8l0.2,3.1l1-0.1c0.6,0,1-0.1,1.3-0.3 c0.3-0.1,0.5-0.3,0.6-0.6c0.2-0.3,0.2-0.5,0.2-0.8c0-0.4-0.2-0.7-0.4-0.9c-0.3-0.3-0.6-0.4-1-0.5c-0.3,0-0.8,0-1.5,0L195.2,92.8z M194.9,89.4l0.2,2.6l0.5,0c0.6,0,1-0.1,1.2-0.2c0.3-0.1,0.5-0.3,0.6-0.5c0.1-0.2,0.2-0.5,0.2-0.8c0-0.4-0.2-0.6-0.4-0.8 c-0.3-0.2-0.7-0.3-1.3-0.2L194.9,89.4z" />
                <path d="M205.4,96.3l0.6-8l1.7,0.1c1.2,0.1,2.1,0.2,2.6,0.5c0.8,0.3,1.4,0.8,1.8,1.5 c0.4,0.7,0.6,1.5,0.5,2.5c-0.1,0.8-0.3,1.5-0.7,2.1c-0.4,0.6-0.9,1-1.5,1.3c-0.6,0.3-1.4,0.3-2.4,0.3L205.4,96.3z M206.2,95.6 l0.9,0.1c1.1,0.1,1.9,0.1,2.4,0c0.6-0.2,1.1-0.5,1.5-1c0.4-0.5,0.6-1.1,0.7-1.8c0.1-0.8-0.1-1.4-0.4-2c-0.3-0.6-0.8-1-1.5-1.2 c-0.5-0.2-1.3-0.3-2.5-0.4l-0.6,0L206.2,95.6z" />
                <path d="M214.3,88.9l4.6,0.7l-0.1,0.8l-3.8-0.6l-0.4,2.5l3.8,0.6l-0.1,0.8l-3.8-0.6l-0.5,3.1l3.8,0.6 l-0.1,0.8l-4.6-0.7L214.3,88.9z" />
                <path d="M217.9,96.1l0.8-0.2c0.3,1,0.7,1.5,1.4,1.7c0.3,0.1,0.5,0.1,0.8,0c0.3-0.1,0.5-0.2,0.6-0.4 c0.2-0.2,0.3-0.4,0.3-0.6c0.1-0.3,0-0.5-0.1-0.8c-0.2-0.4-0.5-0.9-1.1-1.6c-0.6-0.6-0.9-1.1-1-1.3c-0.2-0.4-0.3-0.9-0.2-1.3 c0.1-0.3,0.2-0.6,0.5-0.9c0.2-0.2,0.5-0.4,0.8-0.5c0.3-0.1,0.7-0.1,1,0c0.4,0.1,0.7,0.3,1,0.5c0.3,0.3,0.6,0.7,0.8,1.2l-0.8,0.3 c-0.2-0.5-0.4-0.8-0.6-0.9c-0.2-0.2-0.4-0.3-0.6-0.3c-0.3-0.1-0.6,0-0.9,0.1c-0.2,0.1-0.4,0.4-0.5,0.6c0,0.2,0,0.3,0,0.5 c0,0.2,0.1,0.4,0.3,0.6c0.1,0.1,0.4,0.5,0.9,1c0.6,0.7,0.9,1.2,1.1,1.7c0.2,0.4,0.2,0.9,0.1,1.3c-0.1,0.6-0.5,1-1,1.3 c-0.5,0.3-1.1,0.4-1.7,0.3c-0.5-0.1-0.9-0.3-1.2-0.7C218.4,97.3,218.1,96.8,217.9,96.1z" />
                <path d="M225.2,91.1l0.8,0.2l-2.1,7.8l-0.8-0.2L225.2,91.1z" />
                <path d="M234.7,95.6l-0.8,0.4c-0.3-0.6-0.6-1-1.1-1.4c-0.4-0.4-0.9-0.7-1.4-0.8c-0.6-0.2-1.2-0.3-1.9-0.2 c-0.6,0.1-1.2,0.4-1.7,0.7c-0.5,0.4-0.8,0.9-1,1.4c-0.2,0.6-0.2,1.2-0.1,1.8c0.1,0.6,0.4,1.2,0.9,1.7c0.4,0.5,1,0.8,1.6,1.1 c0.8,0.3,1.5,0.3,2.2,0c0.7-0.2,1.2-0.7,1.6-1.4l-2.5-0.9l0.3-0.7l3.3,1.2c-0.4,1.2-1.1,2-2,2.4c-0.9,0.4-2,0.5-3.2,0.1 c-1.4-0.5-2.4-1.4-2.9-2.6c-0.4-1-0.4-1.9-0.1-2.9c0.3-0.7,0.7-1.3,1.2-1.8c0.6-0.5,1.3-0.8,2-0.9c0.8-0.1,1.5-0.1,2.3,0.2 c0.7,0.2,1.2,0.6,1.7,1C233.9,94.3,234.3,94.9,234.7,95.6z" />
                <path d="M233.7,102.4l3.5-7.3l0.2,0.1l2.3,7.9l2.6-5.6l0.7,0.3l-3.4,7.3l-0.2-0.1l-2.2-7.8l-2.6,5.5 L233.7,102.4z" />
              </g>
              <g fill="#fff">
                <polygon points="138.9,183.1 144,220.7 150.2,218.2 145.1,180.6" />
                <polygon points="161.3,141.3 136.1,151.1 136.9,156.8 148.6,152.3 157,215.2 163.2,212.7 154.7,149.9 162.1,147.1" />
                <polygon points="183.5,146.7 177.1,149.3 176,141.3 169.7,143.9 177.2,200 183.5,197.3 182.6,190.1 189,187.4 190.9,201.7 172,209.4 162.7,140.8 181.7,133" />
                <polygon points="199.8,125.2 204.1,156.7 195.1,160.3 190.9,129.1 184.7,131.6 194,200.2 200.1,197.7 195.8,166 204.8,162.4 209.1,193.9 215.2,191.4 205.9,122.8" />
                <path d="M81.1,225.9l1.8,13.2c0,0.1,0,0.8,0.8,1.5c1,0.8,3.2,1.7,8.1,1c6.6-0.9,9.4-4.6,8.5-10.9 l-2.8-20.2L83.1,193l-2.3-16.3l0.1-0.1c0,0,1.1-1.1,3.3-1.4c0.7-0.1,1.5-0.1,2.2,0l0.2,0l1.5,10.1l7.3-1l-1.7-12 c-0.5-0.5-4.1-3.8-9.9-3c-6.3,0.9-10,4.7-9.3,9.6l2.7,19.1l14.7,16.6l0,0.1c0.1,0.8,2.6,18.5,2.7,19.5c0,0.8-1.2,1.4-2.4,1.6 c-0.7,0.1-2,0.1-3.1-0.6L89,235l-1.4-10L81.1,225.9z" />
                <path d="M242.6,86.7c-6.5-4.5-8.6-4.3-11.4-5.7c-6.1-3-15.3-2.5-21.2-3c-6.6-0.1-13.3-0.3-20.1,0.7 c-33.4,4.6-60.2,26.5-72.8,55.2c-5-0.1-9.5,0-13.1,0.5c-13.7,1.8-17.3,9.5-16.7,14.4c0.7,4.9,8,5.6,20,7.1 c12.8,1.6,15,3.3,16.5,14.4c1.5,11.1,3.6,42.1,3.6,42.1L116.3,174l-3.4,1.4l-3,32.8l-5.9-43.5l-6,2.5l9.2,68.5l6-2.5l3.5-39.3 l10.3,33.6l8-3.4c0,0-3.1-46.9-4.8-56.1c-1.7-9.2-1.1-13.7-8.6-15.7c-7.7-2.1-20.7-3.2-21.2-7c-0.5-3.8,5.9-6.7,15-6.5 c10.2,0.1,28.4,1.3,38.4-0.6c13.6-2.6,19.3-8.3,18.7-12.6c-0.6-4.3-6.5-7.8-15.5-6.6c-9,1.2-15.1,4.7-14.9,8.6 c0.3,4.3,3.5,3.8,3.5,3.8s-1.3-6.3,8.9-7.7c6.9-0.9,8.9,2.1,8.9,3.5c0.2,2.8-2.6,5.5-8.6,6.7c-6.2,1.2-19.6,0.2-32.1-0.2 c12.4-25.8,37.5-45.8,67.9-50.1c10.7-1.5,21.2-1,31.2,1.3c11.8,2.8,22.5,7,30.7,13l5.8-1.8" />
              </g>
              <path
                d="M214.5,255.8c-28.8,4-56.3-7.4-74.1-27.9l-0.9,0.4c18,20.8,45.9,32.5,75.1,28.4 c23.3-3.2,43-15.8,55.9-33.3l-1.4,0.3C256.3,240.7,237.1,252.7,214.5,255.8z"
                fill="#fff"
              />
              <path
                d="M251.1,104.4l-13.8,6.1l6,70.3l7.1-0.2l-3.2-31.3l0,0l-0.5-6.5c1.1,0.4,2.4-0.5,3.6-0.4 c1.1,0.1,1.8,0.1,2.3,0.8c0.2,0.3,0.4,0.4,0.6,0.7c0,0,0-0.1,0,0c0.2,0.4,0.4,0.7,0.5,1.1c0.4,0.9,0.7,1.2,0.8,1.3 c-0.1,0-0.3-0.4-0.8-1.3c-0.2-0.4-0.4-0.8-0.5-1.1l6.2,29.6l6.7-2.5L251.1,104.4z M248.5,138.2l-2.7-25.3l-0.5-2.7l5.8,26.7l0,0"
                fill="#fff"
              />
            </g>
          </svg>
        </a>
      </WaterTowerStyled>
    );
  }
}
