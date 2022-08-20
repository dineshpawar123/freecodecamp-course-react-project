import React, { useState } from 'react';
import { marked } from 'marked'
import { placeholder } from '../constants/markDownPreview';
import '../style/css/quoteMachine.css'
import { Link } from 'react-router-dom';
import { setUserMessage } from '../redux/MarkDownPreview/markDownPreviewAction'
import { connect } from 'react-redux';

class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: placeholder };
  }

  handleChange = (e) => {
    // this.setState({ markdown: e.target.value });
    this.props.setUserMessage(e.target.value)
  }

  render() {
    return (
      <>
        <div id="quote-box">
          <div style={{ backgroundColor: 'rgb(197,171,171)', margin: '10px', padding: '0px', }}>
            {/* <Editor markdown={this.state.markdown} onChange={this.handleChange} /> */}
            <textarea id="editor" rows="10"
              style={{ width: '100%', fontSize: '20px' }}
              value={this.props.markdownMessage}
              onChange={this.handleChange}
              type="text"></textarea>
          </div>
          <div style={{ margin: '0px', padding: '20px', color: 'black', borderRadius: '10px' }}>
            <div style={{ fontSize: '20px', color: 'black', borderRadius: '10px', backgroundColor: 'white' }} id='preview' dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} />
          </div>
        </div>
        <div style={{ textAlign: 'center' }}><Link to={'/'} style={{ textAlign: 'center', textDecoration: 'none', border: '2px solid gray', borderRadius: '4px', padding: '10px', fontSize: '30px' }}>Back</Link></div>
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