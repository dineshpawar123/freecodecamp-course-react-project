import React, { useState } from 'react';
import { placeholder } from '../../constants/markDownPreview';
import '../../style/css/quoteMachine.css'
import { setUserMessage } from '../../redux/MarkDownPreview/markDownPreviewAction'
import { connect } from 'react-redux';
import MarkDownPreviewImplementation from '../../components/markDownPreview'

class MarkdownPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { markdown: placeholder };
    }


    render() {
        return (
            <>
                <MarkDownPreviewImplementation data={this.props} />
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        markdownMessage: state.markdown.markdown
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserMessage: (data) => dispatch(setUserMessage(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownPreview)