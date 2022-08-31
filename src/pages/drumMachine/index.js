import React, { Component } from 'react'
import '../../style/css/drumMachine.css';
import { setDisplay, setPower, setVolume, setBank } from '../../redux/Drum/drumAction';
import { connect } from "react-redux";
import DrumMachineImplementation from '../../components/drumMachine';

class DrumMachine extends Component {

    constructor(props) {
        super(props)
        // this.state = {  /** @desc if we want to use localstate*/
        //   display: '',
        //   power: true,
        //   volume: 30,
        //   bank: 0
        // }
    }

    render() {
        return (
            <>
                <DrumMachineImplementation data={this.props} />
            </>)
    }
}

const mapStateToProps = state => {
    return {
        display: state.drum.display,
        power: state.drum.power,
        volume: state.drum.volume,
        bank: state.drum.bank,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDisplay: (data) => dispatch(setDisplay(data)),
        setPower: (data) => dispatch(setPower(data)),
        setVolume: (data) => dispatch(setVolume(data)),
        setBank: (data) => dispatch(setBank(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine)