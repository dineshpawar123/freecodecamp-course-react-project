import React, { Component } from 'react'
import '../style/css/clock.css';
import { Link } from 'react-router-dom';
import { playPause, reset, breakDecrement, breakIncrement, sessionDecrement, sessionIncrement, secondMinute } from '../redux/Clock/clockAction';
import { connect } from "react-redux"

export default class Clock extends Component {
    constructor(props) {
        super(props)
        // this.breakDecrementMethod = this.breakDecrementMethod.bind(this);
        // this.breakIncrementMethod = this.breakIncrementMethod.bind(this);
        // this.sessionDecrementMethod = this.sessionDecrementMethod.bind(this);
        // this.sessionIncrementMethod = this.sessionIncrementMethod.bind(this);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            minute: 25,
            second: 60,
            PlayPause: false,
            flage: true
        }
    }

    componentDidMount() {
        if (this.state.PlayPause)
            setTimeout(() => {
                // this.props.secondMinute({ second: this.state.second - 1, minute: this.state.minute })
                this.setState({
                    second: this.state.second - 1,
                });
            }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.PlayPause) {
            setTimeout(() => {
                if (this.state.second == 0) {
                    if (this.state.minute == 0) {
                        // this.props.secondMinute({ second: 59, minute: this.props.state.breakLength })
                        this.setState({
                            minute: this.state.breakLength,
                            second: 59,
                        });
                    }
                    else {
                        // this.props.secondMinute({ second: 59, minute: this.props.state.minute - 1 })

                        this.setState({
                            minute: this.state.minute - 1,
                            second: 59,
                        });
                    }
                }
                else {
                    // this.props.secondMinute({
                    //     second: this.props.state.second - 1,
                    //     minute: this.props.state.minute
                    // })
                    this.setState({
                        second: this.state.second - 1,
                        minute: this.state.minute
                    });

                }
            }, 1000)
        }
        if ((prevState.sessionLength !== this.state.sessionLength) || (prevState.breakLength !== this.state.breakLength)) {
            this.setState({
                second: 0,
                minute: this.state.sessionLength,
            });
            // this.props.secondMinute({
            //     second: 0,
            //     minute: this.props.state.sessionLength
            // })
        }
    }

    // breakDecrementMethod() {
    //     if (this.state.breakLength >= 2 && !(this.state.PlayPause))
    //         // this.props.breakDecrement(this.props.state.breakLength)
    //         this.setState({ breakLength: this.state.breakLength - 1 })
    // }

    // breakIncrementMethod() {
    //     if (this.state.breakLength <= 59 && !(this.state.PlayPause))
    //         // this.props.breakIncrement(this.props.state.breakLength)
    //         this.setState({ breakLength: this.state.breakLength + 1 })
    // }

    // sessionDecrementMethod() {
    //     if (this.state.sessionLength >= 2 && !(this.state.PlayPause))
    //         // this.props.sessionDecrement(this.props.state.sessionLength)
    //         this.setState({ sessionLength: this.sessionLength - 1 })
    // }

    // sessionIncrementMethod() {
    //     if (this.state.sessionLength <= 59 && !(this.state.PlayPause))
    //         // this.props.sessionIncrement(this.props.state.sessionLength)
    //         this.setState({ sessionLength: this.sessionLength + 1 })
    // }

    render() {
        return (
            <>
                <div className={'outercontainer'}>
                    <div className="topcontainer">
                        <div className="session">
                            <div id="timer-label">Session</div>
                            <div id="time-left">{this.state.minute}:{this.state.second == 60 ? '00' : this.state.second}</div>
                        </div>
                        <div className="plusminus">
                            <div id="start_stop"
                                style={{ border: '3px solid white', borderRadius: '10px', padding: '10px' }}
                                onClick={() => {
                                    // this.playPause(this.state.PlayPause)
                                    this.setState({ PlayPause: !this.state.PlayPause })
                                }}
                            >
                                <span style={{ marginRight: '20px' }}>Play</span>
                                <span>pause</span>
                            </div>
                            <div id="reset"
                                style={{ border: '3px solid white', borderRadius: '10px', padding: '10px' }}
                                onClick={() => {
                                    // this.props.reset();
                                    this.setState({ second: '0', sessionLength: '25', minute: '25', breakLength: '5' })
                                }}>reset</div>
                        </div>
                    </div>
                    <div className={'topcontainer'}>
                        <div className="">
                            <div id="break-label" >Break Length</div>
                            <div className="plusminus1">
                                <div id="break-decrement"
                                    onClick={() => {
                                        if (this.state.breakLength >= 2 && !(this.state.PlayPause))
                                            this.setState({ breakLength: Number(this.state.breakLength) - 1 })
                                        // this.state.breakDecrement(this.state.breakLength)
                                        // this.breakDecrementMethod
                                    }}>-</div>
                                <div id="break-length">{this.state.breakLength}</div>
                                <div id="break-increment"
                                    onClick={() => {
                                        if (this.state.breakLength <= 59 && !(this.state.PlayPause))
                                            this.setState({ breakLength: Number(this.state.breakLength) + 1 })
                                        // this.props.breakIncrement(this.props.state.breakLength)
                                        // this.breakIncrementMethod
                                    }}>+</div>
                            </div>
                        </div>
                        <div className="">
                            <div id="session-label">Session Length</div>
                            <div className="plusminus2">
                                <div id="session-decrement"
                                    onClick={() => {
                                        if (this.state.sessionLength >= 2 && !(this.state.PlayPause))
                                            this.setState({ sessionLength: this.state.sessionLength - 1 })
                                        // this.setState({ breakLength: this.state.breakLength + 1 })
                                        // this.props.sessionDecrement(this.props.state.sessionLength)
                                        // this.sessionDecrementMethod;
                                    }}
                                >-</div>
                                <div id="session-length">{this.state.sessionLength}</div>{/*>=0 && <=60*/}
                                <div id="session-increment"
                                    onClick={() => {
                                        if (this.state.sessionLength <= 59 && !(this.state.PlayPause))
                                            this.setState({ sessionLength: this.state.sessionLength + 1 })
                                        // this.props.sessionIncrement(this.props.state.sessionLength)
                                        // this.sessionIncrementMethod;
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

// const mapStateToProps = state => {
//     return {
//         state: state.clock
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         playPause: (payload) => dispatch(playPause(payload)),
//         reset: () => dispatch(reset()),
//         breakDecrement: (payload) => dispatch(breakDecrement(payload)),
//         breakIncrement: (payload) => dispatch(breakIncrement(payload)),
//         sessionDecrement: (payload) => dispatch(sessionDecrement(payload)),
//         sessionIncrement: (payload) => dispatch(sessionIncrement(payload)),
//         secondMinute: (payload) => dispatch(secondMinute(payload))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Clock)