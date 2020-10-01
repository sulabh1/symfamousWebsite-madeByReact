import React, { Component } from "react";

class TimeUntil extends Component {
  render() {
    return (
      <div className="countdown_wrapper">
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">24</div>
            <div className="countdown_tag">hrs</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">2</div>
            <div className="countdown_tag">minutes</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">2</div>
            <div className="countdown_tag">seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeUntil;
