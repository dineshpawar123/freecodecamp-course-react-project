import React, { Component } from 'react'
import '../../style/css/clock.css';
import { Link } from 'react-router-dom';
import { playPause, reset, breakDecrement, breakIncrement, sessionDecrement, sessionIncrement, secondMinute } from '../../redux/Clock/clockAction';
import { connect } from "react-redux"

class Clock extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        if (this.props.state.PlayPause)
            setTimeout(() => {
                console.log("insetminute1")
                this.props.secondMinute({ second: this.props.state.second - 1, minute: this.props.state.minute })
            }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("--->", this.props.state.PlayPause, this.props.state.second == 0)

        if (this.props.state.PlayPause) {
            setTimeout(() => {
                if (this.props.state.second == 0) {
                    if (this.props.state.minute == 0) {
                        console.log("insetminute2")
                        this.props.secondMinute({ second: 59, minute: this.props.state.breakLength })
                    }
                    else {
                        console.log("insetminute3", prevProps.state.second, this.props.state.second)
                        this.props.secondMinute({ second: 59, minute: this.props.state.minute - 1 })
                    }
                }
                else {
                    console.log("insetminute4")
                    this.props.secondMinute({
                        second: this.props.state.second - 1,
                        minute: this.props.state.minute
                    })
                }
            }, 1000)
        }
        if ((prevProps && prevProps.state.sessionLength !== this.props.state.sessionLength) || (prevProps && prevProps.state.breakLength !== this.props.state.breakLength)) {
            this.props.secondMinute({
                second: 0,
                minute: this.props.state.sessionLength
            })
        }
    }
    render() {
        return (
            <>
                <div className={'outercontainer'}>
                    <div className="topcontainer">
                        <div className="session">
                            <div id="timer-label">Session</div>
                            <div id="time-left">{this.props.state.minute}:{this.props.state.second == 60 ? '00' : this.props.state.second}</div>
                        </div>
                        <div className="plusminus">
                            <div id="start_stop"
                                style={{ border: '3px solid white', borderRadius: '10px', padding: '10px' }}
                                onClick={() => {
                                    this.props.playPause(this.props.state.PlayPause)
                                }}
                            >
                                <span style={{ marginRight: '20px' }}>Play</span>
                                <span>pause</span>
                            </div>
                            <div id="reset"
                                style={{ border: '3px solid white', borderRadius: '10px', padding: '10px' }}
                                onClick={() => {
                                    this.props.reset();
                                    this.props.secondMinute({
                                        second: 0,
                                        minute: this.props.state.sessionLength
                                    })
                                }}>reset</div>
                        </div>
                    </div>
                    <div className={'topcontainer'}>
                        <div className="">
                            <div id="break-label" >Break Length</div>
                            <div className="plusminus1">
                                <div id="break-decrement"
                                    onClick={() => {
                                        if (this.props.state.breakLength >= 2 && !(this.props.state.PlayPause))
                                            this.props.breakDecrement(this.props.state.breakLength)
                                    }}>-</div>
                                <div id="break-length">{this.props.state.breakLength}</div>
                                <div id="break-increment"
                                    onClick={() => {
                                        if (this.props.state.breakLength <= 59 && !(this.props.state.PlayPause))
                                            this.props.breakIncrement(this.props.state.breakLength)
                                    }}>+</div>
                            </div>
                        </div>
                        <div className="">
                            <div id="session-label">Session Length</div>
                            <div className="plusminus2">
                                <div id="session-decrement"
                                    onClick={() => {
                                        if (this.props.state.sessionLength >= 2 && !(this.props.state.PlayPause))
                                            this.props.sessionDecrement(this.props.state.sessionLength)

                                    }}
                                >-</div>
                                <div id="session-length">{this.props.state.sessionLength}</div>{/*>=0 && <=60*/}
                                <div id="session-increment"
                                    onClick={() => {
                                        if (this.props.state.sessionLength <= 59 && !(this.props.state.PlayPause))
                                            this.props.sessionIncrement(this.props.state.sessionLength)
                                    }}
                                >+</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}><Link to={'/'} style={{ textAlign: 'center', textDecoration: 'none', border: '2px solid gray', borderRadius: '4px', padding: '10px', fontSize: '30px' }}>Back</Link></div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.clock
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playPause: (payload) => dispatch(playPause(payload)),
        reset: () => dispatch(reset()),
        breakDecrement: (payload) => dispatch(breakDecrement(payload)),
        breakIncrement: (payload) => dispatch(breakIncrement(payload)),
        sessionDecrement: (payload) => dispatch(sessionDecrement(payload)),
        sessionIncrement: (payload) => dispatch(sessionIncrement(payload)),
        secondMinute: (payload) => dispatch(secondMinute(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock)