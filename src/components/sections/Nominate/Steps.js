import React, { Component } from "react";

class Steps extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h2>How to Nominate Someone</h2>
          </div>
          <div>
            {this.props.data.map((step, index) => {
              return (
                <div key={index}>
                  <div>
                    <h3>{step.title}</h3>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: step.content }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Steps;
