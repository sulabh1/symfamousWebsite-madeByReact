import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class TimeUntil extends Component {
  state = {
    date: "oct, 01, 2020",
    hours: "0",
    minutes: "0",
    second: "0",
  };
  getTimeUntil() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const second = time.getSeconds();

    this.setState({
      hours,
      minutes,
      second,
    });
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(), 1000);
  }
  render() {
    return (
      <Slide left delay={2000}>
        <div className="countdown_wrapper">
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">hrs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">minutes</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.second}</div>
              <div className="countdown_tag">seconds</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUntil;
