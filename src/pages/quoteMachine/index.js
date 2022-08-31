import React, { Component } from 'react';
import '../../style/css/quoteMachine.css'
import { setIncrementIndex } from '../../redux/Quotes/quotesAction';
import { connect } from "react-redux";
import QuoteMachineProjectImplementation from "../../components/quoteMachine";

class QuoteMachineProject extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <QuoteMachineProjectImplementation data={this.props} />
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
