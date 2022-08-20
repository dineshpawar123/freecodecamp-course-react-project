import React, { Component } from 'react';
import '../style/css/quoteMachine.css'
import { quoteArrayOfObject } from '../constants/quoteMachine.js';
import { Link } from 'react-router-dom';
import { setIncrementIndex } from '../redux/Quotes/quotesAction';
import { connect } from "react-redux"

class QuoteMachineProject extends Component {

    constructor(props) {
        super(props)
    }

    handleClick = () => {
        let incrementIndex = this.props.incrementIndex === 5 ? 1 : this.props.incrementIndex + 1
        this.props.setIncrementIndex(incrementIndex)
    }

    render() {
        return (
            <>
                <div id={'quote-box'} >
                    {quoteArrayOfObject.map((data, index) => {
                        return data.id === this.props.incrementIndex ? <React.Fragment>
                            <div id={'text'}>
                                {data.quote}
                            </div>
                            <div id={'author'}>
                                {data.author}
                            </div>
                        </React.Fragment> : ''

                    })
                    }
                    <div>
                        <div className={"grid-containerBelow"}>
                            <div id={"new-quote"} onClick={() => this.handleClick()}>
                                Next Quote
                        </div>
                            <a id={'tweet-quote'} target="_blank" href={'https://twitter.com/intent/tweet'}>Tweet Quote</a>
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
        incrementIndex: state.incrementIndex.index,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIncrementIndex: (data) => dispatch(setIncrementIndex(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteMachineProject)
