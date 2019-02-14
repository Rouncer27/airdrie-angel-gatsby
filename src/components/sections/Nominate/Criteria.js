import React, { Component } from "react";

class Criteria extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.data
            }}
          />
        </div>
      </div>
    );
  }
}

export default Criteria;
