import React, { Component } from 'react'
import '../../style/css/calculator.css'
import { setdisplayText, setLastInput, setLastClicked } from '../../redux/Calculator/calculatorAction';
import { connect } from "react-redux"
import CalculatorImplementation from "../../components/calculator";

class calculator extends Component {
    constructor(props) {
        super(props);
        // this.state = {   // if we want localstate
        //   displayText: '',
        //   lastInput: '0',
        //   lastClicked: ''
        // }
    }

    isType = (char) => {
        if (['/', '*', '-', '+'].includes(char)) {
            return 'operator';
        } else {
            return 'operand'
        }
    }

    render() {
        return (
            <>
                <CalculatorImplementation data={this.props} />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        displayText: state.calculator.displayText,
        lastInput: state.calculator.lastInput,
        lastClicked: state.calculator.lastInput,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setdisplayText: (data) => dispatch(setdisplayText(data)),
        setLastInput: (data) => dispatch(setLastInput(data)),
        setLastClicked: (data) => dispatch(setLastClicked(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(calculator)
