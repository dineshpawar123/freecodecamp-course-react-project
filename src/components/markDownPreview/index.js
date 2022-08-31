import React from 'react';
import { marked } from 'marked'
import '../../style/css/quoteMachine.css'
import { Link } from 'react-router-dom';

export default class MarkdownPreviewImplementation extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.props.data.setUserMessage(e.target.value)
    }

    render() {
        return (
            <>
                <div id="quote-box">
                    <div style={{ backgroundColor: 'rgb(197,171,171)', margin: '10px', padding: '0px', }}>
                        <textarea id="editor" rows="10"
                            style={{ width: '100%', fontSize: '20px' }}
                            value={this.props.data.markdownMessage}
                            onChange={this.handleChange}
                            type="text"></textarea>
                    </div>
                    <div style={{ margin: '0px', padding: '20px', color: 'black', borderRadius: '10px' }}>
                        <div style={{ fontSize: '20px', color: 'black', borderRadius: '10px', backgroundColor: 'white' }} id='preview' dangerouslySetInnerHTML={{ __html: marked(this.props.data.markdownMessage) }} />
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}><Link to={'/'} style={{ textAlign: 'center', textDecoration: 'none', border: '2px solid gray', borderRadius: '4px', padding: '10px', fontSize: '30px' }}>Back</Link></div>
            </>
        );
    }
}