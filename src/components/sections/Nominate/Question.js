import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h2>
              <span>{this.props.data.questionTitleTop}</span>
              <span>{this.props.data.questionTitleBot}</span>
            </h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.data.questionTitleContent
            }}
          />
        </div>
      </div>
    );
  }
}

export default Question;
