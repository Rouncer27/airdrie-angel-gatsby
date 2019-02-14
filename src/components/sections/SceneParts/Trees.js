import React, { Component } from "react";
import styled from "styled-components";

const TreesStyled = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 15rem;
  width: 50rem;
  transition: all 1.75s ease;
  z-index: 6000;
  opacity: 1;

  svg,
  path,
  g {
    transition: all 1.75s ease;
  }

  .trunks {
    transition: all 1.75s ease;
  }

  &.dusk {
    .trunks {
      fill: #d2691e;
    }
    .trees {
      fill: #ff9a00;
    }

    .tree-shadow {
      fill: #fff;
      opacity: 0.2;
    }
  }

  &.dusk.daytime {
    .trunks {
      fill: #8c5f50;
    }
    .trees {
      fill: #a0d755;
    }

    .tree-shadow {
      fill: #fff;
      opacity: 0.2;
    }
  }

  &.dusk.daytime.sunset {
    .trunks {
      fill: #9c0f5f;
    }
    .trees {
      fill: #c91b26;
    }

    .tree-shadow {
      fill: #fff;
      opacity: 0.2;
    }
  }

  &.dusk.daytime.sunset.night {
    .trunks {
      fill: #053752;
    }
    .trees {
      fill: #001a26;
    }

    .tree-shadow {
      fill: #fff;
      opacity: 0.2;
    }
  }

  svg {
    width: 100%;
  }
`;

class Trees extends Component {
  render() {
    const treesLocationClass =
      this.props.location !== "" ? this.props.location : false;
    const treesActiveClass =
      (this.props.time === 0 && "dusk") ||
      (this.props.time === 1 && "dusk daytime") ||
      (this.props.time === 2 && "dusk daytime sunset") ||
      (this.props.time === 3 && "dusk daytime sunset night");

    return (
      <TreesStyled
        className={`${treesActiveClass ? treesActiveClass : ""} ${
          treesLocationClass ? treesLocationClass : ""
        }`}
      >
        <svg width="100%" viewBox="0 0 85.04 41.1">
          <rect
            className="trunks"
            x="75.121"
            y="26.724"
            fill="#8C5F50"
            width="2.166"
            height="8.666"
          />
          <rect
            className="trunks"
            x="67.539"
            y="28.89"
            fill="#8C5F50"
            width="2.168"
            height="6.5"
          />
          <path
            className="trees"
            fill="#A0D755"
            d="M83.785,21.309c0,4.187-3.393,7.581-7.58,7.581s-7.582-3.395-7.582-7.581 c0-9.749,3.395-20.579,7.582-20.579S83.785,11.56,83.785,21.309z"
          />
          <path
            className="trees"
            fill="#A0D755"
            d="M75.121,24.933c0,3.382-2.91,6.125-6.5,6.125c-3.588,0-6.498-2.743-6.498-6.125 c0-7.873,2.91-16.622,6.498-16.622C72.211,8.311,75.121,17.06,75.121,24.933z"
          />
          <g className="tree-shadow" opacity="0.2" fill="#FFF">
            <path d="M72.955,21.309c0-8.892,1.883-18.68,4.332-20.333c-0.354-0.16-0.715-0.247-1.082-0.247 c-4.188,0-7.582,10.83-7.582,20.579c0,4.187,3.395,7.581,7.582,7.581c0.369,0,0.729-0.035,1.082-0.086 C74.84,28.277,72.955,25.127,72.955,21.309z" />
            <path d="M66.457,24.933c0-7.106,1.383-14.901,3.191-16.359c-0.334-0.157-0.676-0.263-1.025-0.263 c-3.588,0-6.5,8.749-6.5,16.622c0,3.382,2.912,6.125,6.5,6.125c0.35,0,0.691-0.034,1.025-0.084 C67.84,30.508,66.457,27.984,66.457,24.933z" />
          </g>
        </svg>
      </TreesStyled>
    );
  }
}

export default Trees;
