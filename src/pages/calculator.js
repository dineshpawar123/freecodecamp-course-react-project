import React, { Component } from 'react'
import '../style/css/calculator.css'
import { calcData } from '../constants/calculator'
import { Link } from 'react-router-dom';
import { setdisplayText, setLastInput, setLastClicked } from '../redux/Calculator/calculatorAction';
import { connect } from "react-redux"
var mexp = require('math-expression-evaluator');


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

  handleClick = (input, e) => {
    let displayText = this.props.displayText;
    let displayTextLastChar = displayText.charAt(displayText.length - 1);
    let lastInput = this.props.lastInput;
    const lastInputType = this.isType(lastInput);
    const thisInputType = this.isType(input);
    let newDisplay = '';
    let newLastInput = '';
    let lastClicked = this.props.lastClicked;
    if (input === '=') {
      if (this.isType(displayTextLastChar) === 'operator' && displayText.length > 1) {
        displayText = displayText.slice(0, displayText.length - 1);
      }
      newDisplay = mexp.eval(displayText) + '';
    } else if (input === 'AC') {
      newDisplay = '';
      newLastInput = '0';
    } else if (lastInputType === 'operator' && thisInputType === 'operator') {
      newDisplay = displayText.slice(0, displayText.length - 1) + input;
      newLastInput = input;
    } else if (lastInput === '.' && thisInputType === 'operator') {
      newDisplay = displayText;
      newLastInput = lastInput;
    } else if (displayText === '' && (input === '/' || input === '*')) {
      newDisplay = displayText;
      newLastInput = lastInput;
    } else if (lastInput === 'Infinity') {
      newDisplay = input;
      newLastInput = input;
    } else if (lastInputType !== thisInputType) {

      if (displayText.length > 0) {
        newDisplay = displayText + ' ' + input;
      } else {
        newDisplay = input;
      }

      newLastInput = input;

    } else {

      if ((lastInput.includes('.') && input === '.')) {

        newDisplay = displayText;
        newLastInput = lastInput;

      } else if (lastInput === '0') {
        if (input === '0') {
          newDisplay = '0';
          newLastInput = '0';
        } else if (input === '.') {
          newDisplay = lastInput + input;
          newLastInput = newDisplay;
        } else {
          newDisplay = input;
          newLastInput = newDisplay;
        }
      } else {
        if (!(lastClicked === '=') && (lastInput.length <= 21)) {
          newDisplay += (displayText + input);
          let newDisplaySplit = newDisplay.split(' ');
          newLastInput = newDisplaySplit[newDisplaySplit.length - 1];
        } else {
          newDisplay = displayText;
          newLastInput = lastInput;
        }
      }
    }

    this.props.setLastClicked(input);
    this.props.setdisplayText(newDisplay);
    this.props.setLastInput(newLastInput);
    // this.setState({ displayText: newDisplay, lastInput: newLastInput, lastClicked: input });
  }

  render() {
    return (
      <>
        <div className={'outerContainer'}>
          <div className={'displayContainer'}>
            <div id="expression">{this.props.displayText}</div>
            <div id="display1">{this.props.lastInput}</div>
          </div>
          <div className={'buttonContainer'}>
            {
              calcData.map((data) => {
                return <div id={data.id} className={'button'} onClick={(e) => this.handleClick(data.text, e)}>{data.text}</div>
              })
            }
          </div>
        </div>
        <div style={{ textAlign: 'center' }}><Link to={'/'} style={{ textAlign: 'center', textDecoration: 'none', border: '2px solid gray', borderRadius: '4px', padding: '10px', fontSize: '30px' }}>Back</Link></div>
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
