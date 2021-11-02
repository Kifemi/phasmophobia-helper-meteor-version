import React, { Component, useState, useEffect } from 'react'

class Timer extends Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 180 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.resetValue = 180;
        this.timerOn = false;
        this.timerMessage = "Off";
    }

    secondsToTime(secs) {
        let minutes = Math.floor(secs / 60).toString().padStart(2, "0");
        let seconds = (secs % 60).toString().padStart(2, "0");

        let obj = {
            "m": minutes,
            "s": seconds,
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }
    
    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
            this.timerOn = true;
        } else {
            clearInterval(this.timer, this.timer = 0);
            this.timerOn = false;
        }
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        this.updateTimerMessage();
        if (seconds <= 0) {
            clearInterval(this.timer, this.resetTimer(this.resetValue));
        }
    }

    resetTimer() {
        this.timerMessage = "Off";
        clearInterval(this.timer, this.timer = 0);
        this.timerOn = false;  
        let timeLeftVar = this.secondsToTime(180);
        this.setState({ time: timeLeftVar, seconds: 180 });
    }

    updateTimerMessage() {
        if(this.state.seconds < 180 && this.state.seconds >= 90) {
            this.timerMessage = "Safe";
        } else if(this.state.seconds < 90) {
            this.timerMessage = "Spirit can't hunt";
        } else {
            this.timerMessage = "Off";
        }
    }

    render() {
        return(
            <div>
                <div className="timer">
                    <span className="timer__part">{this.state.time.m}</span>
                    <span className="timer__part">:</span>
                    <span className="timer__part">{this.state.time.s}</span>
                    <button type="button" className={`timer__btn ${this.timerOn ? "timer__btn--stop" : "timer__btn--start"} `} 
                        onClick={this.startTimer}>
                        {this.timerOn ? <span className="material-icons">pause</span> : <span className="material-icons">play_arrow</span>}
                    </button>
                    <button type="button" className="timer__btn" onClick={this.resetTimer}>
                        <span className="material-icons">timer</span>
                    </button>
                </div>
                <div className="timer timer__part">
                    {this.timerMessage}
                </div>
            </div>
        );
    };
}

export default Timer;