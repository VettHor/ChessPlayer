import React from 'react';
import './Timer.css'
import {Form, Button} from 'react-bootstrap'

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            TIME: 0,
            totalSeconds: 0,
            myTimer: null
        };
        this.updateTimer = this.updateTimer.bind(this);
        this.editNumberView = this.editNumberView.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    convertTime() {
        return this.editNumberView(parseInt(this.state.totalSeconds / 60)) + 
        ':' + this.editNumberView(this.state.totalSeconds % 60);
    }
    
    editNumberView(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
    }

    updateTimer() {
        this.setState({
            totalSeconds: this.state.totalSeconds - 1
        });
        if(this.state.totalSeconds < 0) {
            clearInterval(this.state.myTimer);
            this.setState({
                totalSeconds: this.state.TIME,
                myTimer: null
            });
            alert("Time is up!");
        } 
    }

    startTimer(event) {
        event.preventDefault();
        if(this.state.myTimer !== null){
            clearInterval(this.state.myTimer);
            this.setState({
                myTimer: null
            });
        }
        var inputMinutesSeconds = document.getElementById("inputTime").value.split(':');
        var inputTimeVal = parseInt(inputMinutesSeconds[0]) * 60 + parseInt(inputMinutesSeconds[1]);
        this.setState({
            TIME: inputTimeVal,
            totalSeconds: inputTimeVal,
            myTimer: setInterval(this.updateTimer, 1000)
        });
    }

    render() {
        return(
            <Form className="bg-form bordered mx-auto" style={{width: '500px'}} onSubmit={(event) => this.startTimer(event)}>
                <Form.Group className="row justify-content-center text-center">
                    <Form.Label className="text-white mb-0">
                        Time for the game:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        id="inputTime"
                        placeholder="00:00"
                        className="w-50 text-center fs-5"
                        pattern="^[0-9]+:[0-9]+"
                        required
                        >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="row justify-content-center text-center">
                    <Button
                        className="mt-2"
                        type="submit">
                        Start
                    </Button><p className="mb-1"/>
                    <p className="bg-white mt-1 fs-2 w-50 border border-4 border-danger mb-2" 
                       id="gameTimer">
                        {this.convertTime()}
                    </p>
                </Form.Group>
            </Form>
        );
    }
}

export default Timer;