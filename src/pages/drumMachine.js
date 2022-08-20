import React, { Component } from 'react'
import { keyArray } from '../constants/drumMachine.js'
import '../style/css/drumMachine.css';
import { Link } from 'react-router-dom';
import { setDisplay, setPower, setVolume, setBank } from '../redux/Drum/drumAction';
import { connect } from "react-redux"

class DrumMachine extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   display: '',
    //   power: true,
    //   volume: 30,
    //   bank: 0
    // }
  }

  handleKeyClicked = (e, keyName, displayName) => {
    this.props.setDisplay(displayName)
    // this.setState({ display: displayName })
    if (this.props.power) {
      let audio = document.getElementById(keyName);
      audio.play();
    }
  }

  render() {
    return (
      <>
        <div id="drum-machine">
          <div className={'grid-container-rightside'}>
            <div onClick={() =>
              this.props.setPower(!this.props.power)}
              // this.setState({ power: !this.state.power })} 
              style={{ border: '2px solid white' }}>
              Power<br />
              {!this.props.power && <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>}
              {this.props.power && <label class="switch">
                <input type="checkbox" checked />
                <span class="slider"></span>
              </label>}
            </div>
            <div style={{ border: '2px solid white' }}
              onClick={() =>
                // this.setState({ bank: this.state.bank === 0 ? 1 : 0 })
                this.props.setBank(this.props.bank === 0 ? 1 : 0)}>

              {/* }> */}
              Bank<br />
              {this.props.bank == '0' && <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>}

              {this.props.bank == '1' && <label class="switch">
                <input type="checkbox" checked />
                <span class="slider"></span>
              </label>}

            </div>
            <div id="display2" style={{ border: '2px solid white', paddingTop: '10px' }}>{this.props.power && this.props.display}</div>
            <div class="slidecontainer" style={{ border: '2px solid white', paddingTop: '-10px' }}>
              Volume{'  '}
              <input type="range" min="1" max="100"
                onChange={(e) => {
                  this.props.power && this.props.setVolume(e.target.value)
                  this.props.setDisplay(`Volume:${e.target.value}`)
                  // display: `Volume:${e.target.value}`
                  // }) 
                }}
                value={this.props.volume} />
            </div>
          </div>
          <div className={'grid-container'}>
            {keyArray.map((data, index) => {
              return <button id={data.name + "-drumpad"} className={'drum-pad '}
                onClick={(e) => this.handleKeyClicked(e, data.name, data.names[this.props.bank])}>
                {data.name}
                <audio className="clip" id={data.name} volume={30} src={data.urls[this.props.bank]} type="audio/mp3"></audio>
              </button>
            })}
          </div>
        </div>
        <br />
        <div style={{ textAlign: 'center' }}><Link to={'/'} style={{ margintop: '20px', textAlign: 'center', textDecoration: 'none', border: '2px solid gray', borderRadius: '4px', padding: '10px', fontSize: '30px' }}>Back</Link></div>

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