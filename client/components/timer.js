import React, { Component, useState, useEffect } from 'react'

class Timer extends Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 180 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
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
        }
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        console.log(this.state.time)
        if (seconds <= 0) {
            clearInterval(this.timer);
        }
    }

    resetTimer() {
        clearInterval(this.timer);
        let timeLeftVar = this.secondsToTime(180);
        this.setState({ time: timeLeftVar, seconds: 180 });
    }

    render() {
        return(
            <div className="timer">
                <span className="timer__part">{this.state.time.m}</span>
                <span className="timer__part">:</span>
                <span className="timer__part">{this.state.time.s}</span>
                <button type="button" className="timer__btn timer__btn--control" onClick={this.startTimer}>
                    <span className="material-icons">play_arrow</span>
                </button>
                <button type="button" className="timer__btn timer__btn--reset" onClick={this.resetTimer}>
                    <span className="material-icons">timer</span>
                </button>
         </div>
        );
    };
}

export default Timer;
// function Timer() {
//     let interval = null;
//     //let remainingSeconds = 90;

//     const [time, setTime] = useState([0, 0])
//     const [remainingSeconds, setRemainingSeconds] = useState(90)

//     const handleStartClick = function() {
//         // TODO:
//     }

//     const handleStopClick = function() {
//         // TODO:
//     }

//     const updateInterfaceTime = function() {
//         const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, "0");
//         const seconds = (remainingSeconds % 60).toString().padStart(2, "0");

//         setTime([minutes, seconds]);
//     }

//     const updateInterfaceControls = function() {
//         return interval === null ? true :false;  
//     }

//     const updateInterfaceIcons = function() {
//         if(updateInterfaceControls() === true) {
//             return <span className="material-icons">play_arrow</span>
//         } else {
//             return <span className="material-icons">pause</span>
//         }
//     }
    
//     const startTimer = function() {
//         if(remainingSeconds === 0) return;
//         interval = setInterval(() => {
//             timeRemaining = remainingSeconds-1;
//             setRemainingSeconds(timeRemaining);
//             updateInterfaceTime();

//             if(remainingSeconds <= 0) {
//                 stop();
//             }

//             console.log(time)
//         }, 1000);

//         updateInterfaceIcons();
//     }

//     const stopTimer = function() {
//         clearInterval(interval);

//         interval = null;

//         updateInterfaceIcons();
//     }

//     //startTimer();

//     return (
//         <div className="timer">
//             <span className="timer__part timer__part--minutes">00</span>
//             <span className="timer__part">:</span>
//             <span className="timer__part timer__part--seconds">00</span>
//             <button type="button" className={`timer__btn timer__btn--control ${updateInterfaceControls() ? "timer__btn--start" : "timer__btn--stop"} `}>
//                 {updateInterfaceIcons()}
//             </button>
//             <button type="button" className="timer__btn timer__btn--reset">
//                 <span className="material-icons">timer</span>
//             </button>
//         </div>
//     )
// }

// export default Timer;