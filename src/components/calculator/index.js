import React, { Component } from 'react'
import '../../style/css/calculator.css'
import { calcData } from '../../constants/calculator'
import { Link } from 'react-router-dom';
import { handleClick } from './handleClick';
var mexp = require('math-expression-evaluator');

export default class CalculatorImplementation extends Component {
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
                <div className={'outerContainer'}>
                    <div className={'displayContainer'}>
                        <div id="expression">{this.props.data.displayText}</div>
                        <div id="display1">{this.props.data.lastInput}</div>
                    </div>
                    <div className={'buttonContainer'}>
                        {
                            calcData.map((data) => {
                                return <div id={data.id} className={'button'} onClick={(e) => handleClick(data.text, this.props.data, e)}>{data.text}</div>
                            })
                        }
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}><Link to={'/'} style={{ textAlign: 'center', textDecoration: 'none', border: '2px solid gray', borderRadius: '4px', padding: '10px', fontSize: '30px' }}>Back</Link></div>
            </>
        )
    }
}