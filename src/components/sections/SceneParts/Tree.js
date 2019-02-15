import React, { Component } from "react";

class Tree extends Component {
  render() {
    const activeTreeClass =
      this.props.location !== "" ? this.props.location : false;
    return (
      <div className={activeTreeClass}>
        <svg viewBox="0 0 52.69 144.76">
          <rect
            fill="#8C5F50"
            x="22.02"
            y="109.24"
            width="8.36"
            height="35.52"
          />
          <path
            fill="#A0D755"
            d="M52.69,73.73c0,40.59-18.12,45.66-27.88,45.66S1.11,112.63,1.11,78.8,13.66,1,27.6,1,52.69,45,52.69,73.73Z"
          />
          <path
            fill="#FFF"
            opacity="0.2"
            d="M27.6,0C20.63,0,1.73,19.62.11,67c-1.4,40.59,10.76,53.43,26.25,53.43-8.68-13.53-8.68-45-8.68-61.89C17.68,19.6,27.6,0,27.6,0Z"
          />
        </svg>
      </div>
    );
  }
}

export default Tree;
